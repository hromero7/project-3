import React from "react";
import logo from "../pages/assets/fvg.png";

const NavBar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src={logo} width="50px"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <form className="form-inline my-2 my-lg-0">
      
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" href="/signin">Login</button>
      
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>
     
      </form>
      
    </ul>
  </div>
</nav>
    )
}


export default NavBar;