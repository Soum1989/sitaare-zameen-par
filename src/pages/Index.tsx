import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MemoryGame } from "@/components/games/MemoryGame";
import { ColorPatternGame } from "@/components/games/ColorPatternGame";
import { MathGame } from "@/components/games/MathGame";
import { WordPictureGame } from "@/components/games/WordPictureGame";
import { Brain, Palette, Calculator, BookOpen, Star, Heart } from "lucide-react";

type GameType = "menu" | "memory" | "color" | "math" | "word";

const Index = () => {
  const [currentGame, setCurrentGame] = useState<GameType>("menu");
  const [playerName, setPlayerName] = useState("");
  const [score, setScore] = useState(0);

  const games = [
    {
      id: "memory" as const,
      title: "Memory Match",
      description: "Find matching pairs of cards",
      icon: Brain,
      color: "text-game-primary",
    },
    {
      id: "color" as const,
      title: "Color Patterns",
      description: "Remember and repeat color sequences",
      icon: Palette,
      color: "text-game-secondary",
    },
    {
      id: "math" as const,
      title: "Number Fun",
      description: "Simple addition and counting",
      icon: Calculator,
      color: "text-game-success",
    },
    {
      id: "word" as const,
      title: "Word Pictures",
      description: "Match words with pictures",
      icon: BookOpen,
      color: "text-game-danger",
    },
  ];

  const renderGame = () => {
    switch (currentGame) {
      case "memory":
        return <MemoryGame onBack={() => setCurrentGame("menu")} onScore={(points) => setScore(score + points)} />;
      case "color":
        return <ColorPatternGame onBack={() => setCurrentGame("menu")} onScore={(points) => setScore(score + points)} />;
      case "math":
        return <MathGame onBack={() => setCurrentGame("menu")} onScore={(points) => setScore(score + points)} />;
      case "word":
        return <WordPictureGame onBack={() => setCurrentGame("menu")} onScore={(points) => setScore(score + points)} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-calm p-4">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Heart className="w-12 h-12 text-game-danger" />
                  <h1 className="text-game-xl text-game-primary">Brain Games</h1>
                  <Heart className="w-12 h-12 text-game-danger" />
                </div>
                <p className="text-game-lg text-muted-foreground mb-4">
                  Fun and engaging games to exercise your mind
                </p>
                
                {/* Score Display */}
                <Card className="inline-block bg-gradient-success text-white shadow-card">
                  <CardContent className="flex items-center gap-2 p-4">
                    <Star className="w-6 h-6" />
                    <span className="text-game-md font-bold">Score: {score}</span>
                  </CardContent>
                </Card>
              </div>

              {/* Game Selection Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {games.map((game) => {
                  const IconComponent = game.icon;
                  return (
                    <Button
                      key={game.id}
                      variant="gameCard"
                      onClick={() => setCurrentGame(game.id)}
                      className="h-auto flex-col gap-4"
                    >
                      <IconComponent className={`w-12 h-12 ${game.color}`} />
                      <div>
                        <h3 className="text-game-lg font-bold mb-2">{game.title}</h3>
                        <p className="text-muted-foreground text-sm">{game.description}</p>
                      </div>
                    </Button>
                  );
                })}
              </div>

              {/* Instructions */}
              <Card className="bg-card/80 backdrop-blur shadow-gentle">
                <CardHeader>
                  <CardTitle className="text-game-lg text-center text-game-primary">
                    How to Play
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <div className="space-y-2">
                      <div className="text-2xl">👆</div>
                      <p className="text-game-md">Tap to select games and answers</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl">🎯</div>
                      <p className="text-game-md">Complete challenges to earn points</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl">🎉</div>
                      <p className="text-game-md">Celebrate your progress!</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl">💪</div>
                      <p className="text-game-md">Take breaks when needed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return renderGame();
};

export default Index;