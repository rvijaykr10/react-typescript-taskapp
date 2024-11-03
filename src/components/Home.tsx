import React, { useState } from "react";
import "./Home.css";
import { CiBoxList } from "react-icons/ci";
import { MdFormatListBulletedAdd } from "react-icons/md";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const Home: React.FC = () => {
  const [tab, setTab] = useState<string>("tasklist");
  return (
    <div className="home-page">
      <div className="button-container">
        <button
          className={`${tab === "tasklist" ? "is-active" : ""}`}
          type="button"
          onClick={() => setTab("tasklist")}
        >
          <CiBoxList />
          &nbsp;Task List
        </button>
        <button
          className={`${tab === "taskform" ? "is-active" : ""}`}
          type="button"
          onClick={() => setTab("taskform")}
        >
          <MdFormatListBulletedAdd /> &nbsp;Add Task
        </button>
      </div>
      <div>
        {tab === "tasklist" && <TaskList />}
        {tab === "taskform" && <TaskForm />}
      </div>
    </div>
  );
};

export default Home;
