import React, { useReducer } from "react";
import { ADD_MOVE, REFRESH_GAME } from "./AppActions";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";

const AppState = ({ children }) => {
  let initialState = {
    moveHolder: [],
  };
  const addMove = (move) => {
    dispatch({
      type: ADD_MOVE,
      payload: move,
    });
  };

  const refreshGame = () => {
    dispatch({
      type: REFRESH_GAME,
    });
  };
  let [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider value={{ state, addMove, refreshGame }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
