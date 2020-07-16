import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat"; 
import SingIn from './components/SignIn/SignIn';

function App() {
  return (
    <div >
      <Router>
      <Route exact path="/" component={SingIn}/>
      <Route exact path="/chat" component={Chat}/>
      </Router>
    </div>
  );
}

export default App;
