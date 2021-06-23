import * as types from "./actionTypes";

export const listBugs = () => {
  return {
    type: types.LIST_BUGS,
  };
};

export const addBug = (bug) => {
  return {
    type: types.ADD_BUG,
    payload: bug,
  };
};
export const updateUIActive = (id) => {
  return {
    type: types.SET_UI_ACTIVE,
    payload: id,
  };
};
export const sortBugs = (column) => {
  return {
    type: types.SORT_BUGS,
    payload: column,
  };
};
