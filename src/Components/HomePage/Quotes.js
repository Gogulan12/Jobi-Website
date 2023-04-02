import React, { useRef, useState, useEffect } from "react";

import image1 from "../../Assets/portrait-1.jpg";
import image2 from "../../Assets/portrait-2.jpg";
import image3 from "../../Assets/portrait-3.jpg";
import image4 from "../../Assets/portrait-4.jpg";
import image5 from "../../Assets/portrait-5.jpg";
import "./Quote.css";

export default function Quotes() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState("false");

  let quoteBox = useRef(null);
  // const gap = 16;

  useEffect(() => {
    setCount((v) => v + 1);
  }, []);

  const leftScroll = (e) => {
    // e.preventDefault();

    let width = quoteBox.current.clientWidth;

    quoteBox.current.scrollLeft = quoteBox.current.scrollLeft - width;
    // console.log(quoteBox.current.scrollLeft);
    // if (quoteBox.current.scrollLeft < 1000) {
    //   setActive("true");
    // }
  };

  const rightScroll = (e) => {
    // e.preventDefault();

    let width = quoteBox.current.clientWidth;
    quoteBox.current.scrollLeft = quoteBox.current.scrollLeft + width;
    // console.log(quoteBox.current.scrollLeft);
  };

  return (
    <div className="quoteSection">
      <div className="leftArrow">
        <button onClick={leftScroll}>
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 16.5015L1.92308 9.00146L10 1.50146"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
      <div className="quoteCenter">
        <svg
          width="92"
          height="65"
          viewBox="0 0 92 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4621 57.0645C27.9433 59.605 37.6601 54.1957 40.1224 45.0063C41.2998 40.612 40.6616 35.9969 38.3254 32.011C35.9943 28.0341 32.2357 25.1293 27.7412 23.8312L27.6108 23.7929C26.0392 23.3222 24.3989 24.1872 23.9467 25.7097C23.4945 27.2321 24.4021 28.8424 25.9736 29.3063L26.1312 29.3527C32.2955 31.1289 36.0007 37.4624 34.3908 43.4705C32.7493 49.5968 26.2714 53.203 19.9506 51.5093C13.6298 49.8157 9.82288 43.4537 11.4644 37.3274C13.5148 29.6754 17.2844 23.1176 22.6691 17.8361C26.6935 13.8885 30.172 12.1658 30.2369 12.134C31.6894 11.4347 32.2695 9.7134 31.532 8.28523C31.1322 7.51142 30.4275 6.98185 29.6338 6.76918C28.9601 6.58883 28.2223 6.63645 27.5527 6.95641C27.3824 7.03789 23.327 9.00196 18.635 13.5479C14.3576 17.6919 8.64716 24.9151 5.73281 35.7916C3.27048 44.9812 8.98086 54.5241 18.4621 57.0645Z"
            fill="#00BF58"
          />
          <path
            d="M60.7016 57.0941C70.1828 59.6346 79.8996 54.2254 82.3619 45.0358C83.5394 40.6415 82.9011 36.0263 80.565 32.0402C78.2339 28.0633 74.4752 25.1586 69.9808 23.8604L69.8504 23.822C68.2823 23.3523 66.6383 24.2163 66.1863 25.7388C65.7341 27.2613 66.6417 28.8715 68.2132 29.3355L68.3708 29.3819C74.535 31.1583 78.2402 37.4919 76.6303 43.5C74.9888 49.6263 68.5109 53.2325 62.1901 51.5389C55.8693 49.8452 52.0624 43.4832 53.7039 37.3569C55.7543 29.7049 59.5239 23.147 64.9086 17.8656C68.933 13.918 72.4115 12.1953 72.4764 12.1636C73.9291 11.4641 74.509 9.74294 73.7715 8.31477C73.3718 7.54081 72.667 7.01139 71.8733 6.79872C71.1997 6.61823 70.4619 6.66584 69.7921 6.98577C69.6219 7.06728 65.5664 9.03133 60.8744 13.5772C56.5971 17.7213 50.8867 24.9444 47.9723 35.8211C45.51 45.0107 51.2204 54.5536 60.7016 57.0941Z"
            fill="#00BF58"
          />
        </svg>

        <h2>
          Check what these clients <br />
          have to say.
        </h2>
        <div id="quoteWrapper">
          <div id="quoteCarousel" ref={quoteBox}>
            <div className="quoteList" id="quoteContent">
              <div className="quote quote1">
                <h3>
                  "I've never had such a positive experience with a job service
                  before. <br /> They really took the time to understand my
                  needs <br /> and find the perfect job for me."
                </h3>
                <div className="quoteWriter">
                  <svg
                    className="quoteLine"
                    width="31"
                    height="3"
                    viewBox="0 0 31 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.00146H31" stroke="black" strokeWidth="2" />
                  </svg>

                  <p>
                    Angelique M. <span>United States</span>
                  </p>
                </div>
              </div>
              <div className="quote quote2">
                <h3>
                  "I was feeling really discouraged about my job search <br />{" "}
                  until I found this job service. Their team was so supportive
                  and <br /> encouraging, and they helped me find a job that I
                  love."
                </h3>
                <div className="quoteWriter">
                  <svg
                    className="quoteLine"
                    width="31"
                    height="3"
                    viewBox="0 0 31 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.00146H31" stroke="black" strokeWidth="2" />
                  </svg>

                  <p>
                    Edgar C. <span>Canada</span>
                  </p>
                </div>
              </div>
              <div className="quote quote3">
                <h3>
                  "I can't thank this job service enough for all of their help.
                  <br /> They went above and beyond to connect me with employers
                  and <br /> provided valuable advice throughout the job search
                  process."
                </h3>
                <div className="quoteWriter">
                  <svg
                    className="quoteLine"
                    width="31"
                    height="3"
                    viewBox="0 0 31 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.00146H31" stroke="black" strokeWidth="2" />
                  </svg>

                  <p>
                    Phyllis F. <span>Italy</span>
                  </p>
                </div>
              </div>
              <div className="quote quote4">
                <h3>
                  "I was blown away by the professionalism and expertise of this
                  job service. <br /> They helped me craft a winning resume and
                  prepare for interviews, <br /> which ultimately led to me
                  landing my dream job."
                </h3>
                <div className="quoteWriter">
                  <svg
                    className="quoteLine"
                    width="31"
                    height="3"
                    viewBox="0 0 31 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.00146H31" stroke="black" strokeWidth="2" />
                  </svg>

                  <p>
                    Elaine R. <span>Finland</span>
                  </p>
                </div>
              </div>
              <div className="quote quote5">
                <h3>
                  "I would highly recommend this job service to anyone <br />
                  looking for help with their job search. The team is
                  knowledgeable, responsive, <br /> and genuinely cares about
                  helping their clients succeed."
                </h3>
                <div className="quoteWriter">
                  <svg
                    className="quoteLine"
                    width="31"
                    height="3"
                    viewBox="0 0 31 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.00146H31" stroke="black" strokeWidth="2" />
                  </svg>

                  <p>
                    Raymond M. <span>Australia</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="quoteImages">
          <img className="portrait" src={image1} alt="portrait" />
          <img className="portrait" src={image2} alt="portrait" />
          <img className="portrait" src={image3} alt="portrait" />
          <img className="portrait" src={image4} alt="portrait" />
          <img className="portrait" src={image5} alt="portrait" />
        </div>
      </div>

      <div className="rightArrow">
        <button onClick={rightScroll}>
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.50146L9.07692 9.00146L1 16.5015"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
