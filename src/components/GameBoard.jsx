const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectSquare, turns }) => {
  let gameBoard = initialGameBoard.slice();

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
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
      {gameBoard.map((item, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {item.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
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
