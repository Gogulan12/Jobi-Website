import React from "react";

import circle1 from "../../Assets/listlogo1.svg";
import circle2 from "../../Assets/listlogo2.svg";
import "./ListingNavigation.css";

export default function ListingNavigation() {
  return (
    <div className="listing-nav">
      <nav>
        <div className="list-logo">
          <div className="list-logo-circle">
            <img src={circle1} alt="" />
            <img src={circle2} alt="" className="circle2" />
          </div>
          <h2>jobi</h2>
        </div>

        <div className="category">
          <div className="category-container">
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.84806 7.45542C4.76457 7.45542 5.49908 8.19708 5.49908 9.12009V11.336C5.49908 12.2525 4.76457 13 3.84806 13H1.65102C0.741011 13 0 12.2525 0 11.336V9.12009C0 8.19708 0.741011 7.45542 1.65102 7.45542H3.84806ZM11.3492 7.45542C12.2592 7.45542 13.0003 8.19708 13.0003 9.12009V11.336C13.0003 12.2525 12.2592 13 11.3492 13H9.1522C8.23569 13 7.50118 12.2525 7.50118 11.336V9.12009C7.50118 8.19708 8.23569 7.45542 9.1522 7.45542H11.3492ZM3.84806 0C4.76457 0 5.49908 0.747511 5.49908 1.66467V3.88056C5.49908 4.80357 4.76457 5.54458 3.84806 5.54458H1.65102C0.741011 5.54458 0 4.80357 0 3.88056V1.66467C0 0.747511 0.741011 0 1.65102 0H3.84806ZM11.3492 0C12.2592 0 13.0003 0.747511 13.0003 1.66467V3.88056C13.0003 4.80357 12.2592 5.54458 11.3492 5.54458H9.1522C8.23569 5.54458 7.50118 4.80357 7.50118 3.88056V1.66467C7.50118 0.747511 8.23569 0 9.1522 0H11.3492Z"
                fill="#D2F34C"
              />
            </svg>

            <h3>Category</h3>
          </div>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>Job</li>
          <li>Explore</li>
          <li>Contact</li>
          <li>Pages</li>
        </ul>

        <svg
          width="83"
          height="94"
          viewBox="0 0 83 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 77.79C21.2222 52.1716 43.6755 30.1124 69.7049 10.2946C73.5485 7.36822 84.2182 -2.04822 81.5878 1.9919C78.3371 6.98486 74.5511 11.6628 71.2893 16.6648C56.7409 38.9746 44.1597 62.8008 31.6795 86.3075C31.2257 87.1624 27.1391 94.1665 31.5355 90.602C36.6892 86.4235 41.3061 81.5151 46.1551 77.0027C51.4625 72.0638 56.8605 67.2277 62.071 62.1867C62.6818 61.5957 64.5328 60.0342 64.2315 60.8267C61.3576 68.3875 57.8248 75.7505 54.5812 83.1582C53.2233 86.2592 51.5488 89.5936 50.6922 92.8924C50.2977 94.4117 52.917 90.6642 54.077 89.6C58.4069 85.6277 62.8588 81.6819 67.7604 78.4342"
            stroke="#598C76"
            stroke-linecap="round"
          />
        </svg>

        <div className="list-nav-posting">
          <p className="posting">Post Job</p>
          <p className="login">Login</p>
          <button>Hire Top Talents</button>
        </div>
      </nav>

      <section className="Job-listing-Search">
        <h1>Job Listing</h1>
        <h5>We delivered blazing fast & striking work solution</h5>
        <div className="full-search-bar">
          <div className="full-input">
            <label htmlFor="title">What are you looking for? </label>
            <input type="text" placeholder="UI Designer" />
          </div>
          <div className="full-input-category">
            <div className="full-input-category-container">
              <label htmlFor="category">Category</label>
              <select name="category" id="category">
                <option value="#">Web Design</option>
              </select>
            </div>
          </div>
          <button>SEARCH</button>
        </div>
      </section>
    </div>
  );
}
