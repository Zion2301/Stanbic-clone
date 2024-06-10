import React from 'react'
import "./Firstcontact.css"
import "./Button"
import Button from './Button'

const Firstcontact = (props) => {
  return (
    <>
      <div className="maincontact">
          <div className="leftcontact">
            <div className="top">
            <h1 className="enquiry">{props.enquiry}</h1>
            <div className="local">
                <p className="little">{props.little}</p>
                <p className="numbers">{props.numbers}</p>
            </div>

            <div className="local">
                <p className="little">{props.intl}</p>
                <p className="numbers">{props.number}</p>
            </div>

            <div className="local">
                <p className="little">{props.email}</p>
                <p className="numbers">{props.emailaddress}</p>
            </div>
            </div>


<div className="bottom">
<h1 className="enquiry">{props.report}</h1>
            <div className="local">
                <p className="little">{props.little}</p>
                <p className="numbers">{props.newnumbers}</p>
            </div>

            <div className="local">
                <p className="little">{props.intl}</p>
                <p className="numbers">{props.newnumber}</p>
            </div>

            <div className="local">
                <p className="little">{props.email}</p>
                <p className="numbers">{props.newemailaddress}</p>
            </div>
               <div className="whitelinkdiv">
               <a href="" className="whitelink">{props.whitelink}</a>
               </div>
</div>
          </div>

          <div className="rightcontact">
            <div className="firstright">
                <h1 className="get">{props.get}</h1>
                <a href="" className="investor">{props.investor}</a>
                <a href="" className="investor">{props.who}</a>
            </div>

            <div className="firstright">
                <h1 className="get">{props.getnew}</h1>
                <a href="" className="investor">{props.oppurtunities}</a>
            </div>

            <div className="firstright">
                <h1 className="get">{props.feedback}</h1>
                <p className="complaint">{props.complaint}</p>
                 <Button button = "LET US KNOW"/>
            </div>
          </div>
      </div>
    </>
  )
}

export default Firstcontact