import React, { useState } from "react";
import logo from "../pages/assets/fvg2.png";
import LoginModal from "react-awesome-modal";
import SignupModal from "react-awesome-modal";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";

const NavBar = () => {

// setting state for both login and sign up modals
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);
 
// login modal functions

  const handleLogin = (e) => {
    e.preventDefault();
    openModal();
  }
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
  }
  const openSignup = () => {
    setSignupVisible(true);
  };
  const closeSignup = () => {
    setSignupVisible(false);
  };

    return (
<div>
<nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="#"><img src={logo} width="50px"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <Link to="/">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
    </Link>
    <Link to="/betting">
      <li className="nav-item">
        <a className="nav-link" href="#">Betting</a>
      </li>
    </Link>
    <Link to="store">
      <li className="nav-item">
        <a className="nav-link" href="#">Store</a>
      </li>
    </Link>
    <Link to="/profile">
      <li className="nav-item">
        <a className="nav-link" href="#">Profile</a>
      </li>
    </Link>
      <form className="form-inline my-2 my-lg-0">
      
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleLogin}>Login</button>
      
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSignup}>Sign Up</button>
     
      </form>
      
    </ul>
  </div>
</nav>
<LoginModal
        visible={loginVisible}
        width="400"
        height="400"
        effect="fadeInUp"
        onClickAway={() => closeModal()}
      >
        <div className="card" style={{ width: "400px", height: "400px" }}>
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <p className="card-text">
              <Login/>
            </p>
          </div>
        </div>
      </LoginModal>
<SignupModal
        visible={signupVisible}
        width="500"
        height="500"
        effect="fadeInUp"
        onClickAway={() => closeSignup()}
      >
        <div className="card" style={{ width: "500px", height: "500px" }}>
          <div className="card-body">
            <h5 className="card-title">Sign Up</h5>
            <p className="card-text">
              <Signup/>
            </p>
          </div>
        </div>
      </SignupModal>
</div>
    )
}


export default NavBar;