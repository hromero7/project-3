import React from "react";
import logo from "../pages/assets/fvg.png";

const ProfileCard = () => {
    return (
<div className="card" style={{width: "400px"}}>
  <img src={logo} className="card-img-top" style={{width:"350px"}} alt="profile"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    )
}

export default ProfileCard;