import About from "@/components/About/About";
import AvailableCategories from "@/components/Available Categories/AvailableCategories";
import FAQ from "@/components/FAQ/FAQ";
import FeaturedItems from "@/components/Featured Items/FeaturedItems";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <main className="w-11/12 mx-auto min-h-screen">
        <Hero></Hero>
        <About></About>
        <FeaturedItems></FeaturedItems>
        <AvailableCategories></AvailableCategories>
        <WhyChooseUs></WhyChooseUs>
        <FAQ></FAQ>
        <NewsLetter></NewsLetter>
      </main>
    </div>
  );
}
