import FAQ from "@/components/FAQ/FAQ";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto min-h-screen">
        <Hero></Hero>
        <WhyChooseUs></WhyChooseUs>
        <FAQ></FAQ>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
