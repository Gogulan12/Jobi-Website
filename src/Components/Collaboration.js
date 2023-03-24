import React from "react";

import "./Collaboration.css";

export default function Collaboration() {
  return (
    <div>
      <div className="collab-poster">
        <div className="collab-img-left">
          <h2>
            Collaboration <br /> with leading <br /> Brands.
          </h2>
          <p>
            We collaborate with a number of top tier companies <br /> on
            imagining the future of work, have a look.
          </p>
          <button>Learn More</button>
        </div>
        <div className="collab-img-right">
          <svg
            width="69"
            height="70"
            viewBox="0 0 69 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="34.4778" cy="34.8822" r="34.3114" fill="white" />
          </svg>
          <svg
            width="110"
            height="110"
            viewBox="0 0 110 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="55" cy="55" r="55" fill="white" />
          </svg>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28.3742" cy="27.5339" r="27.5339" fill="white" />
          </svg>
          <svg
            width="89"
            height="89"
            viewBox="0 0 89 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="44.4778" cy="44.4778" r="44.4778" fill="white" />
          </svg>
          <svg
            width="89"
            height="89"
            viewBox="0 0 89 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="44.4778" cy="44.4778" r="44.4778" fill="white" />
          </svg>
          <svg
            width="158"
            height="158"
            viewBox="0 0 158 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="78.6001" cy="78.6001" r="78.6001" fill="white" />
          </svg>
          <div>
            <h3>100+</h3>
            <p>Leading Brands</p>
          </div>
        </div>
      </div>

      <div className="trendingSkillsList">
        <div className="trendingskills">
          <h3 className="trend-main">Trending Skills</h3>
          <ul className="bottom-trending-list">
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
          <ul className="bottom-trending-list">
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
          <ul className="bottom-trending-list">
            <li>Technical Support</li>
            <li>Accountants</li>
            <li>Web Designers in US</li>
            <li>Customer identity</li>
            <li>Data entry</li>
          </ul>
        </div>
        <div className="projectcatalog">
          <h3>Project Catalog</h3>
          <ul className="bottom-trending-list">
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
