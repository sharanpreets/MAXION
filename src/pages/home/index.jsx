import React, { useState } from "react";
import Background from "../../component/background";
import Navbar from "../../component/navbar";
import Department from "../../component/department";
import Top from "../../component/top";
import Blue from "../../component/blue";
import Our from "../../component/our";
import News from "../../component/news";
import Footer from "../../component/footer";


const Home = () => {

    
    return <>
     <Navbar/>
     <Background/>
     <Department/>
     <Top/>
     <Blue/>
     <Our/>
     <News/>
     <Footer/>
    </>
}
export default Home;