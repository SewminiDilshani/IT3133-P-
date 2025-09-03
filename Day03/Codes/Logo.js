import React from 'react'
import '../CSS/Style.css'

export default function Logo() {
  return (
    <div>
      <img src={require('../Image/images.jpg')} alt='Company logo' className='logo'></img>
    </div>
  )
}
