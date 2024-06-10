import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
     <>
       <div className="eachCard">
        {props.Icon && <props.Icon className="cardicon"/>}
         <p className='text'>{props.card}</p>
       </div>
     </>
  )
}

export default Card