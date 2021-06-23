import { ADD_BUG, REMOVE_BUG, UPDATE_STATUS } from "../actions/actionTypes";

export const bugReducer = (state = { bugs: [] }, action) => {
  switch (action.type) {
    case ADD_BUG:
      return { ...state, bugs: [...state.bugs, action.payload] };
    case REMOVE_BUG:
      return {
        ...state,
        bugs: state.bugs.filter((bug) => bug.id === action.payload.id),
      };
    case UPDATE_STATUS:
      return {
        ...state,
        bugs: state.bugs.map((bug) =>
          bug.id == action.payload.id
            ? { ...bug, resolved: action.payload.resolved }
            : bug
        ),
      };
    default:
      return state;
  }
};
