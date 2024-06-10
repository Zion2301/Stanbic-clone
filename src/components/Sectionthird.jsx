import React from 'react'
import "./Sectionthird.css"
import Whitebtn from './Whitebtn'

const Sectionthird = (props) => {
  return (
    <>
      <div className="thirdSection">
        <div className="miniSec">
        <h1 className="governance">{props.governance}</h1>
          <p className="policies">{props.policies}</p>
          <Whitebtn white = "LEARN MORE"/>
        </div>
      </div>
    </>
  )
}

export default Sectionthird