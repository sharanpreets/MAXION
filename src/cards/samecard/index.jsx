import React from "react";
import './style.css';




const Samecard = ({heading}) => {
    return<>
    <div className="green-background">
        <div className="txt-container">
            <img src="https://assets.website-files.com/649189cd213c45a9d650f194/64928aa1dac5954a7568f1fa_page-banner-icon.png"/>
            <h1>{heading}</h1>
            <p>home / {heading} </p>
        </div>
    </div>
    </>

}
export default Samecard;



