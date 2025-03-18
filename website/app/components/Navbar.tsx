'use client';
import { useState } from "react";
import ContactUs from "./ContactUs"; // adjust the import path as needed

export default function Navbar() {
  const [showContact, setShowContact] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-40 p-4 z-50">
        <ul className="flex font-bold justify-center gap-10">
          <li className="text-[#80B918]">PARAGON</li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#aboutus">AboutUs</a>
          </li>
          <li>
            <a href="#partnerships">Partnerships</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <button onClick={() => setShowContact(true)}>Get In Touch</button>
          </li>
        </ul>
      </nav>

      {showContact && (
        <div className="fixed top-0 left-0 right-0 z-40 flex justify-center items-start pointer-events-auto">
          {/* mt-16 pushes the modal below the navbar */}
          <div className="mt-16">
            <ContactUs onClose={() => setShowContact(false)} widthClass="max-w-4xl" />
          </div>
        </div>
      )}
    </>
  );
}