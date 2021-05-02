import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AuthContextProvider} from './context/authContext';
import { UserProvider } from './context/userContext';
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
  <Router>
  <AuthContextProvider>
  <RoomProvider>
  <UserProvider>
    <App />
  </UserProvider>
  </RoomProvider>
  </AuthContextProvider>
</Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
