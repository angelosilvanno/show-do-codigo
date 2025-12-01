// src/hooks/useGameSound.ts
import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

export function useGameSound() {
  const suspenseRef = useRef<Howl | null>(null);
  const correctRef = useRef<Howl | null>(null);
  const wrongRef = useRef<Howl | null>(null);

  useEffect(() => {
    suspenseRef.current = new Howl({
      src: ['/sounds/suspense.mp3'],
      loop: true,
      volume: 1.0, 
      html5: true
    });

    correctRef.current = new Howl({
      src: ['/sounds/correct.mp3'],
      volume: 0.8
    });

    wrongRef.current = new Howl({
      src: ['/sounds/wrong.mp3'],
      volume: 0.8
    });

    return () => {
      suspenseRef.current?.stop();
      correctRef.current?.unload();
      wrongRef.current?.unload();
    };
  }, []);

  const playSuspense = () => {
    if (!suspenseRef.current?.playing()) {
      suspenseRef.current?.play();
      suspenseRef.current?.fade(0, 1.0, 1000); 
    }
  };

  const stopSuspense = () => {
    suspenseRef.current?.fade(1.0, 0, 500); 
    setTimeout(() => {
      suspenseRef.current?.stop();
    }, 500);
  };

  const playCorrect = () => {
    stopSuspense();
    correctRef.current?.play();
  };

  const playWrong = () => {
    stopSuspense();
    wrongRef.current?.play();
  };

  return { playSuspense, stopSuspense, playCorrect, playWrong };
}