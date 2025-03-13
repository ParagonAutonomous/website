export default function FlightPath() {
    return (
        <section id="flightpath" className=" text-center bg-[#FFFFFF]">
            <h1 className="font-bold  text-2xl text-[#000000]">OUR FLIGHT PATH</h1>
            <div className="grid grid-rows-3 text-[#000000] m-5 mb-0">
                <div className="grid grid-cols-2 gap-3 m-2">
                <div className="bg-[#C0C0C0] rounded-3xl p-3">
                    <h3 className="font-bold text-lg text-[#FF4800]">How does Paragon detect fires?</h3>
                    <p>Our Scouter Pro drone scans vast areas using AI-powered thermal imaging, environmental sensors, and real-time data analysis. It detects heat anomalies, smoke patterns, and temperature spikes, signaling potential fire hazards. Unlike traditional methods that rely on delayed satellite data or human observation, Scouter Pro provides instant alerts, enabling rapid response. With machine learning and predictive analytics, our system continuously improves, enhancing accuracy and efficiency to stop wildfires before they start.</p>
                </div>
                <div className="bg-[#C0C0C0] rounded-3xl p-3">
                    <h3 className="font-bold text-lg text-[#FF4800]">How is Paragon different?</h3>
                    <p>Unlike helicopters, planes, or human teams that require time to mobilize, our drones operate 24/7, providing continuous monitoring and instant response. With a fully autonomous AI-driven mesh network, we detect and suppress fires faster, reducing damage and improving safety.</p>
                </div>
                </div>
                <div className="grid grid-cols-1 bg-[#1E1E1E] rounded-3xl m-5 p-3 text-[#FFFFFF]">
                    <h3 className="font-bold text-lg text-[#FF4800]">Why Paragon?</h3>
                    <p>Wildfires are becoming more frequent and destructive, burning over 10 million acres annually and causing billions in damage. Traditional firefighting is reactive, often responding only after fires have spread. At Paragon, we take a proactive approach, using AI-powered drones for early detection, real-time response, and autonomous suppression to stop fires before they escalate. Our Scouter Pro drone continuously monitors vast areas, detecting fire risks in real-time, while Payload Pro delivers targeted suppression to contain threats before they grow. By integrating cutting-edge AI, automation, and precision deployment, Paragon is reshaping wildfire prevention to protect lives, communities, and ecosystems.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 m-2">
                    <div className="bg-[#C0C0C0] rounded-3xl p-3">
                        <h3 className="font-bold text-lg text-[#FF4800]">What's next?</h3>
                        <p>We are expanding partnerships with fire departments, environmental agencies, and emergency teams to scale autonomous wildfire prevention. With continued innovation, we aim to make AI-driven fire detection and suppression the industry standard, protecting more communities and ecosystems</p>
                    </div>
                    <div className="bg-[#C0C0C0] rounded-3xl p-3">
                        <h3 className="font-bold text-lg text-[#FF4800]">How does suppression work?</h3>
                        <p>Our Payload Pro drone carries up to 15 lbs of fire retardant, deploying it with GPS-guided precision to targeted areas. It autonomously flies to fire zones, releasing suppression agents to contain or extinguish flames before they spread. Unlike traditional aerial firefighting, which requires piloted aircraft and ground crews, Payload Pro operates independently, reaching remote areas faster. Integrated with Scouter Pro’s real-time alerts, it ensures a coordinated response, improving containment. With AI optimization, the system enhances efficiency, making wildfire suppression faster, safer, and more reliable.</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }