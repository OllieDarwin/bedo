import ReactLenis from "lenis/react"
import { useEffect, useState } from "react"
import Hero from "./sections/Hero"
import Header from "@/components/nav/Header"
import Why from "./sections/Why"
import Features from "./sections/Features"

function LandingPage() {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		// Check if screen is mobile sized
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}
		
		// Check initially
		checkMobile()
		
		// Add resize listener
		window.addEventListener('resize', checkMobile)
		
		return () => {
			window.removeEventListener('resize', checkMobile)
		}
	}, [])

	return (
		<>
			<ReactLenis root>
				<Header />
                <Hero isMobile={isMobile} />
				<Why />
				<Features />
				<section className="py-12 md:py-16 px-4 md:px-16 bg-zinc-900 flex flex-col justify-center" id="why">
					<div className="w-full md:w-1/2">
						<h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Testimonials</h3>
						<h2 className="text-2xl md:text-3xl font-bold">See what our customers think</h2>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
						<div className="card bg-[#1c1c20] rounded-box">
							<div className="card-body">
								<h2 className="card-title text-lg">I AM A BEDOPHILE</h2>
								<p className="text-sm md:text-base">I absolutely love BEDO I might be the world's biggest BEDOphile!!!</p>
								<div className="flex flex-row items-center mt-4">
									<img src="images/testimonials/gates.jpg" className="w-12 h-12 md:w-16 md:h-16 rounded-full" alt="" />
									<div className="ml-2">
										<h3 className="font-semibold text-sm md:text-base">Bill Gates</h3>
										<h4 className="text-xs md:text-sm">Former CEO of Microsoft</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="card bg-[#1c1c20] rounded-box">
							<div className="card-body">
								<h2 className="card-title text-lg">Worse than China</h2>
								<p className="text-sm md:text-base">BEDO is sooooo bad I have TOO MUCH MONEY!!!</p>
								<div className="flex flex-row items-center mt-4">
									<img src="images/testimonials/trump.png" className="w-12 h-12 md:w-16 md:h-16 rounded-full" alt="" />
									<div className="ml-2">
										<h3 className="font-semibold text-sm md:text-base">Donald Trump</h3>
										<h4 className="text-xs md:text-sm">US President</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="card bg-[#1c1c20] rounded-box">
							<div className="card-body">
								<h2 className="card-title text-lg">Addicted to BEDO</h2>
								<p className="text-sm md:text-base">I sold my house for BEDO :(((</p>
								<div className="flex flex-row items-center mt-4">
									<img src="images/testimonials/pete.jpg" className="w-12 h-12 md:w-16 md:h-16 rounded-full" alt="" />
									<div className="ml-2">
										<h3 className="font-semibold text-sm md:text-base">Church Street Pete</h3>
										<h4 className="text-xs md:text-sm">Recently homeless and unemployed</h4>
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

export default LandingPage