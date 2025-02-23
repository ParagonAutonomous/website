import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Homepage />
      <AboutUs />
      <Footer />
    </main>
  );
}
