import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star, Play, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ColorPatternGameProps {
  onBack: () => void;
  onScore: (points: number) => void;
}

const colors = [
  { name: "Red", class: "bg-red-500", value: "red" },
  { name: "Blue", class: "bg-blue-500", value: "blue" },
  { name: "Green", class: "bg-green-500", value: "green" },
  { name: "Yellow", class: "bg-yellow-500", value: "yellow" },
];

export const ColorPatternGame = ({ onBack, onScore }: ColorPatternGameProps) => {
  const { toast } = useToast();
  const [sequence, setSequence] = useState<string[]>([]);
  const [userSequence, setUserSequence] = useState<string[]>([]);
  const [isShowingPattern, setIsShowingPattern] = useState(false);
  const [level, setLevel] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const generateSequence = (length: number) => {
    const newSequence = [];
    for (let i = 0; i < length; i++) {
      newSequence.push(colors[Math.floor(Math.random() * colors.length)].value);
    }
    return newSequence;
  };

  const startNewLevel = () => {
    const newSequence = generateSequence(level + 2);
    setSequence(newSequence);
    setUserSequence([]);
    setCurrentStep(0);
    showPattern(newSequence);
  };

  const showPattern = async (pattern: string[]) => {
    setIsShowingPattern(true);
    setCurrentStep(0);
    
    for (let i = 0; i < pattern.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setCurrentStep(i + 1);
      await new Promise(resolve => setTimeout(resolve, 600));
      setCurrentStep(0);
    }
    
    setIsShowingPattern(false);
    toast({
      title: "Your turn! 🎯",
      description: "Repeat the color sequence you just saw",
    });
  };

  const handleColorClick = (color: string) => {
    if (isShowingPattern) return;
    
    const newUserSequence = [...userSequence, color];
    setUserSequence(newUserSequence);

    // Check if current step is correct
    if (newUserSequence[newUserSequence.length - 1] !== sequence[newUserSequence.length - 1]) {
      // Wrong color
      toast({
        title: "Oops! 😊",
        description: "That's not quite right. Let's try again!",
        variant: "destructive",
      });
      setTimeout(() => {
        setUserSequence([]);
        showPattern(sequence);
      }, 1000);
      return;
    }

    // Check if sequence is complete
    if (newUserSequence.length === sequence.length) {
      // Level completed!
      const points = level * 5;
      onScore(points);
      setLevel(prev => prev + 1);
      toast({
        title: "Excellent! 🌟",
        description: `Level ${level} completed! +${points} points`,
      });
      setTimeout(() => {
        startNewLevel();
      }, 2000);
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setLevel(1);
    startNewLevel();
  };

  const resetGame = () => {
    setGameStarted(false);
    setLevel(1);
    setSequence([]);
    setUserSequence([]);
    setIsShowingPattern(false);
    setCurrentStep(0);
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
          <h1 className="text-game-xl text-game-primary">Color Patterns</h1>
          <Button variant="gameSecondary" onClick={resetGame}>
            <RefreshCw className="w-5 h-5" />
            Reset
          </Button>
        </div>

        {!gameStarted ? (
          <div className="text-center space-y-6">
            <Card className="bg-card shadow-card max-w-md mx-auto">
              <CardContent className="p-8">
                <h2 className="text-game-lg font-bold mb-4 text-game-primary">Ready to Play?</h2>
                <p className="text-game-md text-muted-foreground mb-6">
                  Watch the color sequence carefully, then repeat it by clicking the colors in the same order.
                </p>
                <Button variant="game" size="xl" onClick={startGame}>
                  <Play className="w-6 h-6" />
                  Start Game
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="flex justify-center gap-6 mb-8">
              <Card className="bg-card shadow-gentle">
                <CardContent className="flex items-center gap-2 p-4">
                  <Star className="w-5 h-5 text-game-primary" />
                  <span className="text-game-md font-bold">Level: {level}</span>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-gentle">
                <CardContent className="flex items-center gap-2 p-4">
                  <span className="text-game-md font-bold">
                    {isShowingPattern ? "Watch carefully!" : `${userSequence.length}/${sequence.length}`}
                  </span>
                </CardContent>
              </Card>
            </div>

            {/* Color Grid */}
            <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto mb-8">
              {colors.map((color, index) => (
                <Button
                  key={color.value}
                  onClick={() => handleColorClick(color.value)}
                  disabled={isShowingPattern}
                  className={`
                    aspect-square rounded-2xl text-white font-bold text-game-lg
                    transition-all duration-300 transform hover:scale-105
                    ${color.class} ${
                      isShowingPattern && sequence[currentStep - 1] === color.value
                        ? "ring-4 ring-white scale-110 shadow-2xl"
                        : ""
                    }
                    ${!isShowingPattern ? "hover:shadow-card" : ""}
                  `}
                >
                  {color.name}
                </Button>
              ))}
            </div>

            {/* Instructions */}
            <Card className="bg-card/80 backdrop-blur shadow-gentle">
              <CardContent className="p-6 text-center">
                <h3 className="text-game-lg font-bold mb-2 text-game-primary">Instructions</h3>
                <p className="text-game-md text-muted-foreground">
                  {isShowingPattern 
                    ? "Watch the pattern and remember the order!" 
                    : "Click the colors in the same order you saw them"}
                </p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};