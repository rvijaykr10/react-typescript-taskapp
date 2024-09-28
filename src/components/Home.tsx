import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h2>Home</h2>
      <div className="button-container">
        <button type="button" onClick={() => navigate("/task-list")}>
          Task List
        </button>
        <button type="button" onClick={() => navigate("/task-add")}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default Home;
