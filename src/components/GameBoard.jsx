const GameBoard = ({ onSelectSquare, board }) => {
  //   const [gameBoard, setGameboard] = useState(initialGameBoard);

  //   const handleSelectGameboard = (rowIndex, colIndex) => {
  //     setGameboard((previousGameBoard) => {
  //       const updatedBoard = previousGameBoard.slice();

  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });
  //     onSelectSquare();
  //   };
  return (
    <ol id="game-board">
      {board.map((item, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {item.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
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
