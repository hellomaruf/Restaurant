'use client'
import About from "./Components/About";
import BestSellerDishes from "./Components/BestSellerDishes";
import Feedback from "./Components/Feedback";
import Hero from "./Components/Hero";
import NewsAndBlog from "./Components/NewsAndBlog";
import Team from "./Components/Team";
import WhyChooseUs from "./Components/WhyChooseUs";
import Work from "./Components/Work";
import Clients from './Components/Clients';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-in',
    });
  }, []);
  return (
    <div className="">
      <main className="">
        <Hero />
        <About/>
        <WhyChooseUs />
        <BestSellerDishes/>
        <Feedback/>
        <Team/>
        <Work />
        <NewsAndBlog/>
        <Clients/>
      </main>
    </div>
  );
}
