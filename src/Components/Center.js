import React from "react";
import person from "../Assets/person-center.jpg";
// import arrow from "../Assets/arrow.svg";
import "./Center.css";

export default function Center() {
  return (
    <div>
      <section className="search">
        <div className="left">
          <div>
            <input type="text" placeholder="Designer, Brand, Logo designer" />
            <button>
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.4035 10.6378C20.4035 16.0366 16.007 20.4187 10.5767 20.4187C5.14651 20.4187 0.75 16.0366 0.75 10.6378C0.75 5.23905 5.14651 0.856934 10.5767 0.856934C16.007 0.856934 20.4035 5.23905 20.4035 10.6378Z"
                  stroke="white"
                  stroke-width="1.5"
                />
                <path
                  d="M17.3193 17.3511L22.0959 22.7864"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </button>
            <div className="list-of-people">
              <ul>
                <li>
                  <div>
                    <img src="" alt="person" />
                    <div>
                      <p>Antonio Volaska</p>
                      <p>UI Designer</p>
                    </div>
                  </div>
                  <div>
                    <p>HIRE ME</p>
                    <p>From California</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="" alt="person" />
                    <div>
                      <p>Rashed ka</p>
                      <p>Motion Designer</p>
                    </div>
                  </div>
                  <div>
                    <p>HIRE ME</p>
                    <p>From Bangladesh</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="" alt="person" />
                    <div>
                      <p>Zubayer Al Hasan</p>
                      <p>Developer</p>
                    </div>
                  </div>
                  <div>
                    <p>HIRE ME</p>
                    <p>From Norway</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src="" alt="person" />
                    <div>
                      <p>Jannatul Ferdaus</p>
                      <p>Youtuber</p>
                    </div>
                  </div>
                  <div>
                    <p>HIRE ME</p>
                    <p>From Turkey</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <p>why choose us?</p>
          <h2>World of talent at your fingertips</h2>
          <h3>Seamless Search</h3>
          <p>
            It only takes 5 minutes. Set-up is smooth and simple, with fully
            costomisable page design to relfect your brand.
          </p>
          <h3>Hire top talents</h3>
          <h3>Proteced payments, every time</h3>
          <button>Learn More</button>
        </div>
      </section>
      <section className="posterOne">
        <div className="left">
          <h4>Business Solution</h4>
          <h2>Get quick solutions for you business.</h2>
          <p>
            A full suite of hybrid workforce management tools are yours to use,
            as well as access to our top 1% of talent.
          </p>
          <ul>
            <li>
              <h2>30k+</h2>
              <p>Worldwide Client</p>
            </li>
            <li>
              <h2>3%</h2>
              <p>Top Talents</p>
            </li>
            <li>
              <h2>7mil</h2>
              <p>Doller Payout</p>
            </li>
          </ul>
          <button>Explore Jobi business</button>
        </div>
        <div className="right">
          <img src={person} alt="" />
        </div>
      </section>
      <section className="posterTwo">
        <div className="main">
          {/* <img src={arrow} alt="" /> */}
          <div className="inner-main-container">
            <div className="svg-container">
              <svg
                width="20"
                height="26"
                viewBox="0 0 20 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.536621 2.32924C0.536621 0.658228 2.46436 -0.275954 3.77591 0.759481L18.2747 12.2059C19.338 13.0454 19.2766 14.677 18.1531 15.4341L3.65436 25.2055C2.32594 26.1007 0.536621 25.1489 0.536621 23.5469V2.32924Z"
                  fill="white"
                />
              </svg>
            </div>

            <h2>
              Let's get started <br />
              It's <span>simple.</span>
            </h2>
            <p>
              Get access to our top 1% talent as well as a complete <br />
              set of hybrid workforce management tools.
            </p>
          </div>
        </div>
        <div className="steps">
          <ul>
            <li>
              <p>1</p>
              <div>
                <h3>It takes 2 minutes to open an account.</h3>
                <p>Open account</p>
              </div>
            </li>
            <li>
              <p>2</p>
              <div>
                <h3>Find talents or search your desire work.</h3>
                <p>apply job or hire</p>
              </div>
            </li>
            <li>
              <p>3</p>
              <div>
                <h3>Get work done quickly with jobi gateway.</h3>
                <p>payment method</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
