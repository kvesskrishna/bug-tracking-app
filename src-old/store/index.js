import * as actions from "./actions/actionCreators";
import store from "./store";
store.subscribe(() => console.log("store updated", store.getState()));

store.dispatch(actions.addBug("bug1"));
store.dispatch(actions.addBug("bug2"));
store.dispatch(actions.addBug("bug3"));
store.dispatch(actions.updateStatus(2, true));
