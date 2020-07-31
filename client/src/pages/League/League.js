import React from "react";
import "./league.css";
import { Link } from 'react-router-dom';


const League = () => {
  return (
    <div className="grid">
    <Link to='/league/cod' style={{color:"black"}}>
      <div className="card mb-3 cod">
        <img
          src=" https://www.allkeyshop.com/blog/wp-content/uploads/Call-of-Duty-Warzone-Banner.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Enter the Warzone</h5>
        </div>
      </div>
      </Link>
      
      <Link to='/league/fortnite' style={{color:"black"}}>
      <div className="card mb-3 fortnite">
        <img
          src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200531181334/fortnite-season-9-key-art-01-ps4-us-09may19-1536x864.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Where are we landing</h5>
        </div>
      </div>
      </Link>

      <Link to='/league/nba' style={{color:"black"}}>
      <div className="card mb-3 nba">
        <img
          src="https://steamcdn-a.akamaihd.net/steam/apps/1089350/header.jpg?t=1573674198"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Get in the game</h5>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default League;
