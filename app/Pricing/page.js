'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/Pricing/Hero";
import Cards from "@/components/Pricing/Cards";
import FAQ from "@/components/Pricing/FAQ";

export default function Pricing() {
   return(
    <>
    <div className="mx-6 my-9 md:mx-15 lg:mx-25 md:my-6 ">
    <Navbar/>
    <Hero/>
    <Cards/>
    <FAQ/>
    <Footer/>
    <ScrollToTop/>
    </div>
    </>
   );

}