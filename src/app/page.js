import About from "./Components/About";
import BestSellerDishes from "./Components/BestSellerDishes";
import Feedback from "./Components/Feedback";
import Hero from "./Components/Hero";
import NewsAndBlog from "./Components/NewsAndBlog";
import Team from "./Components/Team";
import WhyChooseUs from "./Components/WhyChooseUs";
import Work from "./Components/Work";
import Clients from './Components/Clients';


export default function Home() {
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
