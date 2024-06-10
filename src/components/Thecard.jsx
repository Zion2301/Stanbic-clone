import React from 'react'
import "./Thecard.css"

const Thecard = (props) => {
  return (
     <>
      <div className="thecard">
        <div className="uppercard">
        <p className="tinycard">{props.tinycard}</p>
        <h1 className="cardhead">{props.cardhead}</h1>
        <p className="resttext">{props.resttext}</p>
        </div>
        <a href="" className="read">{props.read}</a>
      </div>
     </>
  )
}

export default Thecard