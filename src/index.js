import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App';
let body = document.getElementById("root")
let root = ReactDOM.createRoot(body)
root.render(
  <React.StrictMode>
<BrowserRouter>
<App/>
</BrowserRouter>
  </React.StrictMode>
)