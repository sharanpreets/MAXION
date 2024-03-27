import React from "react";
import './style.css';

const Top = () =>{
    const photo = [
        {pic:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4c1b45c012e440f7fe8_64918aab8d54aaf0c550f9f9_course-grid-twelve.jpeg" ,
        h6:"#art & desing",
        h4:"Advanced Drawing & amp; Sketch System",
        a:"Duration: 4 years",
        a2:" Rating:4.9",
        span:"Fee: $3500", },
        {pic:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4c0f65d6e4dffe88578_64918aab8d54aaf0c550f998_course-grid-eight.jpeg" ,
        h6:"#biology",
        h4:"Advanced Drawing & amp; Sketch System",
        a:"Duration: 4 years",
        a2:" Rating:4.9",
        span:"Fee: $3500", },
        {pic:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4c01db1ae634e2994eb_64918aab8d54aaf0c550f9cd_course-grid-7.jpeg" ,
        h6:"#diploma",
        h4:"Advanced Drawing & amp; Sketch System",
        a:"Duration: 4 years",
        a2:" Rating:4.9",
        span:"Fee: $3500", },
        {pic:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b4c024b9a7966e9527e1_64918aab8d54aaf0c550f962_course-grid-seven.jpeg" ,
        h6:"#economics",
        h4:"Advanced Drawing & amp; Sketch System",
        a:"Duration: 4 years",
        a2:" Rating:4.9",
        span:"Fee: $3500", },
]
    return <> <div className="back-color">
         <h1> top notch courses</h1>
        <p>Provide most popular courses that your want to join and lets start the course for the most simply way in here</p>

    <div className="set-child">
        {photo.map((value) => {
            return <div className="box">
            <img src={value.pic} alt=""/>
            <div className="text">
            <h6>{value.h6} </h6>
            <h4>{value.h4}</h4>
            <div className="aling">
             <a href="#">{value.a}</a>
              <span>{value.span}</span> 
             </div>
             <hr></hr>
             <div className="aling2">
         <a href='#'>{value.a2}</a> <span>Details</span>
             </div>
             </div>
        </div>
        })}
    </div>
    </div>
    </>
}
export default Top;