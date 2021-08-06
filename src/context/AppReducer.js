import { ADD_MOVE, REFRESH_GAME } from "./AppActions";

const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_MOVE:
      return {
        ...state,
        moveHolder: [...state.moveHolder, action.payload],
      };
    case REFRESH_GAME:
      return {
        ...state,
        moveHolder: [],
      };
  }
};

export default appReducer;
