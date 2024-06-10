import React from 'react'
import "./SectionTwo.css"
import "./Button"
import Button from './Button'
import { FaMoneyBills } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import { PiDesktopTowerBold } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";


const sectionTwo = (props) => {
  return (
    <>
     <div className="sectionTwo">
        <div className="leftSide">
            <h2 className="solutions">{props.solution}</h2>
            <p className="under">{props.moreText}</p>
            <Button button = "TELL ME MORE"/>
        </div>

        <div className="rightSide">
            <div className="eachDiv">
                <GoShieldCheck className='bills'/>
                <p className="innerTxt">Banking App</p>
            </div>
            <div className="eachDiv">
                <PiDesktopTowerBold className='bills'/>
                <p className="innerTxt">Internet Banking</p>
            </div>
            <div className="eachDiv">
                <CiCreditCard1 className='bills'/>
                <p className="innerTxt">See all debit cards</p>
            </div>
            <div className="eachDiv">
            <FaMoneyBills className='bills'/>
                <p className="innerTxt">See all credit cards</p>
            </div>
        </div>
     </div>
    </>
  )
}

export default sectionTwo