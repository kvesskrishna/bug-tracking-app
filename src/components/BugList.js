import React from "react";
import { useSelector } from "react-redux";
import BugItem from "./BugItem/BugItem";

const BugList = () => {
  const bugs = useSelector((state) => state.bugsReducer);
  console.log(bugs);
  return (
    <div>
      <div
        style={{ fontWeight: "boldest", color: "black", background: "wheat" }}
        className="bug-container"
      >
        <div>Bug</div>
        <div>Description</div>
        <div>Severity</div>
        <div>User</div>
        <div>Created</div>
      </div>
      {bugs.map((bug, index) => (
        <BugItem key={index} bug={bug}></BugItem>
      ))}
    </div>
  );
};

export default BugList;
