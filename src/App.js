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
import { ShowFood } from './components/FoodPage';
import { ShowGrab } from './components/GrabPage';
import { ShowSport } from './components/SportPage';
import { ShowGroup } from './components/GroupPage';
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
        <Route path="/showfood" element={<ShowFood />} />
        <Route path="/showgrab" element={<ShowGrab />} />
        <Route path="/showsport" element={<ShowSport />} />
        <Route path="/showgroup" element={<ShowGroup />} />
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;