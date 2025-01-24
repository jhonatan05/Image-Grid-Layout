import React from 'react'
import './Container.scss'
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
import img5 from '../assets/image5.jpg'
import img6 from '../assets/image6.png'

const Container = () => {
  return (
    <div className="container">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
    </div>
  )
}

export default Container
