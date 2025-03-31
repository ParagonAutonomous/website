import GlobalButton from "./GlobalButton";
// import scouterimg from '../../public/images/scouter.png'
// import payloadimg from '../../public/images/payload.png'
import Image from 'next/image';
export default function Products() {
    return (
        <div id="products" className="h-auto">
            <h1 className="font-bold  text-2xl m-10 pt-20 text-center">OUR PRODUCTS</h1>
            <div className="grid grid-cols-2">
                {/* Scouter drone image */}
            <Image width={600} height={600} src="/comingSoon" alt='COMING SOON' />
            <div className="mt-5 mb-5">
                <h2 className="font-bold text-2xl">SCOUTER PRO</h2>
                <p className="p-2">Scouter Pro is an AI-powered aerial surveillance drone designed for early wildfire detection and real-time risk assessment. Equipped with thermal imaging, environmental sensors, and high-definition optical cameras, it continuously scans large areas for signs of fire before they spread. The drone operates autonomously, communicating through Paragon’s mesh network to relay critical fire data to the nearest Payload Drone and emergency responders.</p>
                <p className="font-bold p-2 pt-0">With Scouter Pro, wildfires can be detected before they escalate, reducing environmental damage and saving lives.</p>
                <GlobalButton />
            </div>
            </div>
            <div className="grid grid-cols-2">
            {/* Payload drone image */}
            <Image width={600} height={600} src='/comingSoon' alt='COMING SOON' />
            <div>
                <h2 className="font-bold text-2xl">PAYLOAD PRO</h2>
                <p className="p-2">Payload Pro is an advanced fire suppression drone capable of carrying and deploying up to 15 lbs of fire retardant with GPS-guided precision. Designed to work alongside Scouter Pro, it responds to fire alerts by autonomously flying to the fire’s location and delivering targeted suppression, preventing small fires from becoming uncontrollable disasters.</p>
                <p className="font-bold p-2 pt-0">Payload Pro is the frontline defense against fast-spreading wildfires, ensuring rapid containment and maximum efficiency in fire suppression</p>
                <GlobalButton />
            </div>
            </div>
        </div>
    );
  }