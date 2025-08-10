import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star, RefreshCw, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MathGameProps {
  onBack: () => void;
  onScore: (points: number) => void;
}

interface Question {
  question: string;
  answer: number;
  options: number[];
}

export const MathGame = ({ onBack, onScore }: MathGameProps) => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const generateQuestion = (): Question => {
    const operations = ['+', '-'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    
    let num1, num2, answer;
    
    if (operation === '+') {
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 + num2;
    } else {
      // For subtraction, ensure positive result
      num1 = Math.floor(Math.random() * 15) + 5;
      num2 = Math.floor(Math.random() * num1) + 1;
      answer = num1 - num2;
    }

    const question = `${num1} ${operation} ${num2} = ?`;
    
    // Generate wrong options
    const wrongOptions = [];
    while (wrongOptions.length < 3) {
      const wrong = answer + Math.floor(Math.random() * 6) - 3;
      if (wrong !== answer && wrong >= 0 && !wrongOptions.includes(wrong)) {
        wrongOptions.push(wrong);
      }
    }
    
    const options = [answer, ...wrongOptions].sort(() => Math.random() - 0.5);
    
    return { question, answer, options };
  };

  const startNewQuestion = () => {
    setCurrentQuestion(generateQuestion());
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  useEffect(() => {
    startNewQuestion();
  }, []);

  const handleAnswerClick = (selectedValue: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(selectedValue);
    const correct = selectedValue === currentQuestion?.answer;
    setIsCorrect(correct);
    
    if (correct) {
      const points = 5;
      onScore(points);
      toast({
        title: "Correct! 🎉",
        description: `Great job! +${points} points`,
      });
    } else {
      toast({
        title: "Try again! 😊",
        description: `The answer was ${currentQuestion?.answer}. Keep practicing!`,
      });
    }
    
    setQuestionCount(prev => prev + 1);
    
    setTimeout(() => {
      startNewQuestion();
    }, 2000);
  };

  const resetGame = () => {
    setScore(0);
    setQuestionCount(0);
    startNewQuestion();
  };

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-gradient-calm p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button variant="gameSecondary" onClick={onBack}>
            <ArrowLeft className="w-5 h-5" />
            Back to Menu
          </Button>
          <h1 className="text-game-xl text-game-primary">Number Fun</h1>
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

        {/* Question */}
        <Card className="bg-gradient-primary text-white shadow-card mb-8 max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {currentQuestion.question}
            </h2>
            <p className="text-xl opacity-90">Choose your answer below</p>
          </CardContent>
        </Card>

        {/* Answer Options */}
        <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-8">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={selectedAnswer !== null}
              className={`
                aspect-square text-2xl font-bold rounded-2xl transition-all duration-300
                ${selectedAnswer === null 
                  ? "bg-card hover:bg-game-calm hover:scale-105 text-foreground shadow-gentle hover:shadow-card" 
                  : selectedAnswer === option
                    ? isCorrect
                      ? "bg-gradient-success text-white shadow-card scale-105"
                      : "bg-game-danger text-white shadow-card"
                    : option === currentQuestion.answer && !isCorrect
                      ? "bg-gradient-success text-white shadow-card"
                      : "bg-muted text-muted-foreground opacity-50"
                }
              `}
            >
              {option}
              {selectedAnswer === option && isCorrect && (
                <CheckCircle className="w-6 h-6 ml-2" />
              )}
            </Button>
          ))}
        </div>

        {/* Encouragement */}
        <Card className="bg-card/80 backdrop-blur shadow-gentle">
          <CardContent className="p-6 text-center">
            <h3 className="text-game-lg font-bold mb-2 text-game-primary">
              {questionCount < 5 ? "Keep Going!" : questionCount < 10 ? "You're Doing Great!" : "Math Champion!"}
            </h3>
            <p className="text-game-md text-muted-foreground">
              {selectedAnswer === null 
                ? "Take your time and choose the correct answer"
                : isCorrect 
                  ? "Excellent work! Ready for the next one?"
                  : "Don't worry, practice makes perfect!"
              }
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};