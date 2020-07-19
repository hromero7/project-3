import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import StoreContainer from './components/StoreContainer';

function App() {
  return (
    <div className='App'>
      <Home />
      <StoreContainer />
    </div>
  );
}

export default App;
