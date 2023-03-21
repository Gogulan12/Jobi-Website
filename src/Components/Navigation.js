import React from "react";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div>
      <h3>Jobi</h3>
      <input type="text" placeholder="Search here..." />
      <select name="cars" id="cars">
        <option value="talent">Talents</option>
        <option value="option2">option2</option>
        <option value="option3">option3</option>
        <option value="option4">option4</option>
      </select>
      <ul>
        <li>Find Job</li>
        <li>Find Talents</li>
        <li>Pages</li>
      </ul>

      <a href="#">Login</a>
      <button>Register</button>

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
          <li>
            <select name="" id="">
              <option value="More">More</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}
