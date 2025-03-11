// this is where the navbar will be implemented 
// interactivity
"use client";
import { useState } from "react";
import Link from 'next/link';
// msin navbar function
export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-40">
            <p className="font-bold text-[#80B918]">PARAGON</p>
            <ul className="flex justify-center gap-10 font-bold">
            <a href="#home">Home</a> 
            <a href="#aboutus">AboutUs</a> 
            <a href="#partnerships">Partnerships</a> 
            <a href="#products">Products</a> 
            </ul>
        </nav>
    );
    // get in touch button end of navbar 
  }
