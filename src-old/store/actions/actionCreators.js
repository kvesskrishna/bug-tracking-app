import { ADD_BUG, DELETE_BUG, UPDATE_STATUS } from "./actionTypes";
let id = 0;
export const addBug = (description) => ({
  type: ADD_BUG,
  payload: { id: ++id, description: description, resolved: false },
});
export const updateStatus = (id, value) => ({
  type: UPDATE_STATUS,
  payload: { id: id, resolved: value },
});
