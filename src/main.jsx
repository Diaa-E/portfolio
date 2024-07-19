import React from 'react';
import ReactDOM from 'react-dom/client';
import "./reset.css";
import "./globals.css";
import './main.css';
import Router from './routes/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
