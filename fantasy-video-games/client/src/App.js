import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import League from './pages/League/League';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Shop/Cart';
import Chat from './components/Chat/Chat';
import SingIn from './components/SignIn/SignIn';
import Home from './pages/Home/Home';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/league' component={League} />
            <Route path='/shop' component={Shop} />
            <Route path='/cart' component={Cart} />
            <Route exact path='/signin' component={SingIn} />
            <Route exact path='/chat' component={Chat} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
