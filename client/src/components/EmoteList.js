import React from "react";
import emote from "../pages/assets/squirtle-emote.webp";
import emote2 from "../pages/assets/pikachu-emote.gif";
import emote3 from "../pages/assets/ditto-emote.gif";

const EmoteList = () => {
    return (
<div className="card emote-container">
  <div className="card-header">
    Emotes
  </div>
  <div className="card-body emote-body">
    <blockquote className="blockquote mb-0">
    <img src={emote} alt="emote" style={{width:"200px"}}/>
    <img src={emote2} alt="emote" style={{width:"200px"}}/>
    <img src={emote3} alt="emote" style={{width:"200px"}}/>
    <img src={emote3} alt="emote" style={{width:"200px"}}/>
    <img src={emote3} alt="emote" style={{width:"200px"}}/>
    </blockquote>
  </div>
</div>
    )
}

export default EmoteList;