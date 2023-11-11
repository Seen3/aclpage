import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import ACL_Comp from './ACL_Comp';
import FlowControlApp from './Flowapp';
import MiniG from './mininet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Route path="/acl" component={ACL_Comp} />
      <Route path="/flow" component={FlowControlApp} />
      <Route path="/minig" component={MiniG} />
    </Router>
  </React.StrictMode>
);
