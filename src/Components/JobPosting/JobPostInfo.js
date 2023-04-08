import React from "react";
import cocacola from "../../Assets/coca-cola.svg";
import "./JobPostInfo.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useFetch } from "../../hooks/useFetch";
import { projectFirestore } from "../../firebase/config";

export default function JobPostInfo() {
  const { id } = useParams();
  // const url = "http://localhost:3000/jobsData/" + id;
  // const { error, isPending, data: job } = useFetch(url);

  const [job, setJob] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("jobsData")
      .doc(id)
      .get()
      .then((doc) => {
        // console.log(doc);
        if (doc.exists) {
          setIsPending(false);
          setJob(doc.data());
        } else {
          setIsPending(false);
          setError("Cound not find that recipe");
        }
      });
  }, []);

  return (
    <div>
      <div className="JobInfoContainer">
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
        {job && (
          <>
            <div className="jobDescription">
              <p className="jobDate">
                {job.date} by <span>{job.employer}</span>
              </p>
              <h2>{job.title}</h2>
              <ul className="jobLinks">
                <li>
                  <div className="facebookLink Links">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.13249 14.3334H8.79916V8.99335H11.2018L11.4658 6.34002H8.79916V5.00002C8.79916 4.82321 8.8694 4.65364 8.99442 4.52862C9.11944 4.40359 9.28901 4.33335 9.46582 4.33335H11.4658V1.66669H9.46582C8.58177 1.66669 7.73392 2.01788 7.1088 2.643C6.48368 3.26812 6.13249 4.11597 6.13249 5.00002V6.34002H4.79916L4.53516 8.99335H6.13249V14.3334Z"
                        fill="#244034"
                      />
                    </svg>
                    <p>Facebook</p>
                  </div>
                </li>
                <li>
                  <div className="twitterLink Links">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4366 4.24921L11.7851 5.8953C11.4569 9.71796 8.23037 12.6875 4.3749 12.6875C3.58193 12.6875 2.92568 12.5617 2.42803 12.3156C2.02881 12.1133 1.86475 11.9 1.821 11.8344C1.7848 11.7794 1.76147 11.7169 1.75276 11.6517C1.74404 11.5865 1.75016 11.5201 1.77066 11.4575C1.79117 11.395 1.82552 11.3379 1.87116 11.2904C1.9168 11.243 1.97256 11.2065 2.03428 11.1836C2.04521 11.1781 3.33584 10.6859 4.17256 9.73983C3.65365 9.37036 3.19756 8.91981 2.82178 8.40546C2.07256 7.38827 1.27959 5.62187 1.75537 2.98593C1.77033 2.90756 1.80617 2.83469 1.85911 2.77501C1.91205 2.71533 1.98013 2.67106 2.05615 2.64687C2.13242 2.62189 2.21408 2.61838 2.29221 2.6367C2.37033 2.65503 2.44192 2.69449 2.49912 2.75077C2.51553 2.77265 4.33662 4.5664 6.5624 5.14608V4.81249C6.56455 4.46561 6.635 4.12256 6.76973 3.80291C6.90446 3.48326 7.10084 3.19328 7.34764 2.94952C7.59444 2.70577 7.88684 2.51301 8.20814 2.38226C8.52943 2.25151 8.87334 2.18533 9.22021 2.18749C9.67548 2.19398 10.1213 2.31829 10.5142 2.54831C10.9072 2.77832 11.2338 3.1062 11.4624 3.49999H13.1249C13.2113 3.49972 13.2958 3.52502 13.3678 3.57271C13.4398 3.6204 13.4961 3.68833 13.5296 3.76796C13.5611 3.84877 13.5691 3.93685 13.5527 4.02202C13.5362 4.10719 13.496 4.18595 13.4366 4.24921Z"
                        fill="#244034"
                      />
                    </svg>
                    <p>Twitter</p>
                  </div>
                </li>
                <li>
                  <div className="copyLink Links">
                    <svg
                      width="25"
                      height="26"
                      viewBox="0 0 25 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_519_29747)">
                        <path
                          d="M7.71185 16.7165C7.11582 15.8399 7.30114 14.6429 8.05244 13.8916L9.51998 12.424C9.78043 12.1636 9.78043 11.7328 9.51998 11.4724C9.25953 11.2119 8.82878 11.2119 8.56833 11.4724L7.15088 12.8898C5.84362 14.1971 5.63325 16.3208 6.81029 17.7482C7.12338 18.1306 7.51309 18.4431 7.95431 18.6657C8.39554 18.8882 8.87849 19.0159 9.37206 19.0404C9.86563 19.065 10.3589 18.9858 10.82 18.8081C11.2811 18.6304 11.6999 18.3581 12.0494 18.0087L13.577 16.4811C13.8375 16.2206 13.8375 15.7899 13.577 15.5294C13.3166 15.269 12.8858 15.269 12.6254 15.5294L11.0977 17.057C10.8669 17.2864 10.5882 17.4618 10.2816 17.5706C9.97499 17.6794 9.64807 17.719 9.32434 17.6864C9.00062 17.6538 8.68812 17.55 8.40932 17.3823C8.13051 17.2146 7.89232 16.9872 7.71185 16.7165V16.7165ZM11.0476 15.0035L14.0528 11.9983C14.3283 11.7228 14.3283 11.272 14.0528 10.9966C13.7774 10.7211 13.3266 10.7211 13.0511 10.9966L10.0459 14.0018C9.77041 14.2772 9.77041 14.728 10.0459 15.0035C10.3214 15.279 10.7721 15.279 11.0476 15.0035ZM11.9392 8.10154L10.5217 9.519C10.2613 9.77945 10.2613 10.2102 10.5217 10.4706C10.7822 10.7311 11.2129 10.7311 11.4734 10.4706L12.9409 9.0031C13.6922 8.2518 14.8893 8.06648 15.7658 8.66251C16.0365 8.84298 16.2639 9.08118 16.4316 9.35998C16.5993 9.63879 16.7032 9.95128 16.7357 10.275C16.7683 10.5987 16.7288 10.9256 16.6199 11.2323C16.5111 11.5389 16.3357 11.8176 16.1064 12.0484L14.5787 13.576C14.3183 13.8365 14.3183 14.2672 14.5787 14.5277C14.8392 14.7881 15.2699 14.7881 15.5304 14.5277L17.058 13C18.5206 11.5375 18.4354 9.10828 16.8026 7.75594C15.3751 6.57891 13.2464 6.79428 11.9392 8.10154Z"
                          fill="#244034"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_519_29747">
                          <rect
                            width="17"
                            height="17"
                            fill="white"
                            transform="translate(0.0292969 13) rotate(-45)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p>Copy</p>
                  </div>
                </li>
              </ul>
              <h3>Overview</h3>
              <div className="overview">
                <p>{job.overview}</p>
              </div>
              <h3>Job Description</h3>
              <div className="jobDescriptionText">
                <p>{job.description}</p>
              </div>
              <h3>Responsibilities</h3>
              <ul className="responsibilityList">
                {job.responsibilities.map((respon) => (
                  <li key={respon}>{respon}</li>
                ))}
              </ul>
              <h3>Required Skills</h3>
              <ul className="requiredSkills">
                {job.requiredSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <h3>Benefits:</h3>
              <ul className="benefitsList">
                {job.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
            <div className="JobApply">
              <div className="JobApplyContainer">
                <div className="companyLogoBox">
                  <div className="companyLogoBoxImageContainer">
                    <img src={job.image} alt="" />
                  </div>
                  <h3>{job.employer}</h3>
                  <a href="/404">
                    <button>Visit website</button>
                  </a>
                </div>
                <div className="companyJotNotes">
                  <div className="infoleft">
                    <h4>Salary</h4>
                    <p>
                      {job.salary[0].min}-{job.salary[0].max}/year
                    </p>
                    <h4>Location</h4>
                    <p>
                      {job.location[0].country}, {job.location[0].city}
                    </p>
                    <h4>Date</h4>
                    <p>{job.date}</p>
                  </div>
                  <div className="infoRight">
                    <h4>Expertise</h4>
                    <p>{job.expertiseLevel}</p>
                    <h4>Job Type</h4>
                    <p>{job.contractType}</p>
                    <h4>Experience</h4>
                    <p>{job.experienceYears} Years</p>
                  </div>
                </div>

                <div className="skillslistNotes">
                  <ul>
                    {/* <li>Design</li>
                    <li>Product Design</li>
                    <li>Brands</li>
                    <li>Applications</li>
                    <li>UI/UX</li> */}
                    {job.keywords.map((keyword) => (
                      <li key={keyword}>{keyword}</li>
                    ))}
                  </ul>
                </div>

                <div className="applyButton">
                  <button>Apply Now</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
