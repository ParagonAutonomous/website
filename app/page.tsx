'use client';
import { useRef, useState } from "react";
import Image from "next/image";
import ContactUs from "./components/ContactUs";
import Homepage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Partnerships from "./components/Partnerships";
import Products from "./components/Products";
import EndPage from "./components/EndPage";

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const partnershipsRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* Navbar integrated directly */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-40 p-4 z-50 backdrop-blur-sm">
        <ul className="flex font-bold justify-center text-lg gap-10 items-center">
          <li className="text-[#80B918] text-2xl mr-8">PARAGON</li>
          <li>
            <button 
              onClick={() => scrollToSection(homeRef)}
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-gray-300 transition-colors"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection(partnershipsRef)}
              className="hover:text-gray-300 transition-colors"
            >
              Partnerships
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection(productsRef)}
              className="hover:text-gray-300 transition-colors"
            >
              Products
            </button>
          </li>
          <li className="ml-8">
            <button 
              onClick={() => setShowContact(true)}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#FFF200] to-[#FF4800] hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </button>
          </li>
        </ul>
      </nav>

      {/* Sections with scroll refs and spacing */}
      <section ref={homeRef} className="scroll-mt-24">
        <Homepage />
      </section>

      <section ref={aboutRef} className="scroll-mt-24">
      <img
        src="images/waveup.svg"
        alt="wave up"
        className="relative w-full h-auto"
      />
        <AboutUs />
      </section>

      <img
        src="images/wavedown.svg"
        alt="wave down"
        className="w-full h-auto"
        height={10}
      />

      <section ref={partnershipsRef} className="scroll-mt-24">
        <Partnerships />
      </section>

      <section ref={productsRef} className="scroll-mt-24">
        <Products />
      </section>

      <EndPage />
      <Footer />

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center">
          <ContactUs 
            onClose={() => setShowContact(false)} 
            widthClass="max-w-4xl w-full"
          />
        </div>
      )}
    </main>
  );
}