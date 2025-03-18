// this is where the footer will be implemented 

export default function Footer() {
    return (
        <footer className="bg-gray-800 p-10 z-50 bg-opacity-40 pb-4">
            <ul className="flex justify-center gap-20">
                <p className="font-bold text-[#80B918] text-2xl">PARAGON AUTONOMOUS</p>
                <li className="font-bold">ABOUT
                    <ul className="text-sm text-[#C0C0C0]">
                    <li>VISION</li>
                    <li>IMPACT</li>
                    <li>MISSION</li>
                    <li>WHAT WE DO</li>
                    </ul>
                </li>
                <li className="font-bold">PRODUCTS
                    <ul className="text-sm text-[#C0C0C0]">
                    <li>SCOUTER PRO</li>
                    <li>PAYLOAD PRO</li>
                    </ul>
                </li>
                <li className="font-bold">PARTNERS</li>
                <li className="font-bold">CONTACT
                    <ul className="text-sm text-[#C0C0C0]">
                    <li>X</li>
                    <li>EMAIL</li>
                    <li>LINKEDIN</li>
                    <li>INSTAGRAM</li>
                    </ul>
                </li>
            </ul>
            <div className="text-[#C0C0C0] text-xs text-center mt-5 text-opacity-25 mb-0">ALL RIGHTS RESERVED © 2025 PARAGON AUTONOMOUS LLC.</div>
        </footer>
    );
  }