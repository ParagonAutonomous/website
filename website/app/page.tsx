import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Partnerships from "./components/Partnerships";
import Products from "./components/Products";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Homepage />
      <AboutUs />
      <Partnerships />
      <Products />
      <Footer />
    </main>
  );
}
