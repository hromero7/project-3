import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import League from "./pages/League/League";
import Shop from "./pages/Shop/Shop";
import Chat from "./components/Chat/Chat"; 
import SingIn from './components/SignIn/SignIn';
import Home from "./pages/Home/Home";
import Profile from './pages/UserProfile/Profile';


function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/league" component={League} />
      <Route path="/shop" component={Shop} />
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/signin" component={SingIn}/>
      <Route exact path="/chat" component={Chat}/>
      </Switch>
    </div>
    </Router>
  );

}

export default App;
