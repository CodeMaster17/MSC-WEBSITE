import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about__container" id="about">
            <div className="about__title">
                <h1 className="about_header">ABOUT US</h1>
            </div>

            <div className="about__content">
                <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Incididunt aliquip deserunt reprehenderit elit laborum. Laborum magna nulla duis ullamco cillum dolor. </p>
            </div>

            <div className='about__events'>
            <h2>10+ EVENTS | 30+ MEMBERS</h2>
            <h2>6+ HACKATHONS | 500+ PARTICIPANTS</h2>
            </div>
        </div>
    );
}

export default About

