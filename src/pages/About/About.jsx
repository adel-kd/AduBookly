import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Adu Bookly</h2>
            <p className='fs-17'><b>AduBookly </b>is an intuitive online platform designed to help you search, find, and explore books effortlessly. Whether you’re looking for academic resources, fiction, or personal development titles, AduBookly streamlines your book search experience with a clean interface and reliable results. Our goal is to make discovering books simple and enjoyable for students, readers, and lifelong learners alike.</p> 
            <p className='fs-17'> <b>your easy and fast book search companion.</b></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
