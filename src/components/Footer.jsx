import React from 'react'
import "./Footer.css"
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="leftfooter">
            <div className="footlinks">
                <a href="" className="disclaimer">{props.disclaim}</a>
                <a href="" className="disclaimer">{props.terms}</a>
                <a href="" className="disclaimer">{props.private}</a>
                <a href="" className="disclaimer">{props.cookies}</a>
            </div>
            <p className="footmessage">{props.footmessage}</p>
        </div>

        <div className="rightside">
            <TfiFacebook className='social'/>
            <FaInstagram className='social'/>
            <RiLinkedinFill className='social'/>
            <FaXTwitter className='social'/>
            <FaYoutube className='social'/>
        </div>
      </div>
    </>
  )
}

export default Footer