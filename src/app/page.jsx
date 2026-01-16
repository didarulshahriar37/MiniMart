import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto min-h-screen">
        <Hero></Hero>
        <About></About>
        <WhyChooseUs></WhyChooseUs>
        <FAQ></FAQ>
        <NewsLetter></NewsLetter>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
