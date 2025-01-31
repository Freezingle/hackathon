import './App.css';
import Login from './components/Login.js';
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './components/firebase.js';
import Home from './components/Home.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      
    </div>
  );
}

export default App;