import React from "react";

import "./Collaboration.css";
import slack from "../../Assets/slack-logo.svg";
import messenger from "../../Assets/messanger-logo.svg";
import microsoft from "../../Assets/microsoft-logo.svg";
import twitter from "../../Assets/twitter-logo.svg";
import instagram from "../../Assets/instagram-logo.svg";

export default function Collaboration() {
  return (
    <div>
      <div className="collabPoster">
        <div className="collabImgLeft">
          <h2>
            Collaboration <br /> with leading <br /> Brands.
          </h2>
          <p>
            We collaborate with a number of top tier companies <br /> on
            imagining the future of work, have a look.
          </p>
          <button>Learn More</button>
        </div>
        <div className="collabImgRight">
          <svg
            width="69"
            height="70"
            viewBox="0 0 69 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="circle circle1"
          >
            <circle cx="34.4778" cy="34.8822" r="34.3114" fill="white" />
          </svg>
          <svg
            width="110"
            height="110"
            viewBox="0 0 110 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="circle circle2"
          >
            <circle cx="55" cy="55" r="55" fill="white" />
          </svg>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="circle circle3"
          >
            <circle cx="28.3742" cy="27.5339" r="27.5339" fill="white" />
          </svg>
          <svg
            width="89"
            height="89"
            viewBox="0 0 89 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="circle circle4"
          >
            <circle cx="44.4778" cy="44.4778" r="44.4778" fill="white" />
          </svg>
          <svg
            width="89"
            height="89"
            viewBox="0 0 89 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="circle circle5"
          >
            <circle cx="44.4778" cy="44.4778" r="44.4778" fill="white" />
          </svg>
          <svg
            width="158"
            height="158"
            viewBox="0 0 158 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="circle circle6"
          >
            <circle cx="78.6001" cy="78.6001" r="78.6001" fill="white" />
          </svg>
          <div className="circleText">
            <h3>100+</h3>
            <p>Leading Brands</p>
          </div>
          <div className="collabLogo">
            <div className="twoCirclesCollabLogo">
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="collabLogoCircle1"
              >
                <circle
                  cx="13.95"
                  cy="14.25"
                  r="13.95"
                  fill="#00D462"
                  fillOpacity="0.34"
                />
              </svg>

              <svg
                // className="second-circle"
                className="collabLogoCircle2"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14.45" cy="14.25" r="13.95" fill="#00D462" />
              </svg>
            </div>
            <h3>jobi</h3>
          </div>
          <img src={slack} alt="" className="slack" />
          <img src={messenger} alt="" className="messenger" />
          <img src={instagram} alt="" className="instagram" />
          <img src={twitter} alt="" className="twitter" />
          <img src={microsoft} alt="" className="microsoft" />
        </div>
      </div>

      <div className="trendingSkillsList">
        <div className="trendingskills">
          <h3 className="trendMain">Trending Skills</h3>
          <ul className="bottomTrendingList">
            <li>Blockchain</li>
            <li>Node.js</li>
            <li>HR consulting</li>
            <li>Vue.js</li>
            <li>Microsoft Power BI</li>
            <li>React.js</li>
            <li>Videographers</li>
          </ul>
        </div>
        <div className="topskills">
          <h3>Top Skills</h3>
          <ul className="bottomTrendingList">
            <li>Full Consultation</li>
            <li>Code Review</li>
            <li>Staff Augmentation</li>
            <li>Support</li>
            <li>Video Editors</li>
            <li>Data Entry Specialists</li>
            <li>Data Analyst</li>
          </ul>
        </div>
        <div className="topusa">
          <h3>Top in USA</h3>
          <ul className="bottomTrendingList">
            <li>Technical Support</li>
            <li>Accountants</li>
            <li>Web Designers in US</li>
            <li>Customer identity</li>
            <li>Data entry</li>
          </ul>
        </div>
        <div className="projectcatalog">
          <h3>Project Catalog</h3>
          <ul className="bottomTrendingList">
            <li>Mircosites</li>
            <li>Marketing Automation</li>
            <li>SEO & SMM</li>
            <li>Lead Generation</li>
            <li>Article Writing Services</li>
            <li>SEO Services</li>
            <li>Translation Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
