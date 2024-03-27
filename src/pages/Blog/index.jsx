import React from "react";
import Navbar from "../../component/navbar";
import News from "../../component/news";
import Footer from "../../component/footer";
import Samecard from "../../cards/samecard";

    
const Blog = () => {
    return <>
    <Navbar/>
    <Samecard heading={"blog"}/>
    <News/>
    <Footer/>

    </>
}
export default Blog;