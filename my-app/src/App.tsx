import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDo from "./Pages/todo";
import Login from './Pages/login';
import Signup from './Pages/signup';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
