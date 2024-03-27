import React from "react";
import './style.css';
const Footer = () => {
    return <>
    <footer>
        <div className="main-box">
            <div className="all-child" id="set">
               <img className="logo" src="https://assets.website-files.com/649189cd213c45a9d650f194/649274769d9c387565201023_logo.png" alt="" />
         <h3>Make better future for <br /> your Career</h3>
         <a href="#"> More weflow Template</a>
            </div>
            <div className="all-child">
                <h2>academic info</h2>
                <li> our professors</li>
                <li> about us</li>
                <li> scholarship</li>
                <li> our courses</li>
                <li> our product</li>
                <li> Admission</li>
            </div>
            <div className="all-child">
                <h2>useful links</h2>
                <li> upcoming Events</li>
                <li> career opportunities</li>
                <li> terms & Regulations</li>
                <li> rules & regulations</li>
                <li> our deoartments</li>
                <li> our blog post</li>
            </div>
            <div className="all-child">
                <h2>contact info</h2>
                <p>512/F, Central Road, Main Town Jackson Heights. New York</p>
                <p>info@admissionexample.com</p>
                <p>www.admissionexample.com</p>
                <h5>+12345 678 910/+12345 678 910</h5>
            </div>
            </div>
    </footer>
    <div className="big-box">
        <p>
        Copyright © Maxion | Designed by Brandbase - Powred by <a> Webflow </a>
        </p>
    </div>
    
    </>
}
export default Footer;