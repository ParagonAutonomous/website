import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Partnerships from "./components/Partnerships";
import Products from "./components/Products";
import EndPage from "./components/EndPage";
// import FlightPath from "./components/FlightPath";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Homepage />
      <Image
        src="/images/waveup.svg"
        alt="wave up"
        layout="responsive"
        width={50}
        height={10}
        />
      <AboutUs />
      {/* <FlightPath /> */}
      <Image
        src="/images/wavedown.svg"
        alt="wave down"
        layout="responsive"
        width={50}
        height={10}
        />
      <Partnerships />
      <Products />
      <EndPage />
      <Footer />
    </main>
  );
}
