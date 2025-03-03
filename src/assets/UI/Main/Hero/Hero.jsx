import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='container'>
       
          <div className='hero-content'>
            <motion.h1
              className='hero-title'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              AUTO MAINTENANCE, SERVICE & REPAIR
            </motion.h1>
            <p className='hero-description'>
            Comprehensive auto maintenance, service, and repair to keep your vehicle running smoothly. From routine check-ups to major repairs, we've got you covered!
            </p>
            <a href='#' className='hero-button'>Free Consultation</a>
         
        </div>
      </div>
    </section>
  )
}

export default Hero
