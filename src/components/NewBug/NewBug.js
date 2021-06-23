import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import * as actions from "../../store/actions/actions";
import { Button } from "react-bootstrap";
import "./NewBug.css";
const NewBug = () => {
  const bug = useRef("");
  const desc = useRef("");

  const [severity, setSeverity] = useState("");
  const [error, setError] = useState(false);
  const severities = ["low", "medium", "high"];

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //validate
    if (!bug.current.value || !desc.current.value || !severity) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    const bugData = {
      id: uuid(),
      title: bug.current.value,
      description: desc.current.value,
      severity: severity,
      created: new Date(),
      modified: null,
      resolved: false,
      user: "krishna",
    };
    console.log(bugData);
    dispatch(actions.addBug(bugData));
    document.getElementById("bug-form").reset();
  };
  const handleSeverity = (sev) => setSeverity(sev);
  return (
    <div className="new-bug-form">
      <h3 className="text-center">New Bug</h3>
      <form onSubmit={(e) => handleSubmit(e)} id="bug-form">
        {error ? (
          <div className="alert alert-danger">All fields are mandatory!</div>
        ) : (
          ""
        )}
        <label htmlFor="title">Title</label>
        <br />
        <input className="form-control" type="text" id="title" ref={bug} />
        <br />
        <br />
        <label htmlFor="desc">Description</label>
        <br />
        <input className="form-control" type="text" id="title" ref={desc} />
        <br />
        <br />
        {severities.map((sev, index) => (
          <span key={index}>
            <input
              type="radio"
              name="severity"
              value={sev}
              id={sev}
              onClick={() => handleSeverity(sev)}
            />
            <label htmlFor={sev}>{sev.toUpperCase()}</label>
          </span>
        ))}
        <br />
        <br />
        <Button type="submit" variant="primary">
          Add
        </Button>
      </form>
    </div>
  );
};

export default NewBug;
