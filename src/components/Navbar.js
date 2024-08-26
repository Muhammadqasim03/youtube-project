import React from "react";
import "./Navbar.css";
import img1 from "./images/YouTube-Logo.wine (1).svg";
import img2 from "./images/icons8-search.svg";
import img3 from "./images/microphone-google-svgrepo-com.svg";
import img4 from "./images/profile.jpg";
export default function Navbar() {
  return (
    <div className="nav-bar">
      <img className="yt-img" src={img1} alt="error" />
      <div className="search-box">
        <input type="text " className="input-text" placeholder="search..." />
        <img className="search" src={img2}></img>
        <img className="mic" src={img3}></img>
      </div>
      <img className="profile" src={img4}></img>
    </div>
  );
}
