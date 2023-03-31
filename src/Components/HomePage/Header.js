import React from "react";
import "./Header.css";
import adobe from "../../Assets/adobe.svg";
import google from "../../Assets/google.svg";
import payoneer from "../../Assets/payoneer.svg";
import header from "../../Assets/header-image.jpg";

export default function Header() {
  return (
    <div className="Header">
      <div className="leftSide">
        <p>#1 Online Marketplace</p>
        <h1>
          Find the talents <span>for any job.</span>
        </h1>
        <h4>
          Unlock your potential with quality job & earn from world leading
          brands & co.
        </h4>
        <button>Post a job</button>
        <div className="trusted">
          <p>Trusted by:</p>
          <img src={payoneer} alt="payoneer" />
          <img className="google" src={google} alt="google" />
          <img src={adobe} alt="adobe" />
        </div>
      </div>
      <div className="rightSide">
        <img src={header} alt="image" />
      </div>
    </div>
  );
}
