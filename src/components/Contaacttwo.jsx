import React from 'react'
import "./Contacttwo.css"

const Contaacttwo = (props) => {
  return (
    <>
      <div className="contacttwo">
        <h1 className="twohead">{props.twohead}</h1>
        <img src={props.playstore} alt="" className='playstore'/>
        <img src={props.application} alt="" className='app'/>
      </div>
    </>
  )
}

export default Contaacttwo