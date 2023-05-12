import { useState } from "react";
import React from "react";

import "./ListingSearch.css";

export default function ListingSearch() {
  const [filter, setFilter] = useState("false");

  const ToggleClass = () => {
    setFilter(!filter);
  };

  return (
    <div className="filter">
      <div className="filterContainer">
        <div
          className="filterHeaderSection"
          style={{
            paddingBottom: !filter ? "20px" : "0px",
            borderBottom: !filter ? "1px solid lightgrey" : "0px",
          }}
        >
          <h2>Filter By</h2>
          <div className="filterButtons">
            <div
              className="filterButtonContainer filterOne"
              onClick={ToggleClass}
              style={{
                display: !filter ? "none" : "block",
              }}
            >
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6.12972 7L11.2594 1"
                  stroke="#516E62"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div
              className="filterButtonContainer filterTwo"
              onClick={ToggleClass}
              style={{
                display: filter ? "none" : "block",
              }}
            >
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2598 8L6.13005 2L1.00033 8"
                  stroke="#516E62"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={`filterDropDown ${filter ? "active" : null}`}>
          <div className="filterSearchSection">
            <div className="keywordContainer filterbox">
              <label htmlFor="keyword">Keyword or Title</label>
              <div className="keywordInputContainer">
                <input type="text" placeholder="Search by Keywords" />
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0096 6.35212C12.0096 9.44302 9.49212 11.9542 6.37979 11.9542C3.26747 11.9542 0.75 9.44302 0.75 6.35212C0.75 3.26123 3.26747 0.75 6.37979 0.75C9.49212 0.75 12.0096 3.26123 12.0096 6.35212Z"
                    stroke="black"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10.4473 10.4015L13.3285 13.68"
                    stroke="black"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            <div className="categoryContainerSearch filterbox">
              <label htmlFor="keyword">Categories</label>
              <select
                name="keywordSelect"
                id="keywordSelect"
                className="filterSelect"
              >
                <option value="">Development</option>
              </select>
            </div>
            <div className="locationContainer filterbox">
              <label htmlFor="category">Location</label>
              <select name="category" id="category" className="filterSelect">
                <option value="">Washington DC</option>
              </select>
            </div>
            <div className="englishContainer filterbox">
              <label htmlFor="english">English Fluency</label>
              <select name="english" id="english" className="filterSelect">
                <option value="">Fluent</option>
              </select>
            </div>
          </div>

          <section className="checkboxes">
            <div className="jobtype">
              <label htmlFor="jobtype">Job Type:</label>
              <form action="">
                <input type="checkbox" />
                <label htmlFor="">Fulltime</label> <br />
                <input type="checkbox" />
                <label htmlFor="">Hourly-Contract</label> <br />
                <input type="checkbox" />
                <label htmlFor="">Part-time (20hr/week)</label> <br />
                <input type="checkbox" />
                <label htmlFor="">Fixed-Price</label>
              </form>
            </div>

            <div className="experience">
              <label htmlFor="experience">Experience Level:</label>
              <form action="">
                <input type="checkbox" />
                <label htmlFor="">Beginner (1-3 yrs)</label> <br />
                <input type="checkbox" />
                <label htmlFor="">Intermediate (3-5 yrs)</label> <br />
                <input type="checkbox" />
                <label htmlFor="">Expert (5-10yrs)</label>
              </form>
            </div>

            <div className="salary">
              <label htmlFor="salary">Salary Range:</label>
              <div className="salarySecond">
                <div className="numberInputFields">
                  <input type="number" placeholder="0" />
                  <p>-</p>
                  <input type="number" placeholder="10000" />
                  <p>USD</p>
                </div>

                <input type="range" min="0" max="100" className="range" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
