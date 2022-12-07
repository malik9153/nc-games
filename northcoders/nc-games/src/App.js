import {getReviews} from './Api'
import { useEffect, useState } from "react";
import { Main } from './components/Main'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import { NavBar } from './components/NavBar';



function App() {
  

  return (
    <>
    <Router>

    
      <NavBar/>
      <Routes>
        <Route path='/' exact/>
      </Routes>
      
      <Main/>
      </Router>
    </>
  );
}

export default App;
