import React from 'react'
import "./Bigcards.css"

const Bigcards = (props) => {
  return (
     <>
        <div className="maincard">
            <img src={props.plant} alt="" className='plantimage'/>
            <div className="content">
                <div className="toptwo">
                <h1 className="thehead">{props.thehead}</h1>
                <p className="about">{props.about}</p>
                </div>
                <a href="" className="tell">{props.tell}</a>
            </div>
        </div>
     </>
  )
}

export default Bigcards