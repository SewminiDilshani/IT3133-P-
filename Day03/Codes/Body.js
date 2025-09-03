import React from 'react'

export default function Body(props) {
    const bgstyle = {
        backgroundColor: 'blue',
        height: '400px'
    }

  return (
      //<div style={{backgroundColor:'gray',height:'400px'}}>
    <div style={bgstyle}>
      {/*<h1>Body</h1>*/}
      <h1 className='body'>{props.content}</h1>
      <h2>{props.title}</h2>
    </div>
  )
}
