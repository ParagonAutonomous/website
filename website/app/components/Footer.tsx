// this is where the footer will be implemented 

export default function Footer() {
    return (
        <footer className="bg-gray-800 p-10 z-50 bg-opacity-40">
            <p className="text-[#80B918]">PARAGON AUTONOMOUS</p>
            <ul className="flex justify-center gap-10">
                <li>ABOUT
                    <ul className="text-sm">
                    <li>VISION</li>
                    <li>IMPACT</li>
                    <li>MISSION</li>
                    <li>WHAT WE DO</li>
                    </ul>
                </li>
                <li>PRODUCTS
                    <ul>
                    <li>SCOUTER PRO</li>
                    <li>PAYLOAD PRO</li>
                    </ul>
                </li>
                <li>PARTNERS</li>
                <li>CONTACT
                    <ul>
                    <li>X</li>
                    <li>EMAIL</li>
                    <li>LINKEDIN</li>
                    <li>INSTAGRAM</li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
  }