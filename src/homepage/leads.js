import React from 'react'
import './leads.css'
import leadImage from '../images/Polygon.png'

function leads() {
  return (
    <div className='lead__container' id='leads'>

            <div className='lead__header'>
                <h1>LEADS</h1>
            </div>

            <div className='lead__detail'>

                <div className='lead__data'>
                    <img src={leadImage}></img>
                    <h3>lead Name</h3>
                    <h5>DESIGNATION</h5>
                </div>
                <div className='lead__data'>
                    <img src={leadImage}></img>
                    <h3>lead Name</h3>
                    <h5>DESIGNATION</h5>

                </div>
                <div className='lead__data'>
                    <img src={leadImage}></img>
                    <h3>lead Name</h3>
                    <h5>DESIGNATION</h5>

                </div>
                <div className='lead__data'>
                    <img src={leadImage}></img>
                    <h3>lead Name</h3>
                    <h5>DESIGNATION</h5>

                </div>
            </div>

            <h3 className='show_more'><a href='#'>Show More...</a></h3>
        </div>
  )
}

export default leads