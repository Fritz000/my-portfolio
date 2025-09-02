import React from 'react'
import './Hero.css'
import profile_img from '../../assets/cropped_circle_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1>Turning your ideas into engaging digital experiences — <span>I’m Oreoluwa, a frontend developer from Nigeria. </span></h1>
      <p>I am a frontend developer based in Lagos, Nigeria, with 4 years of experience turning ideas into interactive, high-performing web solutions.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
      <div className="hero-resume">Access my resume</div>
      </div>
    </div>
  )
}

export default Hero
