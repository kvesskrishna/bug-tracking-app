import React from "react";
import { useSelector } from "react-redux";

import "./RecentBugs.css";
const RecentBugs = (props) => {
  const recent = useSelector((state) => state.bugsReducer);
  return (
    <div className="recent-bugs">
      <h2>Recent Bugs</h2>
      <div>
        {recent
          .sort((a, b) => b.created - a.created)
          .map((bug) => (
            <li>
              {bug.title} | {bug.created.getDate()}/{bug.created.getMonth() + 1}
              /{bug.created.getFullYear()} {bug.created.getHours()}:
              {bug.created.getMinutes()}
            </li>
          ))}
      </div>
    </div>
  );
};

export default RecentBugs;
