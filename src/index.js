import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStorage from './UserContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <UserStorage>
      <App />
    </UserStorage>
  </Router>,
  document.getElementById('root')
);
