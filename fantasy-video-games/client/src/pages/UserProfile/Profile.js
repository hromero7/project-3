import React from "react";
import NavBar from "../../components/NavBar";
import ProfileCard from "../../components/ProfileCard";
import "./style.css";
import BadgeList from "../../components/BadgeList";
import EmoteList from "../../components/EmoteList";

const Profile = () => {
    return (
        <div>
        <div className="profile-container">
            <ProfileCard/>
            <BadgeList/>
            <div></div>
            <EmoteList/>
        </div>
            
        </div>
    )
}

export default Profile;