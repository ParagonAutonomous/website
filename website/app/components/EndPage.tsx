export default function EndPage() {
    return (
        <section id="endpage" className="h-screen text-center">
            <h1 className="font-bold  text-2xl m-10 pt-10 text-center">The Paragon Advantage</h1>
            <p>With Scouter Pro and Payload Pro working together in a fully autonomous, AI-driven mesh network, Paragon Autonomous provides a proactive solution to wildfire prevention and containment. Faster detection and smarter suppression mean fewer lost homes, safer communities, and a healthier planet.</p>
            <p className="p-4">Want to see our drones in action? Schedule a Demo today.</p>
            <div className="grid grid-cols-2 bg-[#1E1E1E] rounded-lg p-10">
                <div>
                    <h3>Keep up to date with Paragon News</h3>
                    <p>Subscribe to Updates from Paragon Autonomous about articles, events and offers. You can unsubscribe at any time.</p>
                </div>
                <div className="grid-rows-2">
                <form>
                    <div>
                    <label>First Name
                    <input type="text"></input>
                    </label>
                    <label>Last Name
                    <input type="text"></input>
                    </label>
                    </div>
                    <div>
                    <label>Email Address*
                    <input type="email"></input>
                    </label>
                    </div>
                    <button >Sign Up</button>
                </form>
                </div>
            </div>
        </section>
    );
  }