import React from "react";
import "./ListingCenter.css";

import Logo from "../../Assets/coca-cola.svg";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import ListingIndivid from "./ListingIndivid";

export default function ListingCenter() {
  // const [events, setEvents] = useState([
  //   {
  //     image: Logo,
  //     id: 1,
  //     class: "Fulltime",
  //     title: "Lead designer & expert in maya 3D",
  //     salarymin: 300,
  //     salarymax: 450,
  //     per: "week",
  //     Country: "USA",
  //     State: "California",
  //   },
  //   {
  //     image: Logo,
  //     id: 2,
  //     class: "Fulltime",
  //     title: "Lead designer & expert in maya 3D",
  //     salarymin: 300,
  //     salarymax: 450,
  //     per: "week",
  //     Country: "USA",
  //     State: "California",
  //   },
  // ]);

  const { data, isPending, error } = useFetch("http://localhost:3000/jobsData");

  return (
    <div>
      <section className="ListTopCenter">
        <div className="ListTopCenterLeft">
          <p>
            All <span>7096</span> jobs found
          </p>
        </div>

        <div className="ListTopCenterRight">
          <label htmlFor="">Short:</label>
          <select name="" id="">
            <option value="">Latest</option>
          </select>
          <div className="imageContainerCenterFilter">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 11H14" stroke="black" strokeLinecap="round" />
              <path d="M1 6H14" stroke="black" strokeLinecap="round" />
              <path d="M1 1H14" stroke="black" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      <section className="jobPostings">
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
        {data && <ListingIndivid jobs={data} />}
      </section>

      <section className="pageCount">
        <ul>
          <li className="pageActive">1</li>
          <li>2</li>
          <li>3</li>
          <li>4 ...</li>
          <li>Last</li>
        </ul>
        <div className="arrowJobPages">
          <svg
            width="36"
            height="3"
            viewBox="0 0 36 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrowLine"
          >
            <path d="M35.3828 1.5H0" stroke="#457964" strokeWidth="2" />
          </svg>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="arrowCorner"
          >
            <path
              d="M1 1L8.51856 8.58062L1 15.65"
              stroke="#457964"
              strokeWidth="2"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
