export default function EndPage() {
    return (
        <section id="endpage" className="h-screen">
            <div className="w-3/4 text-center rounded-xl shadow-xl p-4 mx-auto">
                <h1 className="font-bold text-4xl text-center mb-5">The Paragon Advantage</h1>
                <p className="text-xl">With Scouter Pro and Payload Pro working together in a fully autonomous, AI-driven mesh network, Paragon Autonomous provides a proactive solution to wildfire prevention and containment. Faster detection and smarter suppression mean fewer lost homes, safer communities, and a healthier planet.</p>
                <p className="p-4 text-xl mb-20">Want to see our drones in action? Schedule a Demo today.</p>
            </div>
            <div className="grid grid-cols-2 bg-gradient-to-r from-[#FFF200] to-[#FF4800] rounded-3xl p-4 ml-20 mr-20">
                <div className="text-black">
                    <h3 className="font-bold text-3xl">Keep up to date with Paragon News</h3>
                    <p className="text-sm w-3/4">Subscribe to Updates from Paragon Autonomous about articles, events and offers. You can unsubscribe at any time.</p>
                </div>
                <div className="grid-rows-2 text-black">
                <form className="w-full p-2 text-black">
                    <div>
                        <input type="text" placeholder="First Name" className="bg-transparent border-b-2 mr-6"></input>
                        <input type="text" placeholder="Last Name" className="bg-transparent border-b-2"></input>
                    </div>
                    <div>
                        <input type="email" placeholder="Email Address* " className="bg-transparent border-b-2"></input>
                    </div>
                    <div>
                        <button className="font-bold text-white bg-black p-1 pl-4 pr-4 m-2 rounded-lg">SIGN UP</button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    );
  }