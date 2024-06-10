import React from 'react'
import "./Firstnavbar.css"

const Firstnavbar = (props) => {
  return (
    <>
      <div className="navbar">
        <div className="leftLinks">
            <div className="morespecial">
            <a href="" className="special">{props.personal}</a>
            </div>
           <a href="" className="other">{props.business}</a>
           <a href="" className="other">{props.corporate}</a>
        </div>

        <div className="secondLinks">
            <a href="" className="other">{props.about}</a>
            <a href="" className="other">{props.contact}</a>
            <div className="miniDiv">
                <img src={props.image} alt="" className='image'/>
                <a href="" className="other">{props.country}</a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Firstnavbar