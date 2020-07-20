import React, { useState } from 'react';
import  { Link } from "react-router-dom";
import "./SignIn.css"

const SingIn = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    function handleName(event) {
        event.preventDefault();
        setName(event.target.value)
    }

    function handleRoom(event) {
        event.preventDefault();
        setRoom(event.target.value)
    }

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Sign in</h1>
                <div>
                    <input 
                    placeholder="Name" 
                    className="joinInput" 
                    type="text" 
                    onChange={handleName}/>
                </div>
                <div>
                    <input 
                    placeholder="Fantasy Video Games" 
                    className="joinInput mt-20 disabled" 
                    value="Fantasy Video Games" 
                    type="text" 
                    onClick={handleRoom}/>
                </div>
                <Link 
                onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button 
                className="button mt-20" 
                type="submit">Sign In
                </button>
                </Link>
            </div>
        </div>
    )
}

export default SingIn;