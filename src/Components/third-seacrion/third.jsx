import React from 'react'
import './third.css'
import Img1 from "../images/01.png"
import Img2 from "../images/02.png"
import Img3 from "../images/03.png"
import Number1 from "../images/Equipment.png"
import Number2 from "../images/Equipment1.png"
import Number3 from "../images/Equipment2.png"
import Tagline from "../images/Tagline.png"
import Tagline1 from "../images/Tagline1.png"
import More from "../images/More.png"
import More1 from "../images/More1.png"
import More2 from "../images/More1.png"
import tagline2 from "../images/Tagline2.png"




const Third = () => {
  return (
    <div className='bg-color text-white'>

      <div className=" container b-5">
      <div className="row justify-content-center align-items-center mb-5 position-relative">
        <div className="col-12 col-md-6">
        <img className='Tagline' style={{width:'200px'}} src={Tagline} alt="" />
          <h1 className='display-4 fw-bold my-4'>What level of  hiker are you?</h1>
          <p className='fs-5 mb-5'>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
          <img style={{width:'200px'}} src={ More} className='img-fluid' alt="" />
        </div>
        <div className="col-12 col-md-6 mb-5">
          <img className='img-fluid position-absolute position-img w-25' src={Img1} alt="" />
                <img  className='img-fluid number-no-1' src={Number1} alt="" /> 
        </div>

        </div>
      </div>
    
      <div className=" container my-5 position-relative">
      <div className="row justify-content-center align-items-center py-5 ">
      <div className="col-12 col-md-6">
          <img  className='img-fluid w-50 ms-5' src={Img2} alt="" />
        </div>
        <div className="col-12 col-md-6">
        <img style={{width:'200px'}} className='img-fluid number-no-2'  src={Number2} alt="" />
        <img style={{width:'300px'}} className='img-fluid'  src={Tagline1} alt="" />
        
          <h1 className='display-2  '>Picking the right Hiking Gear!</h1>
          <p className='fs-5'>The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
          Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
       <img src={More2} alt="" />
        </div>
       
      </div>
    
      </div>
      <div className=" container position-relative">
      <div className="row justify-content-center align-items-center py-5 ">
        <div className="col-12 col-md-6">
        <img src={tagline2} alt="" />
          <h1 className='display-2 my-4 '>Understand Your Map & Timing</h1>
          <p className='fs-5'>Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? </p>
       <img src={More2} alt="" />
        </div>
        <div className="col-12 col-md-6">
          <img  className='img-fluid w-50 ms-5' src={Img3} alt="" />
        </div>
      </div>
      <img style={{width:'200px'}} className='img-fluid number-no-3'  src={Number3} alt="" />
      </div>
      </div>
  )
}

export default Third
