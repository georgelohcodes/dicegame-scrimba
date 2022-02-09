import { useState } from "react";
import "./App.css";

function App() {
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [playerOneDice, setPlayerOneDice] = useState("-");
  const [playerTwoDice, setPlayerTwoDice] = useState("-");

  return (
    <div className="App">
      <div className="container">
        <h1>Player {playerOneTurn ? "1" : "2"} Turn</h1>

        <div id="scores">
          <div className="score-and-dice">
            Score: {playerOneScore}
            <div className="score">{playerOneDice}</div>
          </div>
          <div className="score-and-dice">
            Score: {playerTwoScore}
            <div className="score">{playerTwoDice}</div>
          </div>
        </div>

        <button>Roll Dice</button>
      </div>
    </div>
  );
}

export default App;
