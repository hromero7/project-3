import React from "react";
// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import League from "./pages/League/League";
import Shop from "./pages/Shop/Shop";
import Cart from './pages/Shop/Cart';
import Chat from "./components/Chat/Chat";
import SingIn from "./components/SignIn/SignIn";
import Home from "./pages/Home/Home";
import CodLeague from "./pages/League/codLeague/CodLeague";
import FortniteLeague from "./pages/League/fortniteLeague/FortniteLeague";
import NbaLeague from "./pages/League/nbaLeague/NbaLeague";
import FortniteStream from "./pages/Streams/Fortnite/FortniteStream";
import CodStream from "./pages/Streams/Cod/CodStream";
import NbaStream from "./pages/Streams/Nba/NbaStream"
import { Provider } from 'react-redux';
import store from './store';
import Profile from './pages/UserProfile/Profile';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/league" component={League} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/signin" component={SingIn} />
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/chat" component={Chat} />
          <Route path='/cart' component={Cart} />
          <Route path="/league/cod" component={CodLeague} />
          <Route path="/league/fortnite" component={FortniteLeague} />
          <Route path="/league/nba" component={NbaLeague} />
          <Route path="/codstream" component={CodStream} />
          <Route path="/fortnitestream" component={FortniteStream} />
          <Route path="/nbastream" component={NbaStream} />
        </Switch>
      </div>

    </Router>
    </Provider>
  );
}

export default App;
