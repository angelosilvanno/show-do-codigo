import { useState } from "react";
import Home from "./pages/Home";
import Game from "./pages/Game";
import type{ GameTheme } from "./data/types"; 

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  
  const [selectedTheme, setSelectedTheme] = useState<GameTheme | null>(null);

  const handleStartGame = (theme: GameTheme) => {
    setSelectedTheme(theme); 
    console.log("Tema escolhido:", theme); 
    setGameStarted(true);
  };

  const handleExitGame = () => {
    setGameStarted(false);
    setSelectedTheme(null);
  };

  return (
    <>
      {!gameStarted ? (
        <Home onStartGame={handleStartGame} />
      ) : (
        <Game onExit={handleExitGame} theme={selectedTheme!} />
      )}
    </>
  );
}