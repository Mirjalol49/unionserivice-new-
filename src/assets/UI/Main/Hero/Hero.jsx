import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
       
          <div className='hero-content'>
            <h1 className='hero-title fade-in'>
              AUTO MAINTENANCE, SERVICE & REPAIR
            </h1>
            <p className='hero-description fade-in' style={{transitionDelay: '0.2s'}}>
            Comprehensive auto maintenance, service, and repair to keep your vehicle running smoothly. From routine check-ups to major repairs, we've got you covered!
            </p>
            <a href='#' className='hero-button fade-in hover-lift' style={{transitionDelay: '0.4s'}}>Free Consultation</a>
         
        </div>
      </div>
    </section>
  )
}

export default Hero
