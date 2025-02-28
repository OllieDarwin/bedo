import { BadgeDollarSign, Bot, ChartLine, Clock, Cpu, Shield } from "lucide-react"
import ReactLenis from "lenis/react"
import { useEffect, useRef } from "react"

function App() {
	const leftColumnRef = useRef<HTMLDivElement>(null);
	const rightColumnRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!leftColumnRef.current || !rightColumnRef.current) return
			
			// Get scroll position
			const scrollY = window.scrollY
			
			// Calculate translation values - adjust the divisor to control animation speed
			const translateLeftY = 32 - (scrollY / 3) // Starting at translate-y-32 and moving up
			const translateRightY = 0 + (scrollY / 3) // Starting at 0 and moving down
			
			// Apply transformations
			leftColumnRef.current.style.transform = `translateY(${translateLeftY * 0.97}px) translateX(${translateLeftY * 0.26}px) rotate(-15deg)`
			rightColumnRef.current.style.transform = `translateY(${translateRightY * 0.97}px)translateX(${translateLeftY * -0.26}px) rotate(-15deg)`
		}

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);
		
		// Initial position
		handleScroll();
		
		// Clean up
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<ReactLenis root>
				<section className="bg-[#030303] h-screen flex flex-row items-center justify-between overflow-hidden" id="hero">
					<div className="pl-16 w-1/2 z-20">
						<h3 className="text-md text-blue-400 uppercase font-medium tracking-widest">Welcome to BEDO Intelligence</h3>
						<h1 className="text-5xl font-bold mt-2">AI-Powered Trading</h1>
						<h1 className="text-5xl font-bold mt-2">Intelligence</h1>
						<p className="text-lg text-zinc-200 mt-6">Advanced algorithmic trading solutions powered by artificial intelligence for institutional and retail investors.</p>
						<button className="btn btn-soft bg-zinc-700 hover:bg-zinc-500 border-0 mt-4">Get Started</button>
					</div>
					<div className="w-3/5 h-screen z-10 absolute top-0 right-0 pointer-events-none" id="gradient-overlay"></div>
					<div className="flex flex-row gap-8">
						<div ref={leftColumnRef} className="flex flex-col gap-8 translate-y-32">
							<img src="cards/1.svg" className="w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="" />
							<img src="cards/2.svg" className="w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="" />
							<img src="cards/3.svg" className="w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="" />
						</div>
						<div ref={rightColumnRef} className="flex flex-col gap-8">
							<img src="cards/4.svg" className="w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="" />
							<img src="cards/5.svg" className="w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="" />
							<img src="cards/6.svg" className="w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="" />
						</div>
					</div>
				</section>
				<section className="py-16 px-16 bg-zinc-900 flex flex-col items-center justify-center" id="why">
					<h3 className="text-md text-blue-400 text-center uppercase font-medium tracking-widest">Why Choose BEDO</h3>
					<h2 className="text-3xl font-bold text-center">Take your emotion out of the equation</h2>
					<div className="grid grid-cols-3 gap-16 pt-8">
						<div className="card bg-[#1c1c20]">
							<figure className="mt-8">
								<ChartLine size={64} />
							</figure>
							<div className="card-body justify-center items-center">
								<h2 className="card-title text-center">Advanced Analytics</h2>
								<p className="text-zinc-200 text-center">Our AI-powered platform provides real-time market analysis and predictive insighhts to help you make informed trading decisions.</p>
							</div>
						</div>
						<div className="card bg-[#1c1c20]">
							<figure className="mt-8">
								<Cpu size={64} />
							</figure>
							<div className="card-body justify-center items-center">
								<h2 className="card-title text-center">Smart Automation</h2>
								<p className="text-zinc-200 text-center">Let our intelligent algorithms handle your trading strategy execution and focus on what matters most.</p>
							</div>
						</div>
						<div className="card bg-[#1c1c20]">
							<figure className="mt-8">
								<BadgeDollarSign size={64} />
							</figure>
							<div className="card-body justify-center items-center">
								<h2 className="card-title text-center">Customisable Decision Making</h2>
								<p className="text-zinc-200 text-center">Select from a variety of trading "personalities" to customise your trading bot and ensure we make the best decision for you.</p>
							</div>
						</div>
					</div>
				</section>
				<section className="py-16 px-16 bg-[#141416] flex flex-col items-center justify-center" id="why">
					<h3 className="text-md text-blue-400 text-center uppercase font-medium tracking-widest">Our Features</h3>
					<h2 className="text-3xl font-bold text-center">Solve all your trading problems with one solution</h2>
					<div className="grid grid-cols-4 gap-16 pt-8">
						<div className="card outline-[#1c1c20] outline-2">
							<div className="card-body justify-center">
								<h2 className="card-title">
								<div className="bg-zinc-900 rounded-md p-2">
								 <ChartLine size={18} strokeWidth={2.5} color="#2b2b30" />
								</div>
								Market Analysis
								</h2>
								<p className="text-zinc-200">Real-time market analysis using advanced AI algorithms</p>
							</div>
						</div>
						<div className="card outline-[#1c1c20] outline-2">
							<div className="card-body justify-center">
								<h2 className="card-title">
								<div className="bg-zinc-900 rounded-md p-2">
								 <Shield size={18} strokeWidth={2.5} color="#2b2b30" />
								</div>
								Risk Management
								</h2>
								<p className="text-zinc-200">Sophisticated risk assessment and portfolio protection</p>
							</div>
						</div>
						<div className="card outline-[#1c1c20] outline-2">
							<div className="card-body justify-center">
								<h2 className="card-title">
								<div className="bg-zinc-900 rounded-md p-2">
								 <Bot size={18} strokeWidth={2.5} color="#2b2b30" />
								</div>
								AI Trading Bots
								</h2>
								<p className="text-zinc-200">Automated trading strategies powered by machine learning</p>
							</div>
						</div>
						<div className="card outline-[#1c1c20] outline-2">
							<div className="card-body justify-center">
								<h2 className="card-title">
								<div className="bg-zinc-900 rounded-md p-2">
								 <Clock size={18} strokeWidth={2.5} color="#2b2b30" />
								</div>
								24/7 Trading
								</h2>
								<p className="text-zinc-200">Round-the-clock automated trading across global markets</p>
							</div>
						</div>
					</div>
				</section>
				<section className="py-16 px-16 bg-zinc-900 flex flex-col justify-center" id="why">
					<div className="w-1/2">
						<h3 className="text-md text-blue-400 uppercase font-medium tracking-widest">Testimonials</h3>
						<h2 className="text-3xl font-bold">See what our customers think</h2>
					</div>
					<div className="grid grid-cols-3 mt-8 gap-4">
						<div className="card bg-[#1c1c20] rounded-box">
							<div className="card-body">
								<h2 className="card-title text-lg">I AM A BEDOPHILE</h2>
								<p className="text-base">I absolutely love BEDO I might be the world's biggest BEDOphile!!!</p>
								<div className="flex flex-row items-center mt-4">
									<img src="images/testimonials/gates.jpg" className="w-16 h-16 rounded-full" alt="" />
									<div className="ml-2">
										<h3 className="font-semibold">Bill Gates</h3>
										<h4>Former CEO of Microsoft</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="card bg-[#1c1c20] rounded-box">
							<div className="card-body">
								<h2 className="card-title text-lg">Worse than China</h2>
								<p className="text-base">BEDO is sooooo bad I have TOO MUCH MONEY!!!</p>
								<div className="flex flex-row items-center mt-4">
									<img src="images/testimonials/trump.png" className="w-16 h-16 rounded-full" alt="" />
									<div className="ml-2">
										<h3 className="font-semibold">Donald Trump</h3>
										<h4>US President</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="card bg-[#1c1c20] rounded-box">
							<div className="card-body">
								<h2 className="card-title text-lg">Addicted to BEDO</h2>
								<p className="text-base">I sold my house for BEDO :(((</p>
								<div className="flex flex-row items-center mt-4">
									<img src="images/testimonials/pete.jpg" className="w-16 h-16 rounded-full" alt="" />
									<div className="ml-2">
										<h3 className="font-semibold">Church Street Pete</h3>
										<h4>Recently homeless and unemployed</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</ReactLenis>
		</>
	)
}

export default App