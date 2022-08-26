import React from 'react'
// import group from '../image/group.jpg'
import '../style.css'
function Hero(){
    return(
        <section className='hero'>
            <img className='hero--img'
            src='../image/group.jpg' alt="image"/>
            <div className='hero--online'>
            <h2>Online Experiences</h2>
            <p>Join unique interactive 
                activities led by one-of-a-kind 
                hosts—all without leaving home.
            </p>
            </div>
        </section>
    )
}
export default Hero