import React from "react";

const BugItem = (props) => {
  console.log(props);
  return <div>{props.bug.description}</div>;
};

export default BugItem;
