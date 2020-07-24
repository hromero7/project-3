import React from "react";
import logo from "../pages/assets/fvg2.png";

const Jumbotron = () => {
    return (
      <div className="jumbotron">
      <img className="backgroundImg" src={logo} alt="FVG Logo" width="400px"/>
      <p className="lead1">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-4"></hr>
      <p className="lead1">It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
    </div>
        
    )
}

export default Jumbotron;