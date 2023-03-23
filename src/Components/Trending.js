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
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>
        <div className="image-list">
          <div>
            <p>WordPress Development.</p>
          </div>
          <div>
            <p>Audio & Video Editing.</p>
          </div>
          <div>
            <p>Product & Branding Design</p>
          </div>
          <div>
            <p>Admin & Customer Support</p>
          </div>
        </div>
      </section>
      <section className="second">
        <div className="title">
          <h2>Expore the Marketplace.</h2>
          <a href="#">Explore all fields &gt;</a>
        </div>
        <div>
          <ul>
            <li>
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
