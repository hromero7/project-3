import React from "react";
import {useState, useEffect } from "react"
import ProfileCard from "../../components/ProfileCard";
import "./style.css";
import BadgeList from "../../components/BadgeList";
import EmoteList from "../../components/EmoteList";
// import { response } from "express";



const Profile = () => {

    let [user, setUser ] = useState({})
    let u = JSON.parse( localStorage.getItem("user") )

    useEffect( () => {
        fetch('http://localhost:3003/api/users/user/' + u.email)
            .then(response => response.json())
            .then( (data)  => { 
                console.log(data, "this is my data") 
                setUser(data)
                console.log(data.emotes, "line 21");
                console.log("loaded user is", user)

            });
       
    }, [])

    




    return (
        <div>
            <div className="profile-container">
                <ProfileCard user={user}/>
                <BadgeList/>
                <div></div>
                <EmoteList user={user}/>
            </div>
        </div>
    )
}

export default Profile;