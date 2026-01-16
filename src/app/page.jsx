import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
