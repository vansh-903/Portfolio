import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Fresher + Projects</span>
        </div>

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">100 Days of Code</span>
            <a href="https://leetcode.com/u/jkvansh109/"
                className="home__social-icon about__icon"
                target="_blank"
            >
                <i class="uil uil-modem"></i>
            </a>
        </div>

        <div className="about__box">
            <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 16/5</span>
        </div>
    </div>
  )
}

export default Info
