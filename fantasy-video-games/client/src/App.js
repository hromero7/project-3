import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat"; 
import SingIn from './components/SignIn/SignIn';
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signin" component={SingIn}/>
      <Route exact path="/chat" component={Chat}/>
      </Router>
      </div>
  )
}

export default App;
