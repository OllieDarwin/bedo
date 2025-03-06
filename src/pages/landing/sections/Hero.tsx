import { useEffect, useRef } from "react"
import { useNavigate } from "react-router"

interface HeroProps {
    isMobile: boolean
}

function Hero({ isMobile }: HeroProps) {

    const leftColumnRef = useRef<HTMLDivElement>(null)
    const rightColumnRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
		// Only apply scroll animation on non-mobile devices
		if (isMobile) return
		
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
		window.addEventListener('scroll', handleScroll)
		
		// Initial position
		handleScroll()
		
		// Clean up
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [isMobile])

    const navigate = useNavigate()

    return (
        <section className="bg-[#030303] h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden" id="hero" role="banner">
            <div className="px-6 md:pl-16 w-full md:w-1/2 z-20 mt-24 md:mt-16 text-center md:text-left">
                <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Welcome to BEDO Intelligence</h3>
                <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-12">Revolutionising Trading with AI-Powered Intelligence</h1>
                <p className="text-base text-zinc-200 mt-2">Harness the power of artificial intelligence to gain an unmatched edge in trading by utilising real-time analysis of news, trends and market movements.</p>
                <button className="btn btn-soft bg-zinc-700 hover:bg-zinc-500 border-0 mt-4 text-white" aria-label="Learn More" onClick={() => navigate("/how-it-works")}>Learn More</button>
            </div>
            <div className="w-4/5 min-h-full z-10 absolute top-0 right-0 pointer-events-none" id="gradient-overlay" aria-hidden="true"></div>
            {/* Hide cards on mobile, show on larger screens */}
            <div className={`flex-row gap-8 ${isMobile ? 'hidden' : 'flex'}`} aria-hidden="true">
                <div ref={leftColumnRef} className="flex flex-col gap-8 translate-y-32">
                    <img src="cards/1.svg" className="w-40 md:w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="Card 1" />
                    <img src="cards/2.svg" className="w-40 md:w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="Card 2" />
                    <img src="cards/3.svg" className="w-40 md:w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="Card 3" />
                </div>
                <div ref={rightColumnRef} className="flex flex-col gap-8">
                    <img src="cards/4.svg" className="w-40 md:w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="Card 4" />
                    <img src="cards/5.svg" className="w-40 md:w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="Card 5" />
                    <img src="cards/6.svg" className="w-40 md:w-64 grayscale hover:grayscale-0 transition-all duration-300" alt="Card 6" />
                </div>
            </div>
        </section>
    )
}

export default Hero