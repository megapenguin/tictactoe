import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const MoveDisplay = ({ move }) => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <h5 style={{ color: "grey" }}>
        #{move.moveNumber}: Player{move.player} occupied BOX{move.boxId} with{" "}
        {move.value}
      </h5>
    </div>
  );
};

export default MoveDisplay;
