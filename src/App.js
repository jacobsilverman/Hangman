import { useEffect, useState } from 'react';

import './App.css';

import Man from './Components/Man';
import Word from './Components/Word';
import Letters from './Components/Letters';

import { getRandomWord } from './Services/RandomWord';

function App() {
  const [guesses, setGuesses] = useState([]);
  const [wordToGuess, setWordToGuess] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [incorrect, setIncorrect] = useState(1);

  useEffect(() => {
    getRandomWord().then((data) => setWordToGuess(data[0].toUpperCase()));
  }, []);

  const reset = () => {
    setIncorrect(1);
    setGameOver(false);
    setGuesses([]);
    getRandomWord().then((data) => setWordToGuess(data[0].toUpperCase()));
  }

  const gameWon = (currentGuesses) => {
    return wordToGuess.split('').every((letter) => currentGuesses.includes(letter))
  }

  const checkGameState = (letter) => {
    if (!wordToGuess.includes(letter)) {
      setIncorrect(incorrect+1);
    }

    if (incorrect >= 10 || gameWon([...guesses, letter])) {
      setGameOver(true);
      return;
    } 

    setGameOver(false);
  }

  const handleGuess = (letter) => {
    setGuesses([...guesses, letter]);
    checkGameState(letter);
  }

  return (
    <div className="App">
      <header className="App-header"> 
        HANGMAN
      </header>
      <Man incorrect={incorrect} />
      {wordToGuess && <Word gameOver={gameOver} guesses={guesses} wordToGuess={wordToGuess} />}
      {!gameOver && <Letters guesses={guesses} handleGuess={handleGuess}/>}
      <div>{(gameOver && gameWon(guesses)) ? "You Win" : "You Lose"}</div>
      {gameOver && <button onClick={reset}>reset</button>}
    </div>
  );
}

export default App;
