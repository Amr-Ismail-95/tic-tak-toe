import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
  const [gameBoard, setGameboard] = useState(initialGameBoard);

  const handleSelectGameboard = (rowIndex, colIndex) => {
    setGameboard((previousGameBoard) => {
      const updatedBoard = previousGameBoard.slice();

      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });
    onSelectSquare();
  };
  return (
    <ol id="game-board">
      {gameBoard.map((item, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {item.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleSelectGameboard(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
