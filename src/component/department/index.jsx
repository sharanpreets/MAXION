import React from "react";
import './style.css';

const Department = () => {

const info = [{
    img:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d1773c4bf3446b31a2_64918aab8d54aaf0c550fa52_economy.png",
    h2:"economics",
    p:"course: 18",
},
{
    img:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d11371d99bc9c6b69a_64918aab8d54aaf0c550fa55_technology.png",
    h2:"technology",
    p:"course: 14",
},
{
    img:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d14ef774c717603ece_64918aab8d54aaf0c550fa57_science.png",
    h2:"science",
    p:"course: 15",
},
{
    img:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d1f65d6e4dffe52286_64918aab8d54aaf0c550fa4e_research.png",
    h2:"research",
    p:"course: 10",
},
{
    img:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d17abed2b0fd07c6ee_64918aab8d54aaf0c550fa50_medical.png",
    h2:"medical",
    p:"course: 18",
},
{
    img:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d15674f58481d0ce0e_64918aab8d54aaf0c550fa59_maths.png",
    h2:"mathematics",
    p:"course: 10",
},
{
    img:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d024b9a7966e918099_64918aab8d54aaf0c550fa54_marketing.png",
    h2:"marketing",
    p:"course: 06",
},
{
    img:"https://assets.website-files.com/64927699b818c4b9d737f9ad/6492b1d062650c92e2fd1e7f_64918aab8d54aaf0c550fa56_health.png",
    h2:"health & fitness",
    p:"course: 08",
},

]
    return <>
    <div className="set-width">
        <div className="left">
        <h1>Department</h1>
        <p>Provide most popular courses that your want to join and lets start the course for the most simply way in here</p>
        </div>
        <div className="right">
            <a> view all course</a>
        </div>
        </div>   
    <div className="per-container">
        {info.map((value) => {
            return <div className="child">
            <img src={value.img} alt="" />
            <h2>{value.h2}</h2>
            <p>{value.p}</p>
        </div>
         })
        }

    </div>
    
    </>
}
export default Department;