import React from 'react'
import "./Accountcard.css"
import Button from "./Button"

const Accountcard = (props) => {
  return (
    <>
       <div className="mainCard">
          <div className="tag">{props.tag}</div>
          <img src={props.growimage} alt="" className='grow'/>
          <div className="maincontent">
            <h1 className="savings">{props.savings}</h1>
            <div className="small"></div>
            <p className="moreaccount">{props.moreaccount}</p>
            <div className="compare">
                <div className="leftcompare">
                    <h1 className="savings">{props.no}</h1>
                    <p className="tiny">{props.deposit}</p>
                </div>

                <div className="rightcompare">
                    <h1 className="savings">{props.estimate}</h1>
                    <p className="tiny">{props.interest}</p>
                </div>
            </div>
            <div className="tick">
                <label className='controlcheckbox'>{props.label}
                    <input type="checkbox" className='checkcompare'/>
                    <div className="indicator"></div>
                </label>
            </div>
            <Button button = "OPEN NOW"/>
          </div>
       </div>
    </>
  )
}

export default Accountcard