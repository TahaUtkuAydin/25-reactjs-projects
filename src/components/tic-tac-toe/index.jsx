import { useEffect, useState } from "react";

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-solid h-[100px] w-[100px] float-left text-[40px] border-red-600"
    >
      {value}
    </button>
  );
}

export default function Tictactoe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(getCurrentIndex) {
    let cpySquares = [...squares];
    if (cpySquares[getCurrentIndex]) return;
    cpySquares[getCurrentIndex] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function getWinner() {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  }

  useEffect(() => {
    if (squares.every((item) => item !== "") && !getWinner()) {
      setStatus("it is a draw restart");
    } else if (getWinner()) {
      setStatus(`Winner is ${getWinner()}. Please restart the game`);
    }
  }, [isXTurn]);

  return (
    <div className="flex flex-col items-center mt-[100px]">
      <div>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <div />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={()=> {setSquares(Array(9).fill("")); setStatus("")} }>Restart</button>
    </div>
  );
}
