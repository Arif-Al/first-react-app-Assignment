import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <div className=' footer'>
    <footer className="container">
  <div className='row'>
<div className='col-5'>  <div className="footer-section ">
      <h2 className="footer-logo my-3">MNTN</h2>
      <p>Get out there & discover your next slope, mountain & destination!</p>
      <p className='mt-5'>Copyright © 2023 MNTN, Inc. Terms & Privacy</p>
    </div></div>
<div className='col-7 d-flex justify-content-between'> <div className="footer-links">
      <div className="footer-column   ">
        <h3>More on The Blog</h3>
        <ul>
          <li>About MNTN</li>
          <li>Contributors & Writers</li>
          <li>Write For Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-column  ">
        <h3>More on MNTN</h3>
        <ul>
          <li>The Team</li>
          <li>Jobs</li>
          <li>Press</li>
        </ul>
      </div>
    </div></div>


  </div>
   
  </footer>
  </div>
);
};

export default Footer;
  
 
