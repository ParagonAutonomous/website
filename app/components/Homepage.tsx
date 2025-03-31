import Image from 'next/image';

export default function Homepage() {
  return (
    <main>
      {/* First Section - Full Screen Background */}
      <section id="home" className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/images/front-image.jpeg"
          alt="Front image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-overlay" />
        <h1 className="relative z-10 text-4xl font-bold text-center">
          A Safer World, Powered By Paragon
        </h1>
      </section>

      {/* Second Section - Scroll Down with Image on the Left */}
      <section className="h-screen flex items-center px-10">
        <div className="w-1/2 flex justify-center">
          <div className="relative h-48 w-48 md:h-96 md:w-96">
            <Image
              src="/images/front-page-fire.png"
              alt="Front page fire"
              layout="fill"
              objectFit="cover"
              className="rounded drop-shadow-[0_0_20px_rgba(191,110,0,0.4)]"
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