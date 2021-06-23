import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BugItem from "./BugItem";
import NewBug from "./NewBug";

const BugList = (props) => {
  const bugs = useSelector((state) => state.bugReducer.bugs);
  return (
    <div>
      <ul>
        {bugs.map((bug) => (
          <BugItem key={bug.id} bug={bug} />
        ))}
      </ul>
      <NewBug />
    </div>
  );
};

export default BugList;
