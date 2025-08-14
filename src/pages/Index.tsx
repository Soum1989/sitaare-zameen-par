import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Congratulations } from "@/components/ui/congratulations";
import { MemoryGame } from "@/components/games/MemoryGame";
import { ColorPatternGame } from "@/components/games/ColorPatternGame";
import { MathGame } from "@/components/games/MathGame";
import { WordPictureGame } from "@/components/games/WordPictureGame";
import { Brain, Palette, Calculator, BookOpen, Star, Heart, Sparkles } from "lucide-react";

type GameType = "menu" | "memory" | "color" | "math" | "word";

const Index = () => {
  const [currentGame, setCurrentGame] = useState<GameType>("menu");
  const [playerName, setPlayerName] = useState("");
  const [score, setScore] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);

  const handleScore = (points: number) => {
    setGameScore(prev => {
      const newGameScore = prev + points;
      return Math.min(newGameScore, 250); // Cap each game at 250 points
    });
    
    setScore(prev => {
      const newTotalScore = prev + points;
      // Check if player reaches 10000 points threshold
      if (newTotalScore >= 10000 && !isAdvancedMode) {
        setIsAdvancedMode(true);
        setTimeout(() => {
          alert("🎉 Congratulations! You've reached 10000 points! Games are now more challenging and rewarding!");
        }, 100);
      }
      return newTotalScore;
    });
    
    setShowCongratulations(true);
    
    // Auto-close congratulations after 3 seconds
    setTimeout(() => {
      setShowCongratulations(false);
    }, 3000);
  };

  const handleGameStart = (gameType: GameType) => {
    setGameScore(0); // Reset game score when starting new game
    setCurrentGame(gameType);
  };

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
    const gameProps = {
      onBack: () => setCurrentGame("menu"),
      onScore: handleScore,
      isAdvancedMode,
      gameScore
    };

    switch (currentGame) {
      case "memory":
        return <MemoryGame {...gameProps} />;
      case "color":
        return <ColorPatternGame {...gameProps} />;
      case "math":
        return <MathGame {...gameProps} />;
      case "word":
        return <WordPictureGame {...gameProps} />;
      default:
        return (
          <div className="min-h-screen bg-gradient-calm">
            {/* Hero Section with Movie Poster */}
            <div className="relative overflow-hidden">
              <div 
                className="h-80 bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: "url('/lovable-uploads/sitaare-poster-enhanced.png')",
                  backgroundPosition: "center 40%"  // Show more of the top, less cropping
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Star className="w-8 h-8 text-game-primary animate-pulse" />
                    <h1 className="text-game-xl text-white drop-shadow-lg font-bold">Sitaare Zameen Par</h1>
                    <Star className="w-8 h-8 text-game-primary animate-pulse" />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-2xl">👨‍🏫</div>
                    <p className="text-game-lg text-white drop-shadow-lg font-semibold">हर बच्चा अनोखा है</p>
                    <div className="text-2xl">⭐</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto p-4">
              {/* Subtitle */}
              <div className="text-center mb-8">
                <p className="text-game-md text-muted-foreground mb-4">
                  Therapeutic games inspired by every child's unique potential
                </p>
                
                {/* Score Display */}
                <div className="flex gap-4 justify-center">
                  <Card className="bg-gradient-aamir text-white shadow-card">
                    <CardContent className="flex items-center gap-2 p-4">
                      <Sparkles className="w-6 h-6" />
                      <span className="text-game-md font-bold">कुल स्कोर: {score}</span>
                    </CardContent>
                  </Card>
                  {isAdvancedMode && (
                    <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-card animate-pulse">
                      <CardContent className="flex items-center gap-2 p-4">
                        <Star className="w-6 h-6" />
                        <span className="text-game-md font-bold">Advanced Mode!</span>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* Game Selection Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {games.map((game) => {
                  const IconComponent = game.icon;
                  return (
                    <Button
                      key={game.id}
                      variant="gameCard"
                      onClick={() => handleGameStart(game.id)}
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

  return (
    <>
      {renderGame()}
      <Congratulations 
        isVisible={showCongratulations}
        onClose={() => setShowCongratulations(false)}
        score={score}
      />
    </>
  );
};

export default Index;