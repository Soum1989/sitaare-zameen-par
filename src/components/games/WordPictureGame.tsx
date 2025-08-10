import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star, RefreshCw, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WordPictureGameProps {
  onBack: () => void;
  onScore: (points: number) => void;
}

interface WordPicture {
  word: string;
  emoji: string;
  description: string;
}

const wordPictures: WordPicture[] = [
  { word: "SUN", emoji: "☀️", description: "Bright and warm in the sky" },
  { word: "CAT", emoji: "🐱", description: "Furry pet that says meow" },
  { word: "TREE", emoji: "🌳", description: "Tall plant with leaves" },
  { word: "HOUSE", emoji: "🏠", description: "Where people live" },
  { word: "CAR", emoji: "🚗", description: "Vehicle with four wheels" },
  { word: "APPLE", emoji: "🍎", description: "Red fruit that's healthy" },
  { word: "FLOWER", emoji: "🌸", description: "Pretty and smells nice" },
  { word: "STAR", emoji: "⭐", description: "Shines in the night sky" },
  { word: "HEART", emoji: "❤️", description: "Symbol of love" },
  { word: "BOOK", emoji: "📚", description: "Has pages to read" },
];

export const WordPictureGame = ({ onBack, onScore }: WordPictureGameProps) => {
  const { toast } = useToast();
  const [currentItem, setCurrentItem] = useState<WordPicture | null>(null);
  const [wordOptions, setWordOptions] = useState<string[]>([]);
  const [gameMode, setGameMode] = useState<"picture-to-word" | "word-to-picture">("picture-to-word");
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateQuestion = () => {
    const randomItem = wordPictures[Math.floor(Math.random() * wordPictures.length)];
    setCurrentItem(randomItem);
    
    // Generate wrong options
    const wrongOptions = [];
    while (wrongOptions.length < 3) {
      const randomWrong = wordPictures[Math.floor(Math.random() * wordPictures.length)];
      if (randomWrong.word !== randomItem.word && !wrongOptions.some(opt => opt === randomWrong.word)) {
        wrongOptions.push(randomWrong.word);
      }
    }
    
    const allOptions = [randomItem.word, ...wrongOptions].sort(() => Math.random() - 0.5);
    setWordOptions(allOptions);
    
    // Randomly choose game mode
    setGameMode(Math.random() > 0.5 ? "picture-to-word" : "word-to-picture");
  };

  const startNewQuestion = () => {
    generateQuestion();
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    startNewQuestion();
  }, []);

  const handleAnswerClick = (selectedValue: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(selectedValue);
    const correct = selectedValue === currentItem?.word;
    setIsCorrect(correct);
    
    if (correct) {
      const points = 8;
      onScore(points);
      setScore(prev => prev + points);
      toast({
        title: "Perfect! 🌟",
        description: `Great match! +${points} points`,
      });
    } else {
      toast({
        title: "Try again! 😊",
        description: `The answer was "${currentItem?.word}". Keep learning!`,
      });
    }
    
    setQuestionCount(prev => prev + 1);
    
    setTimeout(() => {
      startNewQuestion();
    }, 2500);
  };

  const resetGame = () => {
    setScore(0);
    setQuestionCount(0);
    startNewQuestion();
  };

  if (!currentItem) return null;

  return (
    <div className="min-h-screen bg-gradient-calm p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="gameSecondary" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
            Back to Menu
          </Button>
          <h1 className="text-game-xl text-game-primary">Word Pictures</h1>
          <Button variant="gameSecondary" onClick={resetGame}>
            <RefreshCw className="w-5 h-5" />
            New Game
          </Button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-6 mb-8">
          <Card className="bg-card shadow-gentle">
            <CardContent className="flex items-center gap-2 p-4">
              <Star className="w-5 h-5 text-game-success" />
              <span className="text-game-md font-bold">Score: {score}</span>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-gentle">
            <CardContent className="flex items-center gap-2 p-4">
              <Star className="w-5 h-5 text-game-primary" />
              <span className="text-game-md font-bold">Question: {questionCount + 1}</span>
            </CardContent>
          </Card>
        </div>

        {/* Question Display */}
        <Card className="bg-gradient-primary text-white shadow-card mb-8 max-w-lg mx-auto">
          <CardContent className="p-8 text-center">
            {gameMode === "picture-to-word" ? (
              <>
                <div className="text-8xl mb-4">{currentItem.emoji}</div>
                <h2 className="text-game-lg font-bold mb-2">What word matches this picture?</h2>
                <p className="text-lg opacity-90">{currentItem.description}</p>
              </>
            ) : (
              <>
                <h2 className="text-4xl font-bold mb-4">{currentItem.word}</h2>
                <p className="text-game-lg mb-4">Find the matching picture!</p>
                <p className="text-lg opacity-90">{currentItem.description}</p>
              </>
            )}
          </CardContent>
        </Card>

        {/* Answer Options */}
        {gameMode === "picture-to-word" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
            {wordOptions.map((word, index) => (
              <Button
                key={index}
                onClick={() => handleAnswerClick(word)}
                disabled={selectedAnswer !== null}
                className={`
                  p-6 text-xl font-bold rounded-2xl transition-all duration-300 min-h-[80px]
                  ${selectedAnswer === null 
                    ? "bg-card hover:bg-game-calm hover:scale-105 text-foreground shadow-gentle hover:shadow-card" 
                    : selectedAnswer === word
                      ? isCorrect
                        ? "bg-gradient-success text-white shadow-card scale-105"
                        : "bg-game-danger text-white shadow-card"
                      : word === currentItem.word && !isCorrect
                        ? "bg-gradient-success text-white shadow-card"
                        : "bg-muted text-muted-foreground opacity-50"
                  }
                `}
              >
                {word}
                {selectedAnswer === word && isCorrect && (
                  <CheckCircle className="w-6 h-6 ml-2" />
                )}
              </Button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto mb-8">
            {[currentItem, ...wordPictures.filter(item => item.word !== currentItem.word).slice(0, 3)]
              .sort(() => Math.random() - 0.5)
              .map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswerClick(item.word)}
                  disabled={selectedAnswer !== null}
                  className={`
                    aspect-square text-6xl rounded-2xl transition-all duration-300
                    ${selectedAnswer === null 
                      ? "bg-card hover:bg-game-calm hover:scale-105 shadow-gentle hover:shadow-card" 
                      : selectedAnswer === item.word
                        ? isCorrect
                          ? "bg-gradient-success shadow-card scale-105"
                          : "bg-game-danger shadow-card"
                        : item.word === currentItem.word && !isCorrect
                          ? "bg-gradient-success shadow-card"
                          : "bg-muted opacity-50"
                    }
                  `}
                >
                  {item.emoji}
                </Button>
              ))}
          </div>
        )}

        {/* Encouragement */}
        <Card className="bg-card/80 backdrop-blur shadow-gentle">
          <CardContent className="p-6 text-center">
            <h3 className="text-game-lg font-bold mb-2 text-game-primary">
              {questionCount < 3 ? "Great Start!" : questionCount < 7 ? "Keep Learning!" : "Word Expert!"}
            </h3>
            <p className="text-game-md text-muted-foreground">
              {selectedAnswer === null 
                ? gameMode === "picture-to-word" 
                  ? "Look at the picture and choose the matching word"
                  : "Find the picture that matches the word"
                : isCorrect 
                  ? "Perfect match! You're doing wonderfully!"
                  : "Good try! Learning new words is fun!"
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};