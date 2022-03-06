import React from "react";
import './App.css'
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/login" element={<Login/>}/>
     </Routes>
   </Router>
  );
}

export default App;
