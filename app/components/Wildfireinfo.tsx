import GlobalButton from "./GlobalButton";

export default function Wildfireinfo() {
    return (
        <section className="relative max-w-6xl mx-auto px-4">
            <div className="bg-[url('/images/firefighterimg.png')] bg-center bg-cover h-64 w-3/4 text-center rounded-xl shadow-xl p-8 mx-auto">
                {
                    <div className="font-bold mx-auto">
                    <h1 className="text-3xl">Wildfires in the U.S. destroy over 10 MILLION acres of land annually, costing billions in damages.</h1>
                    <p className="text-sm w-3/4 mt-4 mx-auto">Paragon Autonomous is reducing the environmental, social, and financial toll of wildfires. Our drones not only detect fires earlier but also prevent their rapid spread, saving lives and protecting ecosystems. In wildfire-prone areas, our fleet has reduced response times by up to 30%, making communities safer than ever.</p>
                    <GlobalButton />
                    </div>
                }
            </div>
        </section>
    );
  }