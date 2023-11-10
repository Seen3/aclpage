import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ACL_Comp from './ACL_Comp';
import FlowControlApp from './Flowapp';
import MiniG from './mininet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MiniG/>
  </React.StrictMode>
);
