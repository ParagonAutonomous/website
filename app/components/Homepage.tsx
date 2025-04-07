// import Image from 'next/image';
export default function Homepage() {
  return (
    <main>
      {/* First Section - Full Screen Background */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-white"
      >
        {/* Image container with gradient overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src='/images/front-image.jpeg'
            alt="Front image"
            className="w-full h-full object-cover"
          />
          {/* Bottom-aligned gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent pointer-events-none" />
        </div>
        
        <h1 className="relative z-10 text-7xl font-bold text-center px-4 font-inter">
          A Safer World, Powered By Paragon
        </h1>
      </section>

      {/* Second Section - Scroll Down with Image on the Left */}
      <section className="h-screen flex items-center px-10">
        <div className="w-1/2 flex justify-center">
          <div className="relative w-[90%]">
            <img
              src="images/front-page-fire.png"
              alt="Front page fire"
              className="rounded drop-shadow-[0_0_20px_rgba(191,110,0,0.4)] object-cover"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold text-center">
            Wildfires in the U.S. destroyed over 8 MILLION acres of land in 2024, costing billions in damages
          </h2>
          <p className="mt-4 text-lg text-white text-center">
            We leverage cutting-edge drone technology to prevent wildfires before they start.
          </p>
        </div>
      </section>
    </main>
  );
}