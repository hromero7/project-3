import React, { useState, useEffect } from "react";
// import emote from "../pages/assets/squirtle-emote.webp";
// import emote2 from "../pages/assets/pikachu-emote.gif";
// import emote3 from "../pages/assets/ditto-emote.gif";
import ReaperEmote from '../../src/images/ReaperEmote.png';
import LoveEmote from '../../src/images/LoveEmote.png';
import TearsEmote from '../../src/images/TearsEmote.png';
import RageEmote from '../../src/images/RageEmote.png';
import HypeEmote from '../../src/images/HypeEmote.png';

const EmoteList = (user) => {
  let emotes = user.user.emotes;
 
   
  
  // const [emotes, setEmotes] = useState([]);
  // console.log(JSON.parse(emotes));
  // useEffect(() => {
  //   setEmotes(user.user.emotes)
  //   console.log("line18", emotes)
  // }, []);
  
  // if (emotes === 'ReaperEmote') {
  //   return ReaperEmote
  // }

  
  console.log(user, "Emote List component");
    return (
     
<div className="card emote-container">
  <div className="card-header">
    Emotes
  </div>
  <div className="card-body emote-body">
    <blockquote className="blockquote mb-0">
    {/* <h1>{user.user.emotes}</h1> */}
    {/* <img src={ReaperEmote} alt="emote" style={{width:"200px"}}/> */}
    <img src={ReaperEmote} alt="emote" style={{width:"200px"}}/>
    <img src={LoveEmote} alt="emote" style={{width:"200px"}}/>
    <img src={TearsEmote} alt="emote" style={{width:"200px"}}/>
     <img src={RageEmote} alt="emote" style={{width:"200px"}}/> 
    </blockquote>
  </div>
</div>
    )
}

export default EmoteList;