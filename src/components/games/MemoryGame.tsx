import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MemoryGameProps {
  onBack: () => void;
  onScore: (points: number) => void;
}

interface GameCard {
  id: number;
  symbol: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export const MemoryGame = ({ onBack, onScore }: MemoryGameProps) => {
  const { toast } = useToast();
  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);

  const symbols = ["🌟", "🎈", "🌸", "🎯", "🌞", "🎨"];

  const initializeGame = () => {
    const gameSymbols = symbols.slice(0, 6);
    const allCards = [...gameSymbols, ...gameSymbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({
        id: index,
        symbol,
        isFlipped: false,
        isMatched: false,
      }));
    
    setCards(allCards);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const firstCard = cards[first];
      const secondCard = cards[second];

      if (firstCard.symbol === secondCard.symbol) {
        // Match found
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isMatched: true, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
          setMatches(prev => prev + 1);
          onScore(10);
          toast({
            title: "Great match! 🎉",
            description: "You found a pair! +10 points",
          });
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          setCards(prev => prev.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards, cards, onScore, toast]);

  useEffect(() => {
    if (matches === 6) {
      const bonus = Math.max(0, 50 - moves * 2);
      onScore(bonus);
      toast({
        title: "Congratulations! 🏆",
        description: `You completed the game in ${moves} moves! Bonus: +${bonus} points`,
      });
    }
  }, [matches, moves, onScore, toast]);

  const handleCardClick = (cardId: number) => {
    if (flippedCards.length >= 2) return;
    if (cards[cardId].isFlipped || cards[cardId].isMatched) return;

    setCards(prev => prev.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    ));
    setFlippedCards(prev => [...prev, cardId]);
  };

  return (
    <div className="min-h-screen bg-gradient-calm p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="gameSecondary" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
            Back to Menu
          </Button>
          <h1 className="text-game-xl text-game-primary">Memory Match</h1>
          <Button variant="gameSecondary" onClick={initializeGame}>
            <RefreshCw className="w-5 h-5" />
            New Game
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-6 mb-6">
          <Card className="bg-card shadow-gentle">
            <CardContent className="flex items-center gap-2 p-4">
              <Star className="w-5 h-5 text-game-success" />
              <span className="text-game-md font-bold">Moves: {moves}</span>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-gentle">
            <CardContent className="flex items-center gap-2 p-4">
              <Star className="w-5 h-5 text-game-primary" />
              <span className="text-game-md font-bold">Matches: {matches}/6</span>
            </CardContent>
          </Card>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 max-w-lg mx-auto">
          {cards.map((card) => (
            <Button
              key={card.id}
              variant="gameCard"
              onClick={() => handleCardClick(card.id)}
              className={`aspect-square text-4xl transition-all duration-300 ${
                card.isFlipped || card.isMatched
                  ? "bg-gradient-primary text-white"
                  : "bg-card hover:bg-game-calm"
              } ${card.isMatched ? "opacity-75 scale-95" : ""}`}
              disabled={card.isFlipped || card.isMatched || flippedCards.length >= 2}
            >
              {card.isFlipped || card.isMatched ? card.symbol : "?"}
            </Button>
          ))}
        </div>

        {/* Instructions */}
        <Card className="mt-8 bg-card/80 backdrop-blur shadow-gentle">
          <CardContent className="p-6 text-center">
            <h3 className="text-game-lg font-bold mb-2 text-game-primary">How to Play</h3>
            <p className="text-game-md text-muted-foreground">
              Click on cards to flip them over. Find matching pairs by remembering where each symbol is located.
              Complete all pairs to win!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};