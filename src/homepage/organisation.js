import React from 'react'
import './organisation.css'
import orgImage from '../images/orgImage.png'

function organisation() {
    return (

        <div className='org__container' id='orgs'>

            <div className='org__header'>
                <h1>OUR ORGANISATION</h1>
            </div>

            <div className='org__detail'>

                <div className='org__data'>
                    <img src={orgImage}></img>
                    <h3>TECH</h3>
                </div>
                <div className='org__data'>
                    <img src={orgImage}></img>
                    <h3>CREATIVE</h3>
                </div>
                <div className='org__data'>
                    <img src={orgImage}></img>
                    <h3>OPERATIONS</h3>
                </div>
                <div className='org__data'>
                    <img src={orgImage}></img>
                    <h3>MARKETING</h3>
                </div>
            </div>

        </div>
    )
}

export default organisation