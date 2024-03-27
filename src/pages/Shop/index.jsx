import React, { useState } from "react";
import Navbar from "../../component/navbar";
import News from "../../component/news";
import Footer from "../../component/footer";
import Samecard from "../../cards/samecard";

const Shop = () => {
      
    return <>
    <Navbar/>
    <Samecard heading={"shop"}/>
    <News/>
    <Footer/>

    </>
}
export default Shop;