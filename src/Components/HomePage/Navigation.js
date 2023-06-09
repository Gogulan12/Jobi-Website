import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <div className="navigation">
      <div className="navigationContent">
        <section className="topNav">
          <div className="topNavLeft">
            <Link to="/">
              <div className="logo">
                <svg
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                  className="secondCircle"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14.45" cy="14.25" r="13.95" fill="#00D462" />
                </svg>

                <h3>jobi</h3>
              </div>
            </Link>
            <div className="search">
              <input type="text" placeholder="Search here..." />
              <select>
                <option value="talent">Talents</option>
                <option value="option2">Location</option>
                <option value="option3">Position</option>
                <option value="option4">Recent</option>
              </select>
            </div>
          </div>
          <div className={`topNavRight ${isActive ? "navactive" : ""}`}>
            <ul>
              <li>
                <a href="/listing" className="navJob">
                  Find Job
                </a>
              </li>
              <li>Find Talents</li>
              <li>Pages</li>
            </ul>

            <a href="/">Login</a>
            <button>Register</button>
          </div>
        </section>

        <section className={`navUnder ${isActive ? "navactive" : ""}`}>
          <div className="listOfOptions">
            <ul>
              <li>Design & Creative</li>
              <li>It & Development</li>
              <li>Trending</li>
              <li>Web & Mobile Dev</li>
              <li>Writing</li>
              <li>Sales & Marketing</li>
              <li>Music & Audio</li>
              <li>Video Animation</li>
              <li className="more">
                {/* <select>
                <option value="More">More</option>
              </select> */}
                More
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L4.66667 5L8.33333 1"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div
        className={`hamburger ${isActive ? "navactive" : ""}`}
        onClick={handleClick}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}
