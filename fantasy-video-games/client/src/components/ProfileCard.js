import React from "react";
import logo from "../pages/assets/fvg.png";

const ProfileCard = () => {
    return (
<div className="card profile-card" style={{width: "400px"}}>
  <img src={logo} className="card-img-top profile-card-top" style={{width:"350px"}} alt="profile"/>
  <div className="card-body">
    <h1 className="card-text username">@Username</h1>
    <p className="card-text"><span style={{fontWeight:"bold", fontSize:"14px"}}>Bio:</span> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>

</div>
    )
}

export default ProfileCard;