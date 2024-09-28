import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskListDisplay from "./components/TaskList";
import TaskEditorForm from "./components/TaskForm";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-list" element={<TaskListDisplay />} />
        <Route
          path="/task-add"
          element={<TaskEditorForm onSuccess={() => {}} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
