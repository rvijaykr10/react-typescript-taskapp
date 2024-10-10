import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { CiBoxList } from "react-icons/ci";
import { MdFormatListBulletedAdd } from "react-icons/md";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h2>Home</h2>
      <div className="button-container">
        <button type="button" onClick={() => navigate("/task-list")}>
          <CiBoxList />
          &nbsp;Task List
        </button>
        <button type="button" onClick={() => navigate("/task-add")}>
          <MdFormatListBulletedAdd /> &nbsp;Add Task
        </button>
      </div>
    </div>
  );
};

export default Home;
