import React, { useState } from "react";
import "./BugItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateUIActive } from "../../store/actions/actions";
import * as actions from "../../store/actions/actions";
const BugItem = (props) => {
  const [details, setDetails] = useState(false);
  const dispatch = useDispatch();
  console.log(props.bug);
  return (
    <div>
      <div className="bug-well">
        <div
          onClick={() => dispatch(actions.updateUIActive(props.bug.id))}
          className="bug-container"
        >
          <div className="bug-cell">{props.bug.title}</div>
          <div className="bug-cell">{props.bug.description || "N/A"}</div>
          <div className="bug-cell">{props.bug.severity}</div>
          <div className="bug-cell">{props.bug.user || "anonymous"}</div>
          <div className="bug-cell">
            {props.bug.created.toISOString().split("T")[0]} <br />
            {props.bug.created.toISOString().split("T")[1]}
          </div>
          {/* <div className="bug-actions">
        <div title="view">
          <FontAwesomeIcon icon={faCoffee} />
        </div>
        <div title="edit">
          <FontAwesomeIcon icon={faEdit} />{" "}
        </div>
        <div title="delete">
          <FontAwesomeIcon icon={faTimes} />{" "}
        </div>
      </div> */}
          <div className=" row break"></div>
          {props.bug.ui_active ? (
            <div className="col-12  bug-details">
              <table className="table  table-bordered table-dark">
                <tbody>
                  <tr>
                    <td>Title</td>
                    <td>{props.bug.title}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default BugItem;
