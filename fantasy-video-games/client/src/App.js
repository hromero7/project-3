import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import League from "./pages/League/League";
import Shop from "./pages/Shop/Shop";


function App() {
  return (
    <Router>
    <div className="App">
    <NavBar/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/league" component={League} />
      <Route path="/shop" component={Shop} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
