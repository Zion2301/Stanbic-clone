import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Firstnavbar from "./components/Firstnavbar"
import nigeria from "./assets/nigeria.png"
import Secnavbar from './components/Secnavbar'
 import  Sectionone  from "./components/Sectionone";
 import Card from "./components/Card"
 import SectionTwo from "./components/sectionTwo"
 import Sectionthird from "./components/Sectionthird"
 import Accountcard from './components/Accountcard'
 import plant from "./assets/plant.jpg"
 import Bigcards from "./components/Bigcards"
 import afro from "./assets/afro.jpg"
 import laptop from "./assets/laptop.jpg"
 import smile from "./assets/smile.jpg"
 import phones from "./assets/phones.jpg"
 import child from "./assets/child.jpg"
 import phonelaptop from "./assets/phonelaptop.jpg"
 import tea from "./assets/tea.jpg"
 import lean from "./assets/lean.jpg"
 import Rate from "./components/Rate"
 import Naira from "./components/Naira"
 import eNaira from "./assets/eNaira.png"
 import Thecard from "./components/Thecard"
 import Defaulters from './components/Defaulters'
 import Firstcontact from './components/Firstcontact'
 import Contaacttwo from './components/Contaacttwo'
 import screenshot from "./assets/screenshot.png"
 import app from "./assets/app.png"
 import Footer from './components/Footer'
 import real from "./assets/real.png"
 import update from "./assets/update.jpg"
 import { BsFillHouseDoorFill } from "react-icons/bs";
 import { VscPercentage } from "react-icons/vsc";
 import { GoShieldCheck } from "react-icons/go";
 import { FaMoneyBills } from "react-icons/fa6";
 import { FaCar } from "react-icons/fa";
 import { GrTasks } from "react-icons/gr";
 import { CiSearch } from "react-icons/ci";
 import { IoPersonOutline } from "react-icons/io5";

function App() {
  return (
    <>
      <Firstnavbar personal = "Personal" business = "Business" corporate = "Corporate and Investment" about = "About Us" contact = "Contact Us" image = {nigeria} country = "Nigeria"/> 
      <Secnavbar bank = "Stanbic IBTC Bank" products = "Products and Services" ways = "Ways to Bank" news = "News" faq = "FAQs" terms = "Product Terms and Conditions" sign = "Sign into your accounts" image = {real} Icon = {CiSearch} Icons = {IoPersonOutline}/>
      <Sectionone head = "Update your Account with your NIN and BVN"  describe = "The CBN nad mandated that all accounts without BVN and/or the NIN would not be able to carry out transactions." Myimage = {update}/>

      <div className="mainGrid">
         <Card card = "I want to open a savings account" Icon = {BsFillHouseDoorFill}/>
         <Card card = "I need instant loan with EZ ash" Icon = {VscPercentage}/>
         <Card card = "I need to use Internet Banking" Icon = {GoShieldCheck}/>
         <Card card = "I need to access up to 80% of my mutual funds as loan" Icon = {FaMoneyBills}/>
         <Card card = "I need to buy a car" Icon = {FaCar}/>
         <Card card = "I need to complete service requests on my account with Quick Services" Icon = {GrTasks}/>
      </div>
      <SectionTwo solution = "Want solutions that suits your lifestyle?" moreText = "Spend and Manage your money the way you want"/>
      <Sectionthird governance = "Corporate Governance" policies = "Get to know more about our values and governance practices."/>
      <Accountcard tag = "Most Popular" growimage = {plant} savings = "Personal Savings Account" moreaccount = "Open a personal savings account that allows you to transact and shop for what you want today, while saving and earning interest for tomorrow." no = "NO" deposit = "Opening Deposit" estimate = "7.425%" interest = "Interest rate" label = "Add to Compare"/>
      <section className="cards">
        <h1 className="solution">Solutions tailored to your needs</h1>

        <div className="grid">
        <Bigcards plant = {plant} thehead = "Personal Savings Account" about = "Our personal savings account allows you to transact and shop for what you want today, while saving and earning interest for tomorrow" tell = "TELL ME MORE"/>

<Bigcards plant = {afro} thehead = "Smart Loan" about = "Smart Loan gives you up to N20M, if you have mutual funds investment with Stanbic IBTC Asset Management, a subsidiary of Stanbic IBTC Holdings. The loan can be accessed via the Stanbic IBTC Mobile App with no paperwork required" tell = "TELL ME MORE"/>

<Bigcards plant = {laptop} thehead = "MaxYield Account" about = "Accelerate your savings with the option of partial withdrawals for emergencies along the way" tell = "TELL ME MORE"/>

<Bigcards plant = {smile} thehead = "Agent Banking" about = "At Stanbic IBTC Bank, we are committed to driving Africa’s growth and one of the ways we are doing this is by meeting the lifestyle needs of the underbanked and the unbanked while empowering businesses in our communities to provide financial services to them." tell = "TELL ME MORE"/>

<Bigcards plant = {phones} thehead = "HYCA Gold" about = "A personal account for professionals on the move, the HYCA Gold account gives you the features of a current account with the benefits of a savings account" tell = "TELL ME MORE"/>

<Bigcards plant = {child} thehead = "CHESS Account" about = "The flexible CHESS account makes every Naira count for you and your child." tell = "TELL ME MORE"/>

<Bigcards plant = {phonelaptop} thehead = "SMS Banking" about = "Introducing 3S Banking! Our 3S banking enables you to access our financial services by sending SMS to 30909 from your registered phone number with the Stanbic IBTC." tell = "TELL ME MORE"/>

<Bigcards plant = {tea} thehead = "Domiciliary Account" about = "Doing business with the world is a lot easier with our Domiciliary Account. Maintain an account in the world’s major currencies with the ease and comfort of banking in Naira" tell = "TELL ME MORE"/>

<Bigcards plant = {lean} thehead = "Vehicle and Asset Finance" about = "Our Vehicle and Asset Finance (VAF) for Retail Clients is designed for salary earners who are desirous of acquiring cars (new and pre-owned), diesel and gas-powered generators, solar-powered inverters, electronics and home appliances." tell = "TELL ME MORE"/>
        </div>
      </section>

      <section className="rateguides">
        <div className="headers">
          <h1 className="ratehead">Stanbic IBTC Rate Guides</h1>
          <a href="" className="view">VIEW ALL</a>
        </div>
        <Rate firstrate = "Stanbic IBTC Bank Weekly Lending Rate Guide" secondrate = "Stanbic IBTC Bank Weekly Lending Rate Guide for 03 to 07 June 2024" download = "14KB" filetype = "XLXS"/>
        <Rate firstrate = "Stanbic IBTC Bank Currency Exchange Rate Guide 07 June 2024" secondrate = "Daily Exchange Rate Guide for Stanbic IBTC Bank" download = "35KB" filetype = "XLXS"/>
      </section>
      <Naira nairahead = "Receive, spend and send money without any charges from your eNaira wallet." nairatxt = "eNaira is a digital currency that utilises block chain technology. It is issued by the Central Bank of Nigeria (CBN) and has the same value as the fiat Naira. It is guarantees secure, faster and more convenience transactions." enaira = {eNaira}/>

      <section className="threecards">
        <h1 className="latest">Latest News</h1>
        <div className="thecards">
           <Thecard tinycard = "24 Apr 2024"  cardhead = "Stanbic IBTC Bank launches all-in-one Super App for"  resttext = "Stanbic IBTC Bank, one of Nigeria's leading financial institutions, unveiled its latest upgrade to its Stanbic IBTC Super App" read = "READ MORE"/>

           <Thecard tinycard = "15 Aug 2024"  cardhead = "Stanbic IBTC promotes Africa-China Trade with Expo"  resttext = "With the 2022 Stanbic IBTC African-China Expo, the bank is set to further strengthen and promote businesses between African" read = "READ MORE"/>

           <Thecard tinycard = "8 Jul 2024"  cardhead = "Seven Months of Rewarding Customers"  resttext = "In a bid to keep inspiring Nigerians to develop a healthy savings culture, Stanbic IBTC Bank, a subsidiary of Stanbic IBTC" read = "READ MORE"/>
        </div>
      </section>

      <Defaulters ptta = "PTA AND BTA FX DEFAULTERS" ptatext = "We are required by Central Bank of Nigeria (CBN) regulations to publish names and BVN of PTA and BTA FX defaulters. The customers listed here cancelled their trip and failed to return the FX availed to them despite several mails, text messages and follow up phone calls."/>

      <section className="rateguides">
        <div className="headers">
          <h1 className="ratehead">Downloads</h1>
        </div>
        <Rate firstrate = "Stanbic IBTC Bank 2024 Pricing Guide"  download = "277KB" filetype = "PDF"/>
        <Rate firstrate = "Stanbic IBTC Bank Branches"  download = "103KB" filetype = "PDF"/>
        <Rate firstrate = "FAQs on the CBN's removal of FOREX restrctions on 43 items" date = "2023-10-24" download = "149KB" filetype = "PDF"/>
        <Rate firstrate = "Price Verification System (PVS) Update" date = "2023-08-30" download = "1MB" filetype = "PDF"/>
        <Rate firstrate = "Q and A on the New I and E Window" secondrate = "Questions and Answers relating to the CBN's new Investors' and Exporters' (I and E) Window for Foreign Exchange Transactions" date = "2023-06-17" download = "7.27MB" filetype = "PDF"/>
        <Rate firstrate = "Stanbic IBTC Bank Whistleblowing Policy" date = "2024-04-02" download = "301KB" filetype = "PDF"/>
        <Rate firstrate = "CBN Press Briefing on Issuance of New Naira Notes" secondrate = "Central Bank of Nigeria (CBN) press release on new naira notes that will be in circulation from 15 December, 2022" date = "2022-10-26" download = "160KB" filetype = "PDF"/>
        <Rate firstrate = "Individual Account Opening Form" secondrate = "Required to upgrade a Savings account via Quick Services" date = "2021-06-16" download = "910KB" filetype = "PDF"/>
        <Rate firstrate = "Approved Documents for Invisible FX Transactions" secondrate = "Required documentation for processing Outward Telegraphic FX transfers also known as Invisible Transactions" date = "2021-06-13" download = "218KB" filetype = "PDF"/>
        <Rate firstrate = "FORM A NCX AUTOMATION"  date = "2021-11-30" download = "2MB" filetype = "PDF"/>
        <Rate firstrate = "Guideline on RT200 Non-Export Proceeds Repatriation Rebate Scheme" date = "2022-02-25" download = "218KB" filetype = "FINAL.PDF"/>
      </section>

      <Defaulters ptta = "Media Page" ptatext = "To view or download our logo's for media purposes, financial reports and service charter." />
 
      <Firstcontact  enquiry = "General Enquiries" little = "Local" numbers = "0201 2709 676 or 0201 4222 222" intl = "International" number = "+234 700 909 9099" email = "EMAIL" emailaddress = "CustomerCareNigeria@stanbicibtc.com" report = "Report Unethical Behaviour" newnumbers = "0201 422 7777 or 0201 271 7739" newnumber = "+27 31571 5459" newemailaddress = "whistleblowingline@tip-offs.com" whitelink = "Click here for more information about reporting unethical behaviour" get = "Get to know us" investor = "Investor relations" who = "Who are we" getnew = "Careers"  oppurtunities = "View oppurtunities" feedback = "We need your feedback" complaint = "Got a compliment or complain?"/>

      <Contaacttwo twohead = "Stanbic IBTC Bank App" playstore = {screenshot}  application = {app}/>
      <Footer disclaim = "Disclaimer" terms = "Terms and Conditions" private = "Privacy & Security Statement" cookies = "Manage Cookies"  footmessage = "Stanbic IBTC Bank, a member of the Standard Bank Group, an authorised financial services and registered credit provider is licensed by the Central Bank of Nigeria. RC125097."/>
    </>
  )
}

export default App
