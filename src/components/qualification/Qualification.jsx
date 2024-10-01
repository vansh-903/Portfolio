import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">BTech-CSE</h3>
                <span className="qualification__subtitle">
                  Vellore Institute of technology
                </span>
                <span className="qualification__grade">CGPA - 8.46</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021-Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">XII Grade</h3>
                <span className="qualification__subtitle">
                  AECS No 4 School
                </span>
                <span className="qualification__grade">Percentage - 89.6</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2019-2020
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">X Grade</h3>
                <span className="qualification__subtitle">
                  St Paul's School
                </span>
                <span className="qualification__grade">Percentage - 87.6</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017-2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  GoBeyound Travel Website
                </h3>
                <span className="qualification__subtitle">
                  Frontend - React js
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>Jun 2024 - Jul 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Analytical Dashboard</h3>
                <span className="qualification__subtitle">
                  Frontend - Next js
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>Feb 2023 - Mar 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Resume Builder Website</h3>
                <span className="qualification__subtitle">
                  Frontend - HTML, CSS, JS
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>Sept 2022 - Nov 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
