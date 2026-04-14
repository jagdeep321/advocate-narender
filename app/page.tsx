import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import PracticeAreas from "./Components/Practice";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <PracticeAreas/>
   <Contact/>
   <Footer/>
   </>
  );
}
