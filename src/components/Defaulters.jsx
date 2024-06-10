import React from 'react'
import "./Defaulters.css"
import Button from "./Button"

const Defaulters = (props) => {
  return (
    <>
      <div className="defaulters">
          <div className="defaultText">
            <h1 className="pta">{props.ptta}</h1>
            <p className="ptatext">{props.ptatext}</p>
          </div>
       <Button button = "SEE DETAILS"/>
      </div>
    </>
  )
}

export default Defaulters