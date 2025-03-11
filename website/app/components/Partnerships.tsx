export default function Partnerships() {
    return (
        <section id="partnerships" className="h-screen text-center">
            <h1 className="font-bold  text-2xl m-10 pt-20">PARTNERSHIPS</h1>
            <div className="m-10">
                <h2 className="font-bold">Partnering with Leaders in Fire Safety</h2>
                <p className="text-center">Paragon Autonomous collaborates with fire departments, environmental agencies, and industry leaders to build a future where wildfires are detected and suppressed even before they spread.</p>
            </div>
            <h2 className="font-bold text-large m-5">WHO WE WORK WITH </h2>
            <div className="grid grid-cols-3 gap-4 m-5">
                <div className="bg-[#1E1E1E] rounded-lg p-3">
                    <h2 className="font-semibold text-[#FF4800] p-2">Fire Departments & First Responders</h2>
                    <p>Our autonomous drone network provides real-time situational awareness and helps fire crews respond faster, safer, and smarter</p>
                </div>
                <div className="bg-[#1E1E1E] rounded-lg p-3">
                    <h2 className="font-semibold text-[#FF4800] p-2">Environmental Protection Agencies</h2>
                    <p>By Integrating drone-based fire monitoring, we help organizations protect ecosystems, reduce carbon emissions and prevent habitual destruction.</p>
                </div>
                <div className="bg-[#1E1E1E] rounded-lg p-3">
                    <h2 className="font-semibold text-[#FF4800] p-2">Industry & Research Partners</h2>
                    <p>We Collaborate with fire safety leaders, AI developers, and research institutions to advance wildfire detection technology and optimize fire suppression methods</p>
                </div>
            </div>
            <p className="text">"Drone have given us an aerial perspective we never had before- allowing for early detection and smarter resource allocation." - Wildfire Conservation Specialist, Arizona</p>
            <p>Partner with us button</p>
        </section>
    );
  }