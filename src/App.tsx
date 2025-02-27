import { BadgeDollarSign, ChartLine, Cpu } from "lucide-react"
import Noise from "./components/Noise/Noise"
import ReactLenis from "lenis/react"

// TODO: Add light mode.

function App() {
	return (
		<>
			<ReactLenis root>
				<section className="bg-zinc-950	 h-screen flex flex-col items-center justify-center" id="hero">
					<div className="w-full h-screen absolute top-0 left-0 pointer-events-none">
						<Noise />
					</div>
					<h3 className="text-md text-blue-400 text-center uppercase font-medium tracking-widest">Welcome to BEDO Intelligence</h3>
					<h1 className="text-5xl font-bold mt-2">AI-Powered Trading</h1>
					<h1 className="text-5xl font-bold mt-2">Intelligence</h1>
					<p className="text-lg text-zinc-400 mt-6 text-center">Advanced algorithmic trading solutions powered by artificial intelligence for <br /> institutional and retail investors.</p>
					<button className="btn btn-soft bg-zinc-700 hover:bg-zinc-500 border-0 mt-4">Get Started</button>
				</section>
				<section className="py-16 px-64 bg-zinc-900 flex flex-col items-center justify-center" id="why">
					<h3 className="text-md text-blue-400 text-center uppercase font-medium tracking-widest">Why Choose BEDO</h3>
					<h2 className="text-3xl font-bold text-center">Take your emotion out of the equation</h2>
					<div className="grid grid-cols-3 gap-16 py-8">
						<div className="card bg-[#1c1c20]">
							<figure className="mt-8">
								<ChartLine size={64} />
							</figure>
							<div className="card-body justify-center items-center">
								<h2 className="card-title text-center">Advanced Analytics</h2>
								<p className="text-zinc-400 text-center">Our AI-powered platform provides real-time market analysis and predictive insighhts to help you make informed trading decisions.</p>
							</div>
						</div>
						<div className="card bg-[#1c1c20]">
							<figure className="mt-8">
								<Cpu size={64} />
							</figure>
							<div className="card-body justify-center items-center">
								<h2 className="card-title text-center">Smart Automation</h2>
								<p className="text-zinc-400 text-center">Let our intelligent algorithms handle your trading strategy execution and focus on what matters most.</p>
							</div>
						</div>
						<div className="card bg-[#1c1c20]">
							<figure className="mt-8">
								<BadgeDollarSign size={64} />
							</figure>
							<div className="card-body justify-center items-center">
								<h2 className="card-title text-center">Customisable Decision Making</h2>
								<p className="text-zinc-400 text-center">Select from a variety of trading "personalities" to customise your trading bot and ensure we make the best decision for you.</p>
							</div>
						</div>
					</div>
				</section>
			</ReactLenis>
		</>
	)
}

export default App
