import React from 'react'
import "./Sectionone.css"
import Button from "./Button";

const Sectionone = (props) => {
  return (
     <>
       <div className="sectionone">
         <div className="leftSection">
            <h1 className="head">{props.head}</h1>
            <p className='describe'>{props.describe}</p>
            <Button button = "CLICK HERE TO UPDATE"/>
         </div>
         <div className="imageDiv">
            <img src={props.Myimage} alt="" className='imageman'/>
         </div>
       </div>
     </>
  )
}

export default Sectionone