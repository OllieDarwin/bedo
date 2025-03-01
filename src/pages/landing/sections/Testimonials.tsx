const content = [
    {
        id: 1,
        text: "I absolutely love BEDO I might be the world's biggest BEDOphile!!!",
        name: "Bill Gates",
        position: "Former CEO of Microsoft",
        image: "images/testimonials/gates.jpg"
    },
    {
        id: 2,
        text: "BEDO is sooooo bad I have TOO MUCH MONEY!!!",
        name: "Donald Trump",
        position: "US President",
        image: "images/testimonials/trump.png"
    },
    {
        id: 3,
        text: "I sold my house for BEDO :((( ",
        name: "Church Street Pete",
        position: "Recently homeless and unemployed",
        image: "images/testimonials/pete.jpg"
    }
]

function Testimonials() {
    return (
        <section className="py-12 md:py-16 px-4 md:px-16 bg-[#030303] flex flex-col justify-center" id="why">
            <div className="w-full md:w-1/2">
                <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Testimonials</h3>
                <h2 className="text-2xl md:text-3xl font-bold">See what our customers think</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
                {content.map((item) => (
                    <div className="card">
                        <div className="card-body border border-b-0 border-[#1c1c20] rounded-box bg-gradient-to-b from-zinc-950 to-[#030303]">
                            <p className="text-sm md:text-base">{item.text}</p>
                            <div className="flex flex-row items-center mt-4">
                                <img src={item.image} className="w-12 h-12 md:w-16 md:h-16 rounded-full" alt="" />
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