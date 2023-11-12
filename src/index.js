import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import ACL_Comp from './ACL_Comp';
import FlowControlApp from './Flowapp';
import MiniG from './mininet';


import SignIn from "./Screens/Signin";
import SignUp from "./Screens/Signup";
import Home from "./Screens/Home";

const email = localStorage.getItem("email");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route
          path="/Home"
          element={email ? <Home /> : <Navigate to="/" />}
        />
        <Route path="/acl" element={<ACL_Comp />} />
        <Route path="/flow" element={<FlowControlApp />} />
        <Route path="/minig" element={<MiniG />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
