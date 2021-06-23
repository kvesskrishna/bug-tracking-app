import React from "react";
import { useSelector } from "react-redux";
import "./Dashboard.css";
import DashboardItem from "./DashboardItem";

const Dashboard = (props) => {
  const bugs = useSelector((state) => state.bugsReducer);
  const total = bugs.length;
  const resolved = bugs.filter((bug) => bug.resolved == true);
  const date = new Date();
  const today = bugs.filter(
    (bug) =>
      bug.created.getDate() == date.getDate() &&
      bug.created.getFullYear() == date.getFullYear()
  ).length;
  const items = [
    { title: "Today", count: today },
    { title: "Resolved", count: resolved.length },
    { title: "Open", count: total - resolved.length },
    { title: "Total", count: total },
  ];
  return (
    <div className="dashboard">
      {items.map((item, index) => (
        <DashboardItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Dashboard;
