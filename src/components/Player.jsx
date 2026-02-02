import { useState } from "react";

const Player = ({ initialName, playerSymbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditPlayer = () => {
    setIsEditing((editing) => !editing);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };

  let btnCaption = isEditing ? "Save" : "Edit";
  let spanCondition = isEditing ? (
    <input type="text" required value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );
  return (
    <li>
      <span className="player">
        {spanCondition}

        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditPlayer}>{btnCaption}</button>
    </li>
  );
};

export default Player;
