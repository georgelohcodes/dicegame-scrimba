import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [gameEnd, setGameEnd] = useState(false);
  const [winner, setWinner] = useState(0);

  const [playerOneTurn, setPlayerOneTurn] = useState(true);

  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const [playerOneDice, setPlayerOneDice] = useState("-");
  const [playerTwoDice, setPlayerTwoDice] = useState("-");

  useEffect(() => {
    checkScore();
  }, [playerOneScore, playerTwoScore]);

  function rollDice() {
    const num = Math.floor(Math.random() * 6) + 1;
    if (playerOneTurn) {
      setPlayerOneDice(num);
      setPlayerOneScore((prev) => prev + num);
    } else {
      setPlayerTwoDice(num);
      setPlayerTwoScore((prev) => prev + num);
    }

    setPlayerOneTurn((prev) => !prev);
  }

  function checkScore() {
    if (playerOneScore >= 20 || playerTwoScore >= 20) {
      setGameEnd(true);
    }
    if (playerOneScore >= 20) {
      setWinner(1);
    } else if (playerTwoScore >= 20) {
      setWinner(2);
    }
  }

  function resetGame() {
    setPlayerOneDice("-");
    setPlayerTwoDice("-");
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setPlayerOneTurn(true);
    setGameEnd(false);
  }

  return (
    <div className="App">
      <div className="container">
        {!gameEnd && <h1>Player {playerOneTurn ? "1" : "2"} Turn</h1>}
        {gameEnd && <h1>Player {winner} wins!</h1>}

        <div id="scores">
          <div className="score-and-dice">
            Score: {playerOneScore}
            <div className="dice">{playerOneDice}</div>
          </div>
          <div className="score-and-dice">
            Score: {playerTwoScore}
            <div className="dice">{playerTwoDice}</div>
          </div>
        </div>

        {!gameEnd && <button onClick={rollDice}>Roll Dice</button>}
        {gameEnd && <button onClick={resetGame}>Reset Game</button>}
      </div>
    </div>
  );
}

export default App;
