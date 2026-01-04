import { useState, useEffect, useCallback } from "react";

export interface PlayerSession {
  id: string;
  playerName: string;
  startTime: number;
  endTime?: number;
  totalScore: number;
  gamesPlayed: {
    memory: number;
    color: number;
    math: number;
    word: number;
  };
  engagementTime: number; // in seconds
}

export interface GameStats {
  totalSessions: number;
  totalUsers: number;
  totalEngagementTime: number; // in seconds
  averageSessionTime: number;
  gamePopularity: {
    memory: number;
    color: number;
    math: number;
    word: number;
  };
  highScores: {
    playerName: string;
    score: number;
    date: string;
  }[];
}

export interface Feedback {
  id: string;
  playerName: string;
  rating: number; // 1-5 stars
  comment: string;
  timestamp: number;
  gameType?: string;
}

const STORAGE_KEYS = {
  SESSIONS: "sitaare_sessions",
  FEEDBACK: "sitaare_feedback",
  CURRENT_SESSION: "sitaare_current_session",
};

export const useAnalytics = () => {
  const [sessions, setSessions] = useState<PlayerSession[]>([]);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [currentSession, setCurrentSession] = useState<PlayerSession | null>(null);

  // Load data from localStorage
  useEffect(() => {
    const storedSessions = localStorage.getItem(STORAGE_KEYS.SESSIONS);
    const storedFeedback = localStorage.getItem(STORAGE_KEYS.FEEDBACK);
    const storedCurrentSession = localStorage.getItem(STORAGE_KEYS.CURRENT_SESSION);

    if (storedSessions) {
      setSessions(JSON.parse(storedSessions));
    }
    if (storedFeedback) {
      setFeedback(JSON.parse(storedFeedback));
    }
    if (storedCurrentSession) {
      setCurrentSession(JSON.parse(storedCurrentSession));
    }
  }, []);

  // Save sessions to localStorage
  const saveSessions = useCallback((newSessions: PlayerSession[]) => {
    localStorage.setItem(STORAGE_KEYS.SESSIONS, JSON.stringify(newSessions));
    setSessions(newSessions);
  }, []);

  // Start a new session
  const startSession = useCallback((playerName: string = "Guest Player") => {
    const newSession: PlayerSession = {
      id: `session_${Date.now()}`,
      playerName,
      startTime: Date.now(),
      totalScore: 0,
      gamesPlayed: { memory: 0, color: 0, math: 0, word: 0 },
      engagementTime: 0,
    };
    setCurrentSession(newSession);
    localStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, JSON.stringify(newSession));
    return newSession;
  }, []);

  // Update current session
  const updateSession = useCallback((updates: Partial<PlayerSession>) => {
    if (!currentSession) return;
    
    const updatedSession = { ...currentSession, ...updates };
    setCurrentSession(updatedSession);
    localStorage.setItem(STORAGE_KEYS.CURRENT_SESSION, JSON.stringify(updatedSession));
  }, [currentSession]);

  // Record game played
  const recordGamePlayed = useCallback((gameType: "memory" | "color" | "math" | "word") => {
    if (!currentSession) return;
    
    const updatedGamesPlayed = {
      ...currentSession.gamesPlayed,
      [gameType]: currentSession.gamesPlayed[gameType] + 1,
    };
    updateSession({ gamesPlayed: updatedGamesPlayed });
  }, [currentSession, updateSession]);

  // Update score
  const updateScore = useCallback((score: number) => {
    if (!currentSession) return;
    updateSession({ totalScore: score });
  }, [currentSession, updateSession]);

  // End session
  const endSession = useCallback(() => {
    if (!currentSession) return;
    
    const endedSession: PlayerSession = {
      ...currentSession,
      endTime: Date.now(),
      engagementTime: Math.floor((Date.now() - currentSession.startTime) / 1000),
    };
    
    const updatedSessions = [...sessions, endedSession];
    saveSessions(updatedSessions);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
    setCurrentSession(null);
    
    return endedSession;
  }, [currentSession, sessions, saveSessions]);

  // Submit feedback
  const submitFeedback = useCallback((
    rating: number,
    comment: string,
    playerName: string = "Anonymous",
    gameType?: string
  ) => {
    const newFeedback: Feedback = {
      id: `feedback_${Date.now()}`,
      playerName,
      rating,
      comment,
      timestamp: Date.now(),
      gameType,
    };
    
    const updatedFeedback = [...feedback, newFeedback];
    localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify(updatedFeedback));
    setFeedback(updatedFeedback);
    
    return newFeedback;
  }, [feedback]);

  // Get aggregated stats (includes current session if active)
  const getStats = useCallback((): GameStats => {
    // Include current session in calculations if it exists
    const allSessions = currentSession 
      ? [...sessions, { 
          ...currentSession, 
          engagementTime: Math.floor((Date.now() - currentSession.startTime) / 1000) 
        }]
      : sessions;
    
    const uniquePlayers = new Set(allSessions.map(s => s.playerName));
    const totalEngagement = allSessions.reduce((acc, s) => acc + s.engagementTime, 0);
    
    const gamePopularity = allSessions.reduce(
      (acc, s) => ({
        memory: acc.memory + s.gamesPlayed.memory,
        color: acc.color + s.gamesPlayed.color,
        math: acc.math + s.gamesPlayed.math,
        word: acc.word + s.gamesPlayed.word,
      }),
      { memory: 0, color: 0, math: 0, word: 0 }
    );
    
    const highScores = allSessions
      .map(s => ({
        playerName: s.playerName,
        score: s.totalScore,
        date: new Date(s.startTime).toLocaleDateString(),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    return {
      totalSessions: allSessions.length,
      totalUsers: uniquePlayers.size,
      totalEngagementTime: totalEngagement,
      averageSessionTime: allSessions.length > 0 ? totalEngagement / allSessions.length : 0,
      gamePopularity,
      highScores,
    };
  }, [sessions, currentSession]);

  // Clear all data (for testing/reset)
  const clearAllData = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.SESSIONS);
    localStorage.removeItem(STORAGE_KEYS.FEEDBACK);
    localStorage.removeItem(STORAGE_KEYS.CURRENT_SESSION);
    setSessions([]);
    setFeedback([]);
    setCurrentSession(null);
  }, []);

  return {
    sessions,
    feedback,
    currentSession,
    startSession,
    updateSession,
    recordGamePlayed,
    updateScore,
    endSession,
    submitFeedback,
    getStats,
    clearAllData,
  };
};
