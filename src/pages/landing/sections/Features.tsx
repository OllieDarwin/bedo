import { Bot, ChartLine, Clock, Shield } from "lucide-react"

function Features() {
    return (
        <section className="py-16 md:py-32 px-4 md:px-16 bg-[#030303] flex flex-col items-center justify-center" id="features" role="region" aria-labelledby="features-heading">
            <h3 id="features-heading" className="text-sm md:text-md text-blue-400 text-center uppercase font-medium tracking-widest">Our Features</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-center">Solve all your trading problems with one solution</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                <div className="card" role="article">
                    <div className="card-body justify-center">
                        <h2 className="card-title text-base md:text-lg">
                            <ChartLine size={18} strokeWidth={2.5} color="white" />
                            Market Analysis
                        </h2>
                        <p className="text-zinc-500 text-sm md:text-[0.9rem]">Real-time market analysis using advanced AI algorithms</p>
                    </div>
                </div>
                <div className="card" role="article">
                    <div className="card-body justify-center">
                        <h2 className="card-title text-base md:text-lg">
                            <Shield size={18} strokeWidth={2.5} color="white" />
                            Risk Management
                        </h2>
                        <p className="text-zinc-500 text-sm md:text-[0.9rem]">Sophisticated risk assessment and portfolio protection</p>
                    </div>
                </div>
                <div className="card" role="article">
                    <div className="card-body justify-center">
                        <h2 className="card-title text-base md:text-lg">
                            <Bot size={18} strokeWidth={2.5} color="white" />
                            AI Trading Bots
                        </h2>
                        <p className="text-zinc-500 text-sm md:text-[0.9rem]">Automated trading strategies powered by machine learning</p>
                    </div>
                </div>
                <div className="card" role="article">
                    <div className="card-body justify-center">
                        <h2 className="card-title text-base md:text-lg">
                            <Clock size={18} strokeWidth={2.5} color="white" />
                            24/7 Trading
                        </h2>
                        <p className="text-zinc-500 text-sm md:text-[0.9rem]">Round-the-clock automated trading across global markets</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features