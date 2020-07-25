import React, { useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat"; 
import SingIn from './components/SignIn/SignIn';
import Home from "./pages/Home/Home";

import { Provider } from 'react-redux';
import store from "./store";
import { loadUser } from "./actions/authActions";

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []) 
    
  

  return (
    <Provider store={store}>
    <div className="App">
      <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signin" component={SingIn}/>
      <Route exact path="/chat" component={Chat}/>
      </Router>
    </div>
    </Provider>
  )
}

export default App;
