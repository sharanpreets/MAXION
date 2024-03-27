import React from "react";
import Navbar from "../../component/navbar";
import News from "../../component/news";
import Footer from "../../component/footer";
import Samecard from "../../cards/samecard";

const Page = () => {
    return <>
    <Navbar/>
    <Samecard heading={"page"}/>
    <News/>
    <Footer/>
    </>
}
export default Page;