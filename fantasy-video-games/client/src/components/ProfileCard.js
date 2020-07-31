import React from "react";
import logo from "../pages/assets/fvg.png";

import { useState, useEffect} from 'react'

const ProfileCard = (user) => {

    let u = JSON.parse( localStorage.getItem('user'))
    console.log(u)
    if (u === null) {
        alert("You must be logged in to view your profile");
        window.location.replace("/");
       
    } else {

    

    //let user = JSON.parse(localStorage.getItem("user"));
    console.log("profile card is", user);

    return (
<div className="card profile-card" style={{width: "400px"}}>
  <img src={"http://localhost:3003/api/users/user/pic/" + u.id  } className="card-img-top profile-card-top" style={{width:"350px"}} alt="profile"/>
  <div className="card-body">
    <h1 className="card-text username">@{user.user.username}</h1>
    <p className="card-text"><span style={{fontWeight:"bold", fontSize:"14px"}}>Bio:</span> {user.user.description}</p>
  </div>

</div>
    )
    }
}

export default ProfileCard;