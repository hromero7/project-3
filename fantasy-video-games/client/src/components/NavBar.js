import React, { useState, useEffect } from 'react';
import logo from '../pages/assets/fvg2.png';
import LoginModal from 'react-awesome-modal';
import SignupModal from 'react-awesome-modal';
import Login from './Login';
import Signup from './Signup';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  console.log(props);

  // setting state for both login and sign up modals
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  // login modal functions

  const handleLogin = (e) => {
    e.preventDefault();
    openModal();
  };
  const openModal = () => {
    setLoginVisible(true);
  };
  const closeModal = () => {
    setLoginVisible(false);
  };

  // sign up modal functions

  const handleSignup = (e) => {
    e.preventDefault();
    openSignup();
  };
  const openSignup = () => {
    setSignupVisible(true);
  };
  const closeSignup = () => {
    setSignupVisible(false);
  };

  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <a className='navbar-brand' href='#'>
          <img src={logo} width='50px' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <Link to='/'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home <span className='sr-only'>(current)</span>
                </a>
              </li>
            </Link>
            <Link to='/league'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  League
                </a>
              </li>
            </Link>
            
            <li class='nav-item dropdown'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Streams
              </a>
              <div
                class='dropdown-menu bg-dark'
                aria-labelledby='navbarDropdown'
              >
                <a class='dropdown-item text-success' href='/codstream'>
                  Call Of Duty
                </a>
                <a class='dropdown-item text-success' href='/fortnitestream'>
                  Fortnite
                </a>
                <a class='dropdown-item text-success' href='/nbastream'>
                  NBA 2k
                </a>
              </div>
              </li>
              <Link to='/shop'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Shop
                  </a>
                </li>
              </Link>
              <Link to='/cart'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <ion-icon name='basket'></ion-icon>Cart
                  </a>
                </li>
              </Link>
              <Link to='/profile'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Profile
                  </a>
                </li>
              </Link>
              <form className='form-inline my-2 my-lg-0'>
                <button
                  className='btn btn-outline-success my-2 my-sm-0'
                  type='submit'
                  onClick={handleLogin}
                >
                  Login
                </button>

                <button
                  className='btn btn-outline-success my-2 my-sm-0'
                  type='submit'
                  onClick={handleSignup}
                >
                  Sign Up
                </button>
              </form>
          </ul>
        </div>
      </nav>
      <LoginModal
        visible={loginVisible}
        width='400'
        height='400'
        effect='fadeInUp'
        onClickAway={() => closeModal()}
      >
        <div className='card' style={{ width: '400px', height: '400px' }}>
          <div className='card-body'>
            <h5 className='card-title'>Login</h5>
            <div className='card-text'>
              <Login />
            </div>
          </div>
        </div>
      </LoginModal>
      <SignupModal
        visible={signupVisible}
        width='500'
        height='500'
        effect='fadeInUp'
        onClickAway={() => closeSignup()}
      >
        <div className='card' style={{ width: '500px', height: '500px' }}>
          <div className='card-body'>
            <h5 className='card-title'>Sign Up</h5>
            <div className='card-text'>
              <Signup />
            </div>
          </div>
        </div>
      </SignupModal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(NavBar);
