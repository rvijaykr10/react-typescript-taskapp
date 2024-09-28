import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskListDisplay from './components/TaskList';
import TaskEditorForm from './components/TaskForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskListDisplay />} />
        <Route path="/new-task" element={<TaskEditorForm onSuccess={() => {}} />} />
      </Routes>
    </Router>
  );
};

export default App;
