import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    <Route exact path="/" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route
            path="/Home"
            element={email ? <Home /> : <Navigate to="/" />}
          />

      <Route path="/acl" component={ACL_Comp} />
      <Route path="/flow" component={FlowControlApp} />
      <Route path="/minig" component={MiniG} />
    </Router>
  </React.StrictMode>
);
