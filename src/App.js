import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Login } from "./components/login";
import { Register } from './components/Register';


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
        <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
        <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;