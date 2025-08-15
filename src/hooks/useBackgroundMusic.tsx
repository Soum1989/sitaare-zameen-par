import { useEffect, useRef } from 'react';

interface UseBackgroundMusicProps {
  isPlaying: boolean;
  volume?: number;
  audioSrc: string;
}

export const useBackgroundMusic = ({ 
  isPlaying, 
  volume = 0.3, 
  audioSrc 
}: UseBackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(audioSrc);
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc, volume]);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    if (isPlaying) {
      // Add event listeners for user interaction to enable audio
      const enableAudio = async () => {
        try {
          await audio.play();
          // Remove listeners once audio is successfully playing
          document.removeEventListener('click', enableAudio);
          document.removeEventListener('touchstart', enableAudio);
          document.removeEventListener('keydown', enableAudio);
        } catch (error) {
          console.log('Audio play failed:', error);
        }
      };

      // Add multiple event listeners to catch first user interaction
      document.addEventListener('click', enableAudio);
      document.addEventListener('touchstart', enableAudio);
      document.addEventListener('keydown', enableAudio);

      return () => {
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('touchstart', enableAudio);
        document.removeEventListener('keydown', enableAudio);
      };
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const play = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log('Audio play failed:', error);
      }
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const setVolume = (newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, newVolume));
    }
  };

  return { play, pause, setVolume };
};