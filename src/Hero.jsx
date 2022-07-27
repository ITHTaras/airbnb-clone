import React from "react"
import hero from './img/hero.png'

function Hero() {
    return (
        <section id="hero">
            <img className="hero-img" src={hero} />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero