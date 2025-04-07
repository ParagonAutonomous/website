// import Image from 'next/image';

export default function AboutUs() {
  return (
    <div id="full-container" className="bg-white select-none font-inter text-black p-2" >
      <h1 className="text-center text-6xl pb-20 pt-10 font-black">ABOUT PARAGON</h1>
      
      <div className="flex items-start">
        <div className="ml-[10%] w-[50%] p-2 relative" id="info">
          <p className="text-3xl">
            At <span className="text-[#FF4800] font-bold ">Paragon Autonomous</span>, we empower communities with cutting-edge drone technology designed to detect and suppress wildfires before they escalate. Our mission is to aid first responders by protecting lives, homes, and wildlife.
          </p>
          <h3 className="text-left text-5xl pt-10 pb-10 font-inter font-black">OUR VISION</h3>
          <p className="text-3xl">We envision a world where destructive wildfires are detected and stopped before they start.</p>
          <p className="text-3xl">Driven by our values of innovation, collaboration, and environmental protection, we're redefining how the world fights wildfires.</p>
          <div className="flex justify-between">
          <button className="bg-[#80B918] text-black rounded-md px-6 py-2 mt-2 font-inter text-3xl font-black border-4 border-transparent transition-colors duration-300  hover:bg-white hover:text-gray-500 hover:border-[#80B918]">Learn More</button>

          <button className="bg-white text-gray-500 rounded-md px-6 py-2 mt-2 font-inter text-3xl font-black border-4 border-[#80B918] transition-colors duration-300  hover:bg-[#80B918] hover:text-black hover:border-transparent">Get in Touch</button>
          </div>
        </div>
        <div className="ml-16 relative w-[20%]">
      <img
        src="images/aboutusimg.jpeg"
        alt="Nada"
        className="object-cover rounded-3xl drop-shadow-[10px_10px_8px_#6ea0a1]"
      />
    </div>

      </div>
      
      <div id="flight-path" className="flex flex-wrap justify-center select-none mt-4 text-center p-6">
  <h1 className="text-6xl p-6 w-full font-black">OUR FLIGHT PATH</h1>

  <div className="group rounded-3xl w-[50%] min-w-[300px] p-6 bg-[#D9D9D9] transition-all duration-300 hover:bg-gray-800 m-4 drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)] hover:drop-shadow-[0_15px_20px_rgba(0,0,0,0.9)]">
  <h1 className="text-[#FF4800] text-5xl"><b>How does Paragon detect fires?</b></h1>
  <br />
  <p className="text-2xl transition-colors duration-300 group-hover:text-white">
    Our Scouter Pro drone scans vast areas using AI-powered thermal imaging, environmental sensors, and real-time data analysis. 
    It detects heat anomalies, smoke patterns, and temperature spikes, signaling potential fire hazards. 
    Unlike traditional methods that rely on delayed satellite data or human observation, Scouter Pro provides instant alerts, 
    enabling rapid response. With machine learning and predictive analytics, our system continuously improves, 
    enhancing accuracy and efficiency to stop wildfires before they start.
  </p>
</div>


  <div className="group rounded-3xl w-[40%] min-w-[250px] p-6 bg-[#D9D9D9] transition-colors duration-300 hover:bg-gray-800 m-4 drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)] hover:drop-shadow-[0_15px_20px_rgba(0,0,0,0.9)]">
    <h1 className="text-[#FF4800] text-5xl"><b>How is Paragon Different?</b></h1>
    <br />
    <p className="text-2xl transition-colors duration-300 group-hover:text-white">
    Unlike helicopters, planes, or human teams that require time to mobilize, our drones operate 24/7, providing continuous monitoring and instant response. With a fully autonomous AI-driven mesh network, we detect and suppress fires faster, reducing damage and improving safety.</p>
  </div>

  <div className="group rounded-3xl w-[80%] min-w-[300px] p-6 bg-[#D9D9D9] transition-colors duration-300 hover:bg-gray-800 m-4 drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)] hover:drop-shadow-[0_15px_20px_rgba(0,0,0,0.9)]">
    <h1 className="text-[#FF4800] text-5xl"><b>Why Paragon?</b></h1>
    <br />
    <p className="text-2xl transition-colors duration-300 group-hover:text-white">
    Wildfires are becoming more frequent and destructive, burning over 10 million acres annually and causing billions in damage. Traditional firefighting is reactive, often responding only after fires have spread. At Paragon, we take a proactive approach, using AI-powered drones for early detection, real-time response, and autonomous suppression to stop fires before they escalate. Our Scouter Pro drone continuously monitors vast areas, detecting fire risks in real-time, while Payload Pro delivers targeted suppression to contain threats before they grow. By integrating cutting-edge AI, automation, and precision deployment, Paragon is reshaping wildfire prevention to protect lives, communities, and ecosystems.</p>
  </div>

  <div className="group rounded-3xl w-[45%] min-w-[300px] p-6 bg-[#D9D9D9] transition-colors duration-300 hover:bg-gray-800 m-4 drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)] hover:drop-shadow-[0_15px_20px_rgba(0,0,0,0.9)]">
    <h1 className="text-[#FF4800] text-5xl"><b>What's Next?</b></h1>
    <br />
    <p className="text-2xl transition-colors duration-300 group-hover:text-white">
    We are expanding partnerships with fire departments, environmental agencies, and emergency teams to scale autonomous wildfire prevention. With continued innovation, we aim to make AI-driven fire detection and suppression the industry standard, protecting more communities and ecosystems.</p>
  </div>

  <div className="group rounded-3xl w-[45%] min-w-[300px] p-6 bg-[#D9D9D9] transition-colors duration-300 hover:bg-gray-800 m-4 drop-shadow-[0_10px_15px_rgba(0,0,0,0.7)] hover:drop-shadow-[0_15px_20px_rgba(0,0,0,0.9)]">
    <h1 className="text-[#FF4800] text-5xl"><b>How does Suppression Work?</b></h1>
    <br />
    <p className="text-2xl transition-colors duration-300 group-hover:text-white">
    Our Payload Pro drone carries up to 15 lbs of fire retardant, deploying it with GPS-guided precision to targeted areas. It autonomously flies to fire zones, releasing suppression agents to contain or extinguish flames before they spread. Unlike traditional aerial firefighting, which requires piloted aircraft and ground crews, Payload Pro operates independently, reaching remote areas faster. Integrated with Scouter Pro’s real-time alerts, it ensures a coordinated response, improving containment. With AI optimization, the system enhances efficiency, making wildfire suppression faster, safer, and more reliable.</p>
  </div>
</div>
    </div>
  );
}
