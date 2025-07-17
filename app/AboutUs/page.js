'use client'
import Navbar from "@/components/Navbar";
import Header from "@/components/AboutUs/Header";
import Hero from "@/components/AboutUs/Hero";
import Expertise from "@/components/AboutUs/Expertise";
import Values from "@/components/AboutUs/Values";
import JoinUs from "@/components/AboutUs/JoinUs";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutUs() {
   return(
    <>
    <div className="mx-6 my-9 md:mx-15 lg:mx-25 md:my-6 ">
    <Navbar/>
    <Header/>
    <Hero/>
    <Expertise/>
    <Values/>
    <JoinUs/>
    <Footer/>
    <ScrollToTop/>
    </div>
    </>
   );

}