import React, { useState } from "react";
import Navbar from "../../component/navbar";
import Our from "../../component/our";
import News from "../../component/news";
import Footer from "../../component/footer";
import Samecard from "../../cards/samecard";



const Course = () => {
      return <>
    <Navbar/>
    <Samecard heading={"about"}/>
     <Our/>
     <News/>
     <Footer/>
    </>
}
export default Course;