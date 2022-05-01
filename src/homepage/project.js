import React from 'react'
import projectImage from '../images/project.png'
import './project.css'

function project() {
    return (
        <div className='project__container' id='projects'>

            <div className='project__header'>
                <h1>PROJECTS</h1>
            </div>

            <div className='project__detail'>

                <div className='project__data'>
                    <img src={projectImage}></img>
                    <h3>Project Name</h3>
                </div>
                <div className='project__data'>
                    <img src={projectImage}></img>
                    <h3>Project Name</h3>
                </div>
                <div className='project__data'>
                    <img src={projectImage}></img>
                    <h3>Project Name</h3>
                </div>
                <div className='project__data'>
                    <img src={projectImage}></img>
                    <h3>Project Name</h3>
                </div>
            </div>

            <h3 className='show_more'><a href='#'>Show More...</a></h3>
        </div>
    )
}

export default project