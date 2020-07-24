import React from "react";
import NavBar from "../../components/NavBar";
import ProfileCard from "../../components/ProfileCard";
import "./style.css";

const Profile = () => {
    return (
        <div>
            <NavBar />
        <div className="profile-container">
            <ProfileCard/>
        </div>
            
        </div>
    )
}

export default Profile;