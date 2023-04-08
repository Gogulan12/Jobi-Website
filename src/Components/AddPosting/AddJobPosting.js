import React, { useEffect } from "react";

import "./AddJobPosting.css";

import { useState, useRef } from "react";
// import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";

import { projectFirestore } from "../../firebase/config";

export default function AddJobPosting() {
  const [employer, setEmployer] = useState("");
  const [title, setTitle] = useState("");
  const [contractType, setContractType] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [overview, setOverview] = useState("");
  const [description, setDesciption] = useState("");
  // Lists States
  const [responsibility, setResponsibility] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [requiredSkill, setRequredSkill] = useState("");
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [benefit, setBenefit] = useState("");
  const [benefits, setBenefits] = useState([]);
  ////////////////////////////////////////////////
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  // Lists of useRefs
  const responsInput = useRef(null);
  const requiredInput = useRef(null);
  const keywordInput = useRef(null);
  const benefitInput = useRef(null);
  ////////////////////////////////////////////////
  const history = useHistory();

  // const { postData, data, error } = useFetch(
  //   "http://localhost:3000/jobsData",
  //   "POST"
  // );

  let today = new Date().toISOString().slice(0, 10);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(employer,minSalary,maxSalary,overview,description,responsibilities);
    const doc = {
      employer,
      salary: [{ min: minSalary, max: maxSalary }],
      overview,
      responsibilities,
      keywords,
      requiredSkills,
      date: today,
      title,
      image:
        "https://t3.ftcdn.net/jpg/05/27/49/44/360_F_527494416_7PWpMBqkWQarxhOgD1vIDzhDxizP1cQd.jpg",
      contractType: "Fulltime",
      description,
      benefits,
      location: [{ city: city, country: country }],
    };
    try {
      await projectFirestore.collection("jobsData").add(doc);
      history.push("/listing");
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const respons = responsibility.trim();

    if (respons && !responsibilities.includes(respons)) {
      setResponsibilities((prevResponsibilities) => [
        ...prevResponsibilities,
        respons,
      ]);
    }
    setResponsibility("");
    // responsInput.current.focus();
  };

  const handleAdd2 = (e) => {
    e.preventDefault();
    const skill = requiredSkill.trim();

    if (skill && !requiredSkills.includes(skill)) {
      setRequiredSkills((prevRequriedSkills) => [...prevRequriedSkills, skill]);
    }
    setRequredSkill("");
    // keywordInput.current.focus();
  };

  const handleAdd3 = (e) => {
    e.preventDefault();
    const keyw = keyword.trim();

    if (keyw && !keywords.includes(keyw)) {
      setKeywords((prevKeywords) => [...prevKeywords, keyw]);
    }
    setKeyword("");
    // requiredInput.current.focus();
  };

  const handleAdd4 = (e) => {
    e.preventDefault();
    const ben = benefit.trim();

    if (ben && !benefits.includes(ben)) {
      setBenefits((prevBenefits) => [...prevBenefits, ben]);
    }
    setBenefit("");
    // benefitInput.current.focus();
  };

  // redirect the user when we get data response
  // useEffect(() => {
  //   if (data) {
  //     history.push("/listing");
  //   }
  // }, [data]);

  return (
    <div className="create">
      <div className="titleCreateContainer">
        <h2 className="page-title">Add a Job posting</h2>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Company title:</span>
            <input
              type="text"
              onChange={(e) => setEmployer(e.target.value)}
              value={employer}
              required
            />
          </label>

          <label>
            <span>Job Title:</span>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>

          <label>
            <span>Overview:</span>
            <input
              type="text"
              onChange={(e) => setOverview(e.target.value)}
              value={overview}
              required
            />
          </label>

          <label>
            <span>Description:</span>
            <textarea
              onChange={(e) => setDesciption(e.target.value)}
              value={description}
              required
            ></textarea>
          </label>

          <label>
            <span>List of Responsibilities:</span>
            <div className="responsibilities">
              <input
                type="text"
                onChange={(e) => setResponsibility(e.target.value)}
                value={responsibility}
                ref={responsInput}
              />
              <button onClick={handleAdd} className="btn">
                add
              </button>
            </div>
          </label>
          <p>
            Current Responsibilities:
            {responsibilities.map((i) => (
              <em key={i}>{i},</em>
            ))}
          </p>

          <label>
            <span>List of Required Skills:</span>
            <div className="postskills">
              <input
                type="text"
                onChange={(e) => setRequredSkill(e.target.value)}
                value={requiredSkill}
                ref={requiredInput}
              />
              <button onClick={handleAdd2} className="btn">
                add
              </button>
            </div>
          </label>
          <p>
            Current skills:
            {requiredSkills.map((i) => (
              <em key={i}>{i},</em>
            ))}
          </p>

          <label>
            <span>List of keywords:</span>
            <div className="postkeywords">
              <input
                type="text"
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}
                ref={keywordInput}
              />
              <button onClick={handleAdd3} className="btn">
                add
              </button>
            </div>
          </label>
          <p>
            Current skills:
            {keywords.map((i) => (
              <em key={i}>{i},</em>
            ))}
          </p>

          <label>
            <span>List of Benefits:</span>
            <div className="postBenefits">
              <input
                type="text"
                onChange={(e) => setBenefit(e.target.value)}
                value={benefit}
                ref={benefitInput}
              />
              <button onClick={handleAdd4} className="btn">
                add
              </button>
            </div>
          </label>
          <p>
            Current benefits:
            {benefits.map((i) => (
              <em key={i}>{i},</em>
            ))}
          </p>

          <label>
            <span>Country:</span>
            <input
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              required
            />
          </label>
          <label>
            <span>City:</span>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required
            />
          </label>

          <label>
            <span>Min Salary:</span>
            <input
              type="number"
              onChange={(e) => setMinSalary(e.target.value)}
              value={minSalary}
              required
              min="1000"
            />
          </label>

          <label>
            <span>Max Salary:</span>
            <input
              type="number"
              onChange={(e) => setMaxSalary(e.target.value)}
              value={maxSalary}
              required
              min="1000"
            />
          </label>

          <button className="btn">submit</button>
        </form>
      </div>
    </div>
  );
}
