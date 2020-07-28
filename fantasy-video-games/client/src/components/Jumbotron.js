import React from "react";
import logo from "../pages/assets/fvg2.png";

const Jumbotron = () => {
    return (
      <div className="jumbotron">
      <img className="backgroundImg" src={logo} alt="FVG Logo" width="400px"/>
      <p className="lead1">The Future of Betting.</p>
      <hr className="my-4"></hr>
      <p className="lead1">Experience Professional E-Sports Like Never Before. Place Bets on Professional E-Sports Games and Tournaments.</p>
    </div>
        
    )
}

export default Jumbotron;