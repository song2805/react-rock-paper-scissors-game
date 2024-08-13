import React from 'react'

const Box = (props) => {
    console.log(props)
  return (
    <div className='game-box'>
        <h1>{props.title}</h1>
        <img src={props.value && props.value.img } alt="image"/>
        <h2>Win</h2>      
    </div>
  )
}

export default Box
