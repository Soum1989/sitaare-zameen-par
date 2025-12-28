import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useAnalytics, Feedback } from "@/hooks/useAnalytics";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  Users,
  Clock,
  Trophy,
  Star,
  MessageSquare,
  Brain,
  Palette,
  Calculator,
  BookOpen,
  TrendingUp,
  BarChart3,
  Send,
  Trash2,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { sessions, feedback, getStats, submitFeedback, clearAllData } = useAnalytics();
  const stats = getStats();

  const [feedbackName, setFeedbackName] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackComment, setFeedbackComment] = useState("");

  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
    return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
  };

  const handleSubmitFeedback = () => {
    if (!feedbackComment.trim()) {
      toast({
        title: "Please add a comment",
        description: "Share your thoughts about the games!",
        variant: "destructive",
      });
      return;
    }

    submitFeedback(feedbackRating, feedbackComment, feedbackName || "Anonymous");
    toast({
      title: "Thank you! 🎉",
      description: "Your feedback has been submitted successfully.",
    });
    setFeedbackName("");
    setFeedbackRating(5);
    setFeedbackComment("");
  };

  const handleClearData = () => {
    if (window.confirm("Are you sure you want to clear all analytics data? This cannot be undone.")) {
      clearAllData();
      toast({
        title: "Data Cleared",
        description: "All analytics data has been reset.",
      });
    }
  };

  const gameIcons = {
    memory: Brain,
    color: Palette,
    math: Calculator,
    word: BookOpen,
  };

  const gameNames = {
    memory: "Memory Match",
    color: "Color Patterns",
    math: "Number Fun",
    word: "Word Pictures",
  };

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Header */}
      <div className="bg-gradient-aamir text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Games
            </Button>
            <h1 className="text-game-xl font-bold">📊 Progress Dashboard</h1>
            <Button
              variant="ghost"
              onClick={handleClearData}
              className="text-white hover:bg-white/20"
            >
              <Trash2 className="w-5 h-5 mr-2" />
              Reset Data
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Key Metrics */}
        <section>
          <h2 className="text-game-lg font-bold text-game-primary mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Key Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">Total Sessions</p>
                    <p className="text-3xl font-bold">{stats.totalSessions}</p>
                  </div>
                  <BarChart3 className="w-10 h-10 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Unique Players</p>
                    <p className="text-3xl font-bold">{stats.totalUsers}</p>
                  </div>
                  <Users className="w-10 h-10 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm">Total Play Time</p>
                    <p className="text-3xl font-bold">{formatTime(stats.totalEngagementTime)}</p>
                  </div>
                  <Clock className="w-10 h-10 opacity-80" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm">Avg Session</p>
                    <p className="text-3xl font-bold">{formatTime(Math.round(stats.averageSessionTime))}</p>
                  </div>
                  <TrendingUp className="w-10 h-10 opacity-80" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Game Popularity */}
        <section>
          <h2 className="text-game-lg font-bold text-game-primary mb-4 flex items-center gap-2">
            <BarChart3 className="w-6 h-6" />
            Game Popularity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.keys(stats.gamePopularity) as Array<keyof typeof stats.gamePopularity>).map((game) => {
              const Icon = gameIcons[game];
              const totalPlays = Object.values(stats.gamePopularity).reduce((a, b) => a + b, 0);
              const percentage = totalPlays > 0 ? Math.round((stats.gamePopularity[game] / totalPlays) * 100) : 0;
              
              return (
                <Card key={game} className="shadow-gentle hover:shadow-card transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-game-calm">
                        <Icon className="w-6 h-6 text-game-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{gameNames[game]}</p>
                        <p className="text-sm text-muted-foreground">{stats.gamePopularity[game]} plays</p>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{percentage}% of total plays</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Player Progress & High Scores */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* High Scores */}
          <section>
            <Card className="shadow-gentle h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-game-primary">
                  <Trophy className="w-6 h-6" />
                  High Scores Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                {stats.highScores.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Trophy className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>No scores yet. Start playing to see your progress!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {stats.highScores.map((score, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          index === 0
                            ? "bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-300"
                            : index === 1
                            ? "bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-300"
                            : index === 2
                            ? "bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-300"
                            : "bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-game-primary">
                            {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
                          </span>
                          <div>
                            <p className="font-semibold">{score.playerName}</p>
                            <p className="text-xs text-muted-foreground">{score.date}</p>
                          </div>
                        </div>
                        <span className="text-lg font-bold text-game-success">{score.score} pts</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* Recent Sessions */}
          <section>
            <Card className="shadow-gentle h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-game-primary">
                  <Clock className="w-6 h-6" />
                  Recent Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {sessions.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Clock className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>No sessions recorded yet. Play some games!</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-80 overflow-y-auto">
                    {sessions.slice(-10).reverse().map((session) => (
                      <div
                        key={session.id}
                        className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <p className="font-semibold">{session.playerName}</p>
                          <span className="text-sm text-game-success font-bold">{session.totalScore} pts</span>
                        </div>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>⏱ {formatTime(session.engagementTime)}</span>
                          <span>🎮 {Object.values(session.gamesPlayed).reduce((a, b) => a + b, 0)} games</span>
                          <span>{new Date(session.startTime).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Feedback Section */}
        <section>
          <h2 className="text-game-lg font-bold text-game-primary mb-4 flex items-center gap-2">
            <MessageSquare className="w-6 h-6" />
            Feedback & Testimonials
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Submit Feedback */}
            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="text-lg">Share Your Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Your Name (Optional)</label>
                  <Input
                    placeholder="Enter your name"
                    value={feedbackName}
                    onChange={(e) => setFeedbackName(e.target.value)}
                    className="text-lg"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setFeedbackRating(star)}
                        className="text-3xl transition-transform hover:scale-110 focus:outline-none"
                      >
                        {star <= feedbackRating ? "⭐" : "☆"}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block">Your Comment</label>
                  <Textarea
                    placeholder="Tell us about your experience with the games..."
                    value={feedbackComment}
                    onChange={(e) => setFeedbackComment(e.target.value)}
                    className="text-lg min-h-24"
                  />
                </div>
                
                <Button
                  onClick={handleSubmitFeedback}
                  className="w-full bg-gradient-primary hover:opacity-90 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Feedback
                </Button>
              </CardContent>
            </Card>

            {/* Display Feedback */}
            <Card className="shadow-gentle">
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Recent Testimonials</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {feedback.length} total
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {feedback.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <MessageSquare className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>No feedback yet. Be the first to share!</p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    {feedback.slice(-5).reverse().map((fb) => (
                      <div
                        key={fb.id}
                        className="p-4 rounded-lg bg-muted/50 border border-border"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold">{fb.playerName}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(fb.timestamp).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="text-lg">
                            {"⭐".repeat(fb.rating)}
                          </div>
                        </div>
                        <p className="text-sm text-foreground/80">{fb.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
