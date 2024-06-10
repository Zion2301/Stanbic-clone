import React from 'react'
import "./Naira.css"
import Whitebtn from './Whitebtn'

const Naira = (props) => {
  return (
    <>
      <div className="nairadiv">
        <div className="leftNaira">
            <h1 className="nairahead">{props.nairahead}</h1>
            <p className="nairatxt">{props.nairatxt}</p>
            <Whitebtn white = "LEARN MORE"/>
        </div>
        <div className="nairaright">
            <img src={props.enaira} alt="" className='enaira'/>
        </div>
      </div>
    </>
  )
}

export default Naira