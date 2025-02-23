// this is where the navbar will be implemented 
// interactivity
"use client";
import { useState } from "react";
import Link from 'next/link';
// msin navbar function
export default function Navbar() {
    return (
        // logo 
        <nav className="flex justify-center gap-10 font-bold">
            <Link href="#home">Home</Link>
            <Link href="#about">About Us</Link>
            <Link href="#partnerships">Partnerships</Link>
            <Link href="#products">Products</Link>
        </nav>
        // get in touch button
    );
  }
