import React from "react";

const DashboardItem = (props) => {
  return (
    <div>
      <p>{props.item.title}</p>
      <p>{props.item.count}</p>
    </div>
  );
};

export default DashboardItem;
