import About from "./Components/About";
import Hero from "./Components/Hero";
import Nav from "./Shared/Nav";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <About/>
      </main>
    </div>
  );
}
