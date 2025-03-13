import Image from "next/image";
import Wildfireinfo from "./Wildfireinfo";

export default function Homepage() {
    return (
        <section id="home"className="h-screen">
            <h1 className="font-bold  text-2xl m-10 pt-10 text-center">this is the homepage</h1>
            <Wildfireinfo/>
        </section>
    );
  }
