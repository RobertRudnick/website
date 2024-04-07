import React, { useState } from "react";
import "./TicTacToe.scss";

interface Props {}

const TicTacToe: React.FC<Props> = () => {
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [cells, setCells] = useState<string[]>(Array(9).fill(""));
  const [winner, setWinner] = useState<string | null>(null);
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = (arr: string[]) => {
    const combos: { [key: string]: number[][] } = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };
  
    for (const combo in combos) {
      if (combos.hasOwnProperty(combo)) {
        combos[combo as keyof typeof combos].forEach((pattern) => {
          if (
            arr[pattern[0]] === "" ||
            arr[pattern[1]] === "" ||
            arr[pattern[2]] === ""
          ) {
            return;
          }
  
          if (
            arr[pattern[0]] === arr[pattern[1]] &&
            arr[pattern[1]] === arr[pattern[2]]
          ) {
            setWinner(arr[pattern[0]]);
          }
        });
      }
    }
  };
  const handleClick = (num: number) => {
    if (winner || cells[num] !== "") return;

    const arr = [...cells];
    arr[num] = turn;
    setTurn(turn === "X" ? "O" : "X");
    checkWinner(arr);
    setCells(arr);
    if (!arr.includes("") && !winner) {
      setIsDraw(true);
    }
  };

  const Cell: React.FC<{ num: number }> = ({ num }) => {
    const cellValue = cells[num];
    const cellClassName = cellValue ? `cell cell-${cellValue}` : "cell";

    return (
      <td className={cellClassName} onClick={() => handleClick(num)}>
        {cellValue}
      </td>
    );
  };

  const handleReset = () => {
    setWinner(null);
    setIsDraw(false);
    setCells(Array(9).fill(""));
  };

  return (
    <div className="container">
      <div className={`winner ${winner || isDraw ? "show" : ""}`}>
        {winner ? `Winner is: ${winner}` : isDraw ? "It's a draw" : ""}
      </div>
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
