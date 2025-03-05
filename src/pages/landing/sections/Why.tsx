import { useState } from "react"

function Why() {
    const [selected, setSelected] = useState<"analytics" | "automation" | "personalities">("analytics")

    return (
        <section className="py-12 md:py-16 px-4 md:px-16 bg-[#030303] flex flex-col items-center justify-center" id="why" role="region" aria-labelledby="why-heading">
            <h3 id="why-heading" className="text-sm md:text-md text-blue-400 text-center uppercase font-medium tracking-widest">Why Choose BEDO</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-center">Take your emotion out of the equation</h2>
            <div className="w-4/5 mx-auto mt-8" id="vignette" role="img" aria-label="Selected feature illustration">
                {selected === "analytics" && <img src="images/graphics/market-analysis.svg" className="w-full h-full opacity-80" alt="Market Analysis" />}
                {selected === "automation" && <img src="images/graphics/automation.svg" className="w-full h-full opacity-80" alt="Automation" />}
                {selected === "personalities" && <img src="images/graphics/personalities.svg" className="w-full h-full opacity-80" alt="Customisable AI" />}
            </div>
            <div className="grid grid-cols-3 mt-8 gap-4">
                <button onClick={() => setSelected("analytics")} className={`px-8 py-2 border-white cursor-pointer ${selected === "analytics" ? "border-t-2 text-white" : "text-zinc-400"}`} aria-pressed={selected === "analytics"}>Advanced Analytics</button>
                <button onClick={() => setSelected("automation")} className={`px-8 py-2 border-white cursor-pointer ${selected === "automation" ? "border-t-2 text-white" : "text-zinc-400"}`} aria-pressed={selected === "automation"}>Smart Automation</button>
                <button onClick={() => setSelected("personalities")} className={`px-8 py-2 border-white cursor-pointer ${selected === "personalities" ? "border-t-2 text-white" : "text-zinc-400"}`} aria-pressed={selected === "personalities"}>Customisable AI</button>
            </div>
            <h2 className="text-zinc-400 text-md mt-8 w-1/2 text-center">
                {selected === "analytics" && "Our AI-powered platform provides real-time market analysis and predictive insights to help you make informed trading decisions."}
                {selected === "automation" && "Let our intelligent algorithms handle your trading strategy execution and focus on what matters most."}
                {selected === "personalities" && "Select from a variety of trading \"personalities\" to customise your trading bot and ensure we make the best decision for you."}
            </h2>
        </section>
    )
}

export default Why