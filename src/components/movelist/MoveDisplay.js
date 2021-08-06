import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const MoveDisplay = ({ move }) => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <h5 style={{ color: "grey" }}>
        Move{move.moveNumber} by P{move.player} put {move.value} at BOX#
        {move.boxId}
      </h5>
    </div>
  );
};

export default MoveDisplay;
