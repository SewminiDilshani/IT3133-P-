import React from 'react'
import '../CSS/Style.css'

export default function Footer(props) {
  return (
    //<div style={{backgroundColor:'yellow',height:'100px'}}>
    <div className='footerbg'>
      <h1 className={props.year}>Footer</h1>
    </div>
  )
}
