import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Trophy, Heart, Sparkles } from "lucide-react";

interface CongratulationsProps {
  isVisible: boolean;
  onClose: () => void;
  score: number;
}

export const Congratulations = ({ isVisible, onClose, score }: CongratulationsProps) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowMessage(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowMessage(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const encouragingMessages = [
    "शाबाश! You did wonderfully!",
    "Excellent work! Keep it up!",
    "You're getting better every day!",
    "Amazing! You're a star!",
    "Fantastic job! Very proud!",
  ];

  const randomMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full bg-gradient-aamir text-white shadow-card animate-scale-in">
        <CardContent className="p-8 text-center space-y-6">
          {/* Aamir Khan Character Representation */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full mx-auto mb-4 animate-bounce overflow-hidden border-4 border-game-secondary">
              <img 
                src="/lovable-uploads/942e85f8-018c-4676-814b-2833b4bcc42e.png" 
                alt="Aamir Khan congratulating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 animate-pulse">
              <Sparkles className="w-8 h-8 text-game-secondary" />
            </div>
          </div>

          {/* Congratulations Message */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <Trophy className="w-8 h-8 text-game-secondary" />
              <h2 className="text-game-xl">बहुत खुशी!</h2>
              <Trophy className="w-8 h-8 text-game-secondary" />
            </div>
            
            {showMessage && (
              <div className="animate-fade-in space-y-2">
                <p className="text-game-lg font-semibold">{randomMessage}</p>
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-6 h-6 text-game-secondary" />
                  <span className="text-game-md">Score: {score} points</span>
                  <Star className="w-6 h-6 text-game-secondary" />
                </div>
              </div>
            )}
          </div>

          {/* Inspirational Quote */}
          <div className="bg-white/20 rounded-lg p-4 backdrop-blur">
            <p className="text-sm italic">
              "Every child is special, every achievement matters!"
            </p>
            <p className="text-xs mt-1 text-game-calm">- Aamir Khan</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={onClose}
              variant="secondary"
              className="flex-1 bg-game-secondary text-foreground hover:bg-game-secondary/90"
            >
              <Heart className="w-4 h-4 mr-2" />
              Continue Playing
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};