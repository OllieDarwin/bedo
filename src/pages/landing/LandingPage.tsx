import { useEffect, useState } from "react"
import Hero from "./sections/Hero"
import Header from "@/components/nav/Header"
import Why from "./sections/Why"
import Features from "./sections/Features"
import Testimonials from "./sections/Testimonials"
import Footer from "@/components/Footer"
import TiltedCard from "@/components/TiltedCard/TiltedCard"
import { useNavigate } from "react-router"

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

	const navigate = useNavigate()

	return (
		<>
			<Header />
			<Hero isMobile={isMobile} />
			<Why />
			<Features />
			<section className="bg-[#030303] flex flex-col items-center justify-center" id="cta" role="region" aria-labelledby="cta-heading">
				<h3 id="cta-heading" className="text-sm md:text-md text-blue-400 text-center uppercase font-medium tracking-widest">GET STARTED</h3>
				<h2 className="text-2xl md:text-3xl font-bold text-center">Enhance your trading portfolio now with BEDO Intelligence.</h2>
					<div className="mt-12 flex flex-col items-center justify-center">
					<h2 className="text-zinc-400 text-lg font-medium">14 day free trial</h2>
					<h1 className="text-white text-5xl">£200/mo</h1>
					<h3 className="text-zinc-400 text-base font-medium mt-2 -mb-6 w-4/5 text-center">24/7 coverage, full dashboard access, 1000s of trading personalities.</h3>
					<TiltedCard 
						imageSrc="images/gold.jpg"
						altText="Gold"
						imageHeight={isMobile ? 160 : 200}
						imageWidth={isMobile ? 300 : 300}		
						rotateAmplitude={20}
						scaleOnHover={1.1}	
						showMobileWarning={false}
						showTooltip={false}
						overlayContent={
								<div className="absolute bottom-6 left-8 bg-black/40 px-2 py-1 rounded-lg">
									<h1 className="text-white font-semibold">BEDO Gold</h1>
								</div>
						}	
						displayOverlayContent={true}
					/>
					<button onClick={() => navigate("/how-it-works")} className="btn btn-soft bg-zinc-700 hover:bg-zinc-500 border-0 -mt-4" aria-label="Learn More">Learn More</button>
					</div>
			</section>
			<Testimonials />
			<Footer />
		</>
	)
}

export default LandingPage