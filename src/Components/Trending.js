import React from "react";
import ui from "../Assets/ui.svg";
import dev from "../Assets/dev.svg";
import market from "../Assets/market.svg";
import phone from "../Assets/phone.svg";
import edit from "../Assets/edit.svg";
import account from "../Assets/accounting.svg";

import "./Trending.css";

export default function Trending() {
  return (
    <div>
      <section className="trending-first">
        <div className="trending-Title">
          <h2>Trending Services</h2>
          <div className="trending-button">
            <button className="first-button">
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
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
            <button>
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
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="image-list">
          <div className="image-box wordpress">
            <p>
              WordPress <span>Development.</span>
            </p>
          </div>
          <div className="image-box editing">
            <p>
              Audio & <span>Video Editing.</span>
            </p>
          </div>
          <div className="image-box branding">
            <p>
              Product & <span>Branding Design</span>
            </p>
          </div>
          <div className="image-box support">
            <p>
              Admin & <span>Customer Support</span>
            </p>
          </div>
        </div>
      </section>
      <section className="second">
        <div className="marketplace-title">
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
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </div>
        <div className="explore-list">
          <ul>
            <li className="explore-list-one">
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
