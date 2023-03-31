import React, { useRef, useState, useEffect } from "react";
import ui from "../../Assets/ui.svg";
import dev from "../../Assets/dev.svg";
import market from "../../Assets/market.svg";
import phone from "../../Assets/phone.svg";
import edit from "../../Assets/edit.svg";
import account from "../../Assets/accounting.svg";

import "./Trending.css";

export default function Trending() {
  const [count, setCount] = useState(0);

  let box = useRef(null);

  useEffect(() => {
    setCount((v) => v + 1);
  }, []);

  const leftScroll = (e) => {
    e.preventDefault();

    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft - width;
  };

  const rightScroll = (e) => {
    e.preventDefault();

    let width = box.current.clientWidth;
    box.current.scrollLeft = box.current.scrollLeft + width;
  };

  return (
    <div>
      <section className="trendingFirst">
        <div className="trendingTitle">
          <h2>Trending Services</h2>
          <div className="trendingButton">
            <button className="firstButton" id="prev" onClick={leftScroll}>
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.83984 1.69199L1.99984 6.64191L6.83984 11.0073"
                  stroke="#DADADA"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button onClick={rightScroll} id="next">
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16406 11.0073L6.00406 6.0574L1.16406 1.69197"
                  stroke="#005025"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div id="serviceWrapper">
          <div id="carousel" ref={box}>
            <div className="imageList" id="content">
              <div className="imageBox wordpress">
                <p>
                  WordPress <span>Development.</span>
                </p>
              </div>
              <div className="imageBox editing">
                <p>
                  Audio & <span>Video Editing.</span>
                </p>
              </div>
              <div className="imageBox branding">
                <p>
                  Product & <span>Branding Design</span>
                </p>
              </div>
              <div className="imageBox support">
                <p>
                  Admin & <span>Customer Support</span>
                </p>
              </div>
              <div className="imageBox support">
                <p>
                  Admin & <span>Customer Support</span>
                </p>
              </div>
              <div className="imageBox support">
                <p>
                  Admin & <span>Customer Support</span>
                </p>
              </div>
              <div className="imageBox support">
                <p>
                  Admin & <span>Customer Support</span>
                </p>
              </div>
              <div className="imageBox support">
                <p>
                  Admin & <span>Customer Support</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="second">
        <div className="marketplaceTitle">
          <h2>Explore the marketplace.</h2>
          <a href="#">
            Explore all fields{" "}
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16406 11.0073L6.00406 6.0574L1.16406 1.69197"
                stroke="#00BA56"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
        <div className="exploreList">
          <ul>
            <li className="exploreListOne">
              <img src={ui} alt="" />
              <h4>UI/UX Design</h4>
              <p>12k+ Jobs</p>
            </li>
            <li>
              <img src={dev} alt="" />
              <h4>Development</h4>
              <p>8k+ Jobs</p>
            </li>
            <li>
              <img src={market} alt="" />
              <h4>Marketing</h4>
              <p>12k+ Jobs</p>
            </li>
            <li>
              <img src={phone} alt="" />
              <h4>Telemarketing</h4>
              <p>3k+ Jobs</p>
            </li>
            <li>
              <img src={edit} alt="" />
              <h4>Editing</h4>
              <p>12k+ Jobs</p>
            </li>
            <li>
              <img src={account} alt="" />
              <h4>Accounting</h4>
              <p>12k+ Jobs</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
