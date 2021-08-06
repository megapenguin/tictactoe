import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import MoveDisplay from "./MoveDisplay";

const MovelList = () => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <h1>Move List </h1>

      {state.moveHolder.length > 0
        ? state.moveHolder.map((move) => (
            <MoveDisplay key={move.id} move={move} movenum={move.index} />
          ))
        : "No moves yet"}
    </div>
  );
};

export default MovelList;
