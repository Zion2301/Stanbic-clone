import React from 'react'
import "./Rate.css"
import { RiDownloadLine } from "react-icons/ri";


const Rate = (props) => {
  return (
      <>
        <div className="rate">
            <div className="twoNames">
                <p className="firstrate">{props.firstrate}</p>
                <p className="secondrate">{props.secondrate}</p>
            </div>
            <div className="othrs">
            <p className="date">{props.date}</p>
                <p className="download">{props.download}</p>
                <p className="filetype">{props.filetype}</p>
                <RiDownloadLine className='down'/>
            </div>
        </div>
      </>
  )
}

export default Rate