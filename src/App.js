import React from "react";
import BugList from "./components/BugList";
import NewBug from "./components/NewBug/NewBug";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RecentBugs from "./components/RecentBugs/RecentBugs";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="app-heading col-12 text-center">
          <h2>Bug Tracker</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <Dashboard />
        </div>
      </div>

      <div className="row">
        <div className="col-md-9">
          <BugList />
        </div>
        <div className="col-md-3">
          <div className="row">
            <div className="col-md-12">
              <NewBug />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <RecentBugs />
            </div>
          </div>
        </div>
      </div>
      <div className="row footer">
        <div className="col-12 ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
