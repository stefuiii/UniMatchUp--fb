import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Login } from "./components/login";
import { Home } from "./components/Home"
import { Register } from './components/Register';
import { AddGrabPost } from './components/grabPost';
import { AddFoodPost } from './components/foodPost';
import { AddSportPost } from './components/sportPost';
import { AddTutPost } from './components/tutorialPost';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
        <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login onFormSwitch={toggleForm} />} />
        <Route path="/addpost" element={<AddGrabPost />} />
        <Route path="/addfoodpost" element={<AddFoodPost />} />
        <Route path="/addsportpost" element={<AddSportPost />} />
        <Route path="/addtutpost" element={<AddTutPost />} />
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;