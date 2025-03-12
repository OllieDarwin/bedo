import Footer from "@/components/Footer"
import Header from "@/components/nav/Header"
import { Spotlight } from "@/components/ui/spotlight-new"
import { BadgeCheck, Eye, Newspaper, Shield } from "lucide-react"
import { useNavigate } from "react-router"

function UpdatesPage() {
    const navigate = useNavigate()

    return (
        <>
            <div className="w-full h-[200vh] absolute mx-auto top-0 left-0 overflow-hidden pointer-events-none">
                <Spotlight />
            </div>
            <Header />
            <section className="min-h-screen antialiased overflow-hidden bg-[#030303] relative flex flex-col items-center justify-center">
                <h1 className="text-center text-white text-5xl font-bold">Important updates: A safer & smarter trading experience.</h1>
                <h2 className="text-center text-white text-lg font-semibold mt-4">🔒 We're improving security, transparency and compliance!</h2>
                {/* <p className="text-center text-zinc-500 text-base w-1/2 mt-4">At BEDO Intelligence, your safety and experience matters. Our latest update ensures compliance with all laws surrounding your safety and experience on our platform. This includes greater transparency about our AI systems, along with new protections for our users.</p> */}
                <button className="btn btn-soft bg-zinc-700 hover:bg-zinc-500 border-0 mt-4 text-white" aria-label="Learn More" onClick={() => navigate("/terms-of-service")}>Read the updated ToS</button>
            </section>
            <section className="px-16 flex flex-row items-center justify-center py-16 bg-[#030303]">
                <div className="flex flex-col items-centerw-1/2">
                    <h3 id="features-heading" className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Protecting our Customers</h3>
                    <h2 className="text-white text-2xl font-bold">We're making changes to protect you</h2>
                    <p className="text-zinc-500 text-base mt-4">At BEDO Intelligence, your safety and experience matters. Our latest update ensures compliance with all laws surrounding your safety and experience on our platform. This includes greater transparency about our AI systems, along with new protections for our users.</p>
                </div>
                <img src="images/customers.jpg" alt="Happy customers" className="mx-16 w-[45%]" />
            </section>
            <section className="py-16 md:py-32 px-4 md:px-16 bg-[#030303] flex flex-col items-center justify-center" id="features" role="region" aria-labelledby="features-heading">
                <h3 id="features-heading" className="text-sm md:text-md text-blue-400 text-center uppercase font-medium tracking-widest">What's new</h3>
                <h2 className="text-2xl md:text-3xl font-bold text-center">See an overview of what we've changed</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                    <div className="card" role="article">
                        <div className="card-body justify-center">
                            <h2 className="card-title text-base md:text-lg">
                                <Shield size={18} strokeWidth={2.5} color="white" />
                                Stronger Security
                            </h2>
                            <p className="text-zinc-500 text-sm md:text-[0.9rem]">Your data is safer than ever with enhanced encryption & secure storage.</p>
                        </div>
                    </div>
                    <div className="card" role="article">
                        <div className="card-body justify-center">
                            <h2 className="card-title text-base md:text-lg">
                                <Eye size={18} strokeWidth={2.5} color="white" />
                                More Transparency
                            </h2>
                            <p className="text-zinc-500 text-sm md:text-[0.9rem]">Clearer insights into how our AI models process stock market data.</p>
                        </div>
                    </div>
                    <div className="card" role="article">
                        <div className="card-body justify-center">
                            <h2 className="card-title text-base md:text-lg">
                                <BadgeCheck size={18} strokeWidth={2.5} color="white" />
                                Age Verification
                            </h2>
                            <p className="text-zinc-500 text-sm md:text-[0.9rem]">Users must now verify that they are 18+ before trading.</p>
                        </div>
                    </div>
                    <div className="card" role="article">
                        <div className="card-body justify-center">
                            <h2 className="card-title text-base md:text-lg">
                                <Newspaper size={18} strokeWidth={2.5} color="white" />
                                Preventing Misinformation
                            </h2>
                            <p className="text-zinc-500 text-sm md:text-[0.9rem]">Any fraudulent activities or misleading stock discussions will be monitored & reported.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <section className="py-16 md:py-32 px-4 md:px-16 bg-[#030303] flex flex-col items-center justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Stay Informed</h2>
                    <p className="text-zinc-500 text-base text-center mt-4">For more details on our latest updates, please read our updated Terms of Service or download our comprehensive report.</p>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-6">
                        <button className="btn btn-soft bg-zinc-700 hover:bg-zinc-500 border-0 text-white mx-2" aria-label="Read ToS" onClick={() => navigate("/terms-of-service")}>Read the updated ToS</button>
                        <a href="/docs/updates-to-tos.docx" download className="btn btn-soft bg-zinc-700 hover:bg-zinc-500 border-0 text-white mx-2" aria-label="Download Report">Download the Report</a>
                    </div>
                </section>
            </section>
            <Footer />
        </>
    )
}

export default UpdatesPage