import About from "./Components/About";
import BestSellerDishes from "./Components/BestSellerDishes";
import Feedback from "./Components/Feedback";
import Hero from "./Components/Hero";
import WhyChooseUs from "./Components/WhyChooseUs";
import Nav from "./Shared/Nav";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <About/>
        <WhyChooseUs />
        <BestSellerDishes/>
        <Feedback/>
      </main>
    </div>
  );
}
