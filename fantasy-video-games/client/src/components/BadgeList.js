import React from "react";
import badge from "../pages/assets/badge1.png";
import badge2 from "../pages/assets/badge2.png";
import badge3 from "../pages/assets/badge3.png";

const BadgeList = () => {
    return (
<div className="card badge-container">
  <div className="card-header">
    Badges
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
    <img src={badge} alt="badge" />
    <img src={badge2} alt="badge" />
    <img src={badge3} alt="badge" />
    <img src={badge3} alt="badge" />
    </blockquote>
  </div>
</div>
    )
}

export default BadgeList;