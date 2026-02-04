import { useState } from "react";

const Player = ({ initialName, playerSymbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditPlayer = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(playerSymbol, playerName);
    }
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
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {spanCondition}

        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditPlayer}>{btnCaption}</button>
    </li>
  );
};

export default Player;
