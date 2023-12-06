import React from "react"
import style from "./FAQBody.module.css"
import minus from '../images/icon-minus.svg'
import plus from '../images/icon-plus.svg'

const FAQBody = (props) => {
  return (
    <div className={style.container}>
        <h1 className={style.header}>FAQs</h1>
        <ul className={style.FAQlist}>
        <li>What is Frontend Mentor, and how will it help me?
        <img style={{width:"20px",float:"right"}} src={minus} alt={minus}/>
        </li>
        </ul>
        <p>Frontend mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML,CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
       <ul className={style.FAQlist}>
        <li>Is Frontend Mentor free?
        <img style={{width:"20px",float:"right"}} src={plus} alt={plus}/>
        </li>
        <hr></hr>
        <li>Can I use Frontend Mentor projects in my portfolio?
        <img style={{width:"20px", float:"right" }} src={plus} alt={plus}/>
        </li>
        <hr></hr>
        <li>How can I get help if i'm stuck on a challenge?
        <img style={{width:"20px", float:"right"}} src={plus} alt={plus}/>
        </li>
        <hr></hr>
       </ul>
    </div>
  )
};

export default FAQBody;
