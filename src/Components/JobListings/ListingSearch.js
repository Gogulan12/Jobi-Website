import React from "react";

import "./ListingSearch.css";

export default function ListingSearch() {
  return (
    <div className="filter">
      <div className="filterContainer">
        <div className="filterHeaderSection">
          <h2>Filter By</h2>
          <div className="filterButtonContainer">
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
        </div>

        <div className="filterSearchSection">
          <div className="keywordContainer filterbox">
            <label htmlFor="keyword">Keyword or Title</label>
            <input type="text" placeholder="Search by Keywords" />
          </div>
          <div className="categoryContainerSearch filterbox">
            <label htmlFor="keyword">Categories</label>
            <select name="keywordSelect" id="keywordSelect">
              <option value="">Development</option>
            </select>
          </div>
          <div className="locationContainer filterbox">
            <label htmlFor="category">Location</label>
            <select name="category" id="category">
              <option value="">Washington DC</option>
            </select>
          </div>
          <div className="englishContainer filterbox">
            <label htmlFor="english">English Fluency</label>
            <select name="english" id="english">
              <option value="">Fluent</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
