import React from 'react'
import "./Secnavbar.css";

const Secnavbar = (props) => {
  return (
    <>
      <div className="navbarTwo">
        <div className="logoNav">
            <img src={props.image} alt="" className='logo'/>
            <h1 className="logoName">{props.bank}</h1>
        </div>
        <div className="links">
                <a href="" className="products">{props.products}</a>
                <a href="" className="products">{props.ways}</a>
                <a href="" className="products">{props.news}</a>
                <a href="" className="products">{props.faq}</a>
                <a href="" className="products">{props.terms}</a>
               
            </div>
            {props.Icon && <props.Icon className="search" />}
            <div className="signDiv">
            {props.Icons && <props.Icons className="man" />}
                <p className="sign">{props.sign}</p>
            </div>
      </div>
    </>
  )
}

export default Secnavbar