'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/Contacts/Hero";
export default function Contacts() {
   return(
    <>
    <div className="mx-6 my-9 md:mx-15 lg:mx-25 md:my-6">
    <Navbar/>
    <Hero/>
    <ScrollToTop/> 
    </div>
    </>
   );

}