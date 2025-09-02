import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_image from '../../assets/oreoluwalawanson.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>Meet Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a frontend developer with 4+ years of experience turning ideas into sleek, user-friendly websites. Over the years, I’ve had the privilege of working with amazing organizations, helping them grow and connect with their audiences through clean, modern web.</p>
                <p>What drives me isn’t just writing code — it’s the excitement of bringing designs to life, solving problems, and creating digital experiences that people enjoy using. Every project is a chance to blend creativity with functionality, and I bring enthusiasm, dedication, and a client-focused mindset to each one.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p> <hr style={{width: "95%"}} />
                </div>
                <div className="about-skill">
                    <p>ReactJS</p> <hr style={{width: "75%"}} />
                </div>
                <div className="about-skill">
                    <p>JavaScript</p> <hr style={{width: "70%"}} />
                </div>
                <div className="about-skill">
                    <p>TailwindCSS</p> <hr style={{width: "50%"}} />
                </div>
                <div className="about-skill">
                    <p>REST API</p> <hr style={{width: "60%"}} />
                </div>
                <div className="about-skill">
                    <p>Git & Github</p> <hr style={{width: "70%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
            <div className="about-achievement">
                <h1>4+</h1>
                <p>Years of Professional Experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>Successful Projects Delivered</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>Satisfied Clients</p>
            </div>
        </div>
    </div>
  )
}

export default About
