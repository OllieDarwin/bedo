const content = [
    {
        id: 1,
        text: "BEDO Intelligence has completely transformed my trading strategy. The AI analyzes news and predicts stock movements with amazing accuracy. I’ve seen great returns without spending hours on research. Highly recommend!",
        name: "Mark",
        position: "Experienced Trader",
        image: "images/testimonials/mark.jpg"
    },
    {
        id: 2,
        text: "The AI’s real-time market analysis is impressive, and I’ve made smart trades using its insights. I just wish there were more customization options for risk management. Overall, a solid platform!",
        name: "Sarah",
        position: "Casual Investor",
        image: "images/testimonials/sarah.jpg"
    },
    {
        id: 3,
        text: "I was hesitant to start investing, but BEDO Intelligence made it so easy. The AI handles everything, from analyzing news to executing trades, and I’ve already made profits within my first month!",
        name: "James",
        position: "First-Time Investor",
        image: "images/testimonials/james.jpg"
    }
]

function Testimonials() {
    return (
        <section className="py-12 md:py-16 px-4 md:px-16 bg-[#030303] flex flex-col justify-center" id="testimonials" role="region" aria-labelledby="testimonials-heading">
            <div className="w-full md:w-1/2">
                <h3 id="testimonials-heading" className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Testimonials</h3>
                <h2 className="text-2xl md:text-3xl font-bold">See what our customers think</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {content.map((item) => (
                    <div className="card" role="article" key={item.id}>
                        <div className="card-body border border-b-0 border-[#1c1c20] rounded-box bg-gradient-to-b from-zinc-950 to-[#030303]">
                            <p className="text-sm md:text-base">{item.text}</p>
                            <div className="flex flex-row items-center mt-4">
                                <img src={item.image} className="w-12 h-12 md:w-16 md:h-16 rounded-full" alt={`Photo of ${item.name}`} />
                                <div className="ml-2">
                                    <h3 className="font-semibold text-sm md:text-base">{item.name}</h3>
                                    <h4 className="text-xs md:text-sm">{item.position}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials