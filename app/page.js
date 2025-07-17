'use client'

import Articles from "@/components/Home/Articles.jsx";
import Hero from "@/components/Home/Hero.jsx";
import Navbar from "@/components/Navbar.jsx";
import FreeTrial from "@/components/Home/FreeTrial.jsx";
import { useState } from "react";
import Insights from "@/components/Home/Insights.jsx";
import WellBeing from "@/components/Home/WellBeing.jsx";
import Footer from "@/components/Footer.jsx";
import ScrollToTop from "@/components/ScrollToTop.jsx";
export default function Home() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
   <>
   <div className="mx-6 my-9 md:mx-15 lg:mx-25 md:my-6 ">
    <Navbar/>
    <Hero activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
    <Articles activeFilter={activeFilter}/>
    <FreeTrial/>
    <Insights/>
    <WellBeing/>
    <Footer/>
    <ScrollToTop/>
   </div>
   </>
  );
}
