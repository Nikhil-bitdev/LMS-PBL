import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AssignmentProvider } from './context/AssignmentContext.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AssignmentProvider>
      <App />
    </AssignmentProvider>
  </React.StrictMode>
);