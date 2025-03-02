import ReactLenis from "lenis/react"
import { useEffect, useState } from "react"
import Hero from "./sections/Hero"
import Header from "@/components/nav/Header"
import Why from "./sections/Why"
import Features from "./sections/Features"
import Testimonials from "./sections/Testimonials"
import Footer from "@/components/Footer"
import TiltedCard from "@/components/TiltedCard/TiltedCard"

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
				{/* ADD PRICING / SIGN UP SECTION HERE */}
				<section className="bg-[#030303] flex flex-col items-center justify-center" id="cta">
					<h3 className="text-sm md:text-md text-blue-400 text-center uppercase font-medium tracking-widest">GET STARTED</h3>
					<h2 className="text-2xl md:text-3xl font-bold text-center">Enhance your trading portfolio now with BEDO Intelligence.</h2>
					{/* <div className="grid grid-cols-3 px-16 gap-16">
						<TiltedCard 
							imageSrc="images/bronze.jpg"
							altText="Bronze"
							imageHeight={isMobile ? 160 : 200}
							imageWidth={isMobile ? 300 : 300}		
							rotateAmplitude={20}
							scaleOnHover={1.1}	
							showMobileWarning={isMobile}
							showTooltip={false}
							overlayContent={
									<div className="absolute bottom-6 left-8 bg-black/40 px-2 py-1 rounded-lg">
										<h1 className="text-white font-semibold">BEDO Bronze</h1>
									</div>
							}	
							displayOverlayContent={true}
						/>
						<div className="w-min h-min mx-auto relative" id="gold-glow">
							<TiltedCard 
								imageSrc="images/gold.jpg"
								altText="Gold"
								imageHeight={isMobile ? 160 : 200}
								imageWidth={isMobile ? 300 : 300}		
								rotateAmplitude={20}
								scaleOnHover={1.1}	
								showMobileWarning={isMobile}
								showTooltip={false}
								overlayContent={
										<div className="absolute bottom-6 left-8 bg-black/40 px-2 py-1 rounded-lg">
											<h1 className="text-white font-semibold">BEDO Gold</h1>
										</div>
								}	
								displayOverlayContent={true}
							/>
							<h2 className="-translate-y-8 font-semibold text-xl"><span className="text-[#e9a907]">Gold</span> Recommended</h2>
						</div>
						<TiltedCard 
							imageSrc="images/silver.jpg"
							altText="Silver"
							imageHeight={isMobile ? 160 : 200}
							imageWidth={isMobile ? 300 : 300}		
							rotateAmplitude={20}
							scaleOnHover={1.1}	
							showMobileWarning={isMobile}
							showTooltip={false}
							overlayContent={
									<div className="absolute bottom-6 left-8 bg-black/40 px-2 py-1 rounded-lg">
										<h1 className="text-white font-semibold">BEDO Silver</h1>
									</div>
							}	
							displayOverlayContent={true}
						/>
					</div>
					 */}
					 <div className="mt-12 flex flex-col items-center justify-center">
						<h2 className="text-zinc-400 text-lg font-medium">14 day free trial</h2>
						<h1 className="text-white text-5xl">£200/mo</h1>
						<h3 className="text-zinc-400 text-base font-mdeium mt-2 -mb-6 w-4/5 text-center">24/7 coverage, full dashboard access, 1000s of trading personalities.</h3>
						<TiltedCard 
							imageSrc="images/gold.jpg"
							altText="Gold"
							imageHeight={isMobile ? 160 : 200}
							imageWidth={isMobile ? 300 : 300}		
							rotateAmplitude={20}
							scaleOnHover={1.1}	
							showMobileWarning={isMobile}
							showTooltip={false}
							overlayContent={
									<div className="absolute bottom-6 left-8 bg-black/40 px-2 py-1 rounded-lg">
										<h1 className="text-white font-semibold">BEDO Gold</h1>
									</div>
							}	
							displayOverlayContent={true}
						/>
						<button className="btn btn-soft bg-zinc-700 hover:bg-zinc-500 border-0 -mt-4">Get Started</button>
					 </div>
				</section>
				<Testimonials />
                <Footer />
			</ReactLenis>
		</>
	)
}

export default LandingPage