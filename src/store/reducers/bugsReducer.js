import * as type from "../actions/actionTypes";
const bugs = [
  {
    id: 1,
    title: "Test Bug",
    description: "Test Description",
    created: new Date(),
    modified: new Date(),
    status: "open",
    resolved: false,
    severity: "medium",
    ui_active: false,
  },
];

const bugsReducer = (state = bugs, action) => {
  switch (action.type) {
    case type.LIST_BUGS:
      console.log(state);
      return state;
    case type.ADD_BUG:
      return [...state, action.payload];
    case type.SET_UI_ACTIVE:
      console.log(action);
      return state.map((bug) =>
        action.payload == bug.id
          ? { ...bug, ui_active: !bug.ui_active }
          : { ...bug, ui_active: false }
      );
    case type.SORT_BUGS:
      return state.sort((a, b) => a.created - b.created);

    default:
      return state;
  }
};

export default bugsReducer;
