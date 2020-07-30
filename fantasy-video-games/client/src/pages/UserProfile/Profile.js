import React from "react";
import {useState, useEffect } from "react"
import ProfileCard from "../../components/ProfileCard";
import "./style.css";
import BadgeList from "../../components/BadgeList";
import EmoteList from "../../components/EmoteList";



const Profile = () => {

    let [user, setUser ] = useState({})
    let u = JSON.parse( localStorage.getItem("user") )

    useEffect( () => {
        fetch('http://localhost:3003/api/users/user/' + u.email)
            .then(response => response.json())
            .then( (data)  => { 
                console.log(data) 
                setUser(data)

                console.log("loaded user is", user)
            });
       
    }, [])





    return (
        <div>
            <div className="profile-container">
                <ProfileCard user={user}/>
                <BadgeList/>
                <div></div>
                <EmoteList/>
            </div>
        </div>
    )
}

export default Profile;