import ReactLenis from "lenis/react"
import { useEffect, useState } from "react"
import Hero from "./sections/Hero"
import Header from "@/components/nav/Header"
import Why from "./sections/Why"
import Features from "./sections/Features"
import Testimonials from "./sections/Testimonials"
import Footer from "@/components/Footer"

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
				<Testimonials />
                {/* ADD PRICING / SIGN UP SECTION HERE */}
                <Footer />
			</ReactLenis>
		</>
	)
}

export default LandingPage