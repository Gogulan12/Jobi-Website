import React from "react";
import "./ListingCenter.css";

import Logo from "../../Assets/coca-cola.svg";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import ListingIndivid from "./ListingIndivid";

export default function ListingCenter() {
  const [events, setEvents] = useState([
    {
      image: Logo,
      id: 1,
      class: "Fulltime",
      title: "Lead designer & expert in maya 3D",
      salarymin: 300,
      salarymax: 450,
      per: "week",
      Country: "USA",
      State: "California",
    },
    {
      image: Logo,
      id: 2,
      class: "Fulltime",
      title: "Lead designer & expert in maya 3D",
      salarymin: 300,
      salarymax: 450,
      per: "week",
      Country: "USA",
      State: "California",
    },
  ]);

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

        {/* {events.map((event, index) => (
          <a href="/listing/job" key={event.id}>
            <div className="job">
              <div className="logoAndBookmark">
                <img src={event.image} alt="" />
                <div className="bookmarkImageContainer">
                  <svg
                    width="15"
                    height="19"
                    viewBox="0 0 15 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                      fill="#D6D6D6"
                    />
                  </svg>
                </div>
              </div>

              <h5>{event.class}</h5>
              <h4>{event.title}</h4>

              <p>
                ${event.salarymin}-${event.salarymax} <span>/ {event.per}</span>
              </p>

              <div className="placeAndApply">
                <h4 className="jobLocation">
                  {event.Country}, {event.State}
                </h4>
                <button>apply</button>
              </div>
            </div>
          </a>
        ))} */}

        {/* <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a>
        <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a>
        <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a>
        <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a>
        <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a>
        <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a>
        <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a>
        <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a>
        <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a>
        <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a>
        <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a>
        <a href="/listing/job">
          <div className="job">
            <div className="logoAndBookmark">
              <img src={Logo} alt="" />
              <div className="bookmarkImageContainer">
                <svg
                  width="15"
                  height="19"
                  viewBox="0 0 15 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2326 0C13.184 0 14.8771 1.45454 14.8771 3.9885V16.5812C14.8771 17.1097 14.6039 17.5853 14.1445 17.8512C13.6869 18.118 13.1352 18.1232 12.6723 17.8633L7.48664 14.9465L2.25307 17.8694C2.02685 17.9959 1.77888 18.06 1.53003 18.06C1.27336 18.06 1.01668 17.9916 0.7835 17.8547C0.324965 17.5887 0.0517578 17.1131 0.0517578 16.5855V3.82996C0.0517578 1.39563 1.74581 0 4.69976 0H10.2326ZM10.2326 1.29947H4.69976C2.48191 1.29947 1.35689 2.15019 1.35689 3.82996V16.5855C1.35689 16.667 1.40387 16.7112 1.44302 16.7337C1.48218 16.7579 1.54395 16.7753 1.6153 16.7354L7.16819 13.634C7.36657 13.524 7.60932 13.5231 7.80857 13.6349L13.3136 16.7311C13.3858 16.7727 13.4476 16.7536 13.4867 16.7302C13.5259 16.7068 13.572 16.6626 13.572 16.5812L13.5717 3.88978C13.5651 3.14417 13.4202 1.29947 10.2326 1.29947ZM10.6144 5.82898C10.9746 5.82898 11.267 6.12006 11.267 6.47871C11.267 6.83736 10.9746 7.12845 10.6144 7.12845H4.24714C3.88692 7.12845 3.59457 6.83736 3.59457 6.47871C3.59457 6.12006 3.88692 5.82898 4.24714 5.82898H10.6144Z"
                    fill="#D6D6D6"
                  />
                </svg>
              </div>
            </div>

            <h5>Fulltime</h5>
            <h4>
              Lead designer & expert <br /> in maya 3D
            </h4>

            <p>
              $300-$450 <span>/ Week</span>
            </p>

            <div className="placeAndApply">
              <h4 className="jobLocation">USA, California</h4>
              <button>apply</button>
            </div>
          </div>
        </a> */}
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
