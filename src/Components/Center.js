import React from "react";
import person from "../Assets/person-center.jpg";
// import arrow from "../Assets/arrow.svg";
import "./Center.css";
import personOne from "../Assets/search-person-one.jpg";
import personTwo from "../Assets/search-person-two.jpg";
import personThree from "../Assets/search-person-three.jpg";
import personFour from "../Assets/search-person-four.jpg";

export default function Center() {
  return (
    <div>
      <section className="centerSearch">
        <div className="left">
          <div className="leftContainer">
            <div className="firstSection">
              <div className="firstSearchSection">
                <h3>Designer, Brand, Logo Designer</h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.73122 14.2867L6.21937 15.7684L10.3267 11.6789L14.4538 15.7881L15.9221 14.3262L11.795 10.217L15.8626 6.16699L14.3744 4.68529L10.3068 8.73526L6.17969 4.62603L4.71138 6.08796L8.83851 10.1972L4.73122 14.2867Z"
                    fill="black"
                  />
                </svg>
              </div>
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
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.3193 17.3511L22.0959 22.7864"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
            <div className="listOfPeople">
              <ul>
                <li>
                  <div className="listFirstHalf">
                    <img src={personOne} alt="person" />
                    <div>
                      <h4>Antonio Volaska</h4>
                      <p>UI Designer</p>
                    </div>
                  </div>
                  <div className="listSecondHalf">
                    <h4>HIRE ME</h4>
                    <h5>
                      <span>From</span> California
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="listFirstHalf">
                    <img src={personTwo} alt="person" />
                    <div>
                      <h4>Rashed ka</h4>
                      <p>Motion Designer</p>
                    </div>
                  </div>
                  <div className="listSecondHalf">
                    <h4>HIRE ME</h4>
                    <h5>
                      <span>From</span> Bangladesh
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="listFirstHalf">
                    <img src={personThree} alt="person" />
                    <div>
                      <h4>Zubayer Al Hasan</h4>
                      <p>Developer</p>
                    </div>
                  </div>
                  <div className="listSecondHalf">
                    <h4>HIRE ME</h4>
                    <h5>
                      <span>From</span> Norway
                    </h5>
                  </div>
                </li>
                <li>
                  <div className="listFirstHalf">
                    <img src={personFour} alt="person" />
                    <div>
                      <h4>Jannatul Ferdaus</h4>
                      <p>Youtuber</p>
                    </div>
                  </div>
                  <div className="listSecondHalf">
                    <h4>HIRE ME</h4>
                    <h5>
                      <span>From</span> Turkey
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="rightQuestion">why choose us?</p>
          <h2>
            World of talent at <br /> your fingertips
          </h2>
          <div className="seamlessContainer">
            <h3>Seamless Search</h3>
            <div className="seamlessImage">
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1714 8.84363L7.17254 2.00021L1.00012 8.84363"
                  stroke="#005025"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <p className="rightSeamless">
            It only takes 5 minutes. Set-up is smooth and simple, with fully
            costomisable page design to relfect your brand.
          </p>
          <div className="toptalentContainer">
            <h3 className="rightToptalent">Hire top talents</h3>
            <div className="toptalentImage">
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.63794L7.99884 8.48136L14.1713 1.63794"
                  stroke="#005025"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <h3 className="rightPayment">Protected payments, every time</h3>
          <button>Learn More</button>
        </div>
      </section>
      <section className="posterOne">
        <div className="left">
          <h4>Business Solution</h4>
          <h2>
            Get quick <br />
            Solutions for your <br />
            <span>business.</span>
          </h2>
          <p className="posteroneParagraph">
            A full suite of hybrid workforce management tools are yours <br />
            to use, as well as access to our top 1% of talent.
          </p>
          <ul>
            <li>
              <h3>30k+</h3>
              <p>Worldwide Client</p>
            </li>
            <li>
              <h3>3%</h3>
              <p>Top Talents</p>
            </li>
            <li>
              <h3>7mil</h3>
              <p>Doller Payout</p>
            </li>
          </ul>
          <button>Explore Jobi business</button>
        </div>
        <div className="right">{/* <img src={person} alt="" /> */}</div>
      </section>
      <section className="posterTwo">
        <div className="main">
          {/* <img src={arrow} alt="" /> */}
          <div className="innerMainContainer">
            <div className="svgContainer">
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
                <h3>
                  It takes 2 minutes to <br /> open an account.
                </h3>
                <h5>Open account</h5>
              </div>
            </li>
            <li>
              <p>2</p>
              <div>
                <h3>
                  Find talents or search <br /> your desire work.
                </h3>
                <h5>apply job or hire</h5>
              </div>
            </li>
            <li>
              <p>3</p>
              <div>
                <h3>
                  Get work done quickly <br /> with jobi gateway.
                </h3>
                <h5>payment method</h5>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
