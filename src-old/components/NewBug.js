import React, { useRef } from "react";
import * as actions from "./../store/actions/actionCreators";
import { useSelector, useDispatch } from "react-redux";

const NewBug = () => {
  const bugs = useSelector((state) => state.bugReducer.bugs);
  const dispatch = useDispatch();
  const bug = useRef();
  console.log(bugs);
  return (
    <div>
      <input type="text" ref={bug} />
      <button onClick={() => dispatch(actions.addBug(bug.current.value))}>
        click me
      </button>
    </div>
  );
};

export default NewBug;
