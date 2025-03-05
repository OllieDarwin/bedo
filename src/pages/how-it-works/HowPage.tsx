import Footer from "@/components/Footer"
import Header from "@/components/nav/Header"

function HowPage() {
    return (
        <>
            <Header/>
            <section className="bg-[#030303] h-screen flex flex-col items-center justify-center px-16">
                <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest text-center">How it Works</h3>
                <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-12 text-center">What do we do?</h1>
                <p className="text-base text-zinc-200 mt-4 w-3/5 text-center">We at BEDO Intelligence employ sophisticated artificial intelligence to trade stocks in real-time on the basis of the latest news, market sentiment, and analytics.</p>                
            </section>
            <section className="grid grid-cols-2 bg-[#030303]" id="steps">
                <div className="aspect-square border-t border-r border-zinc-800 p-16 flex flex-col justify-center">
                    <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Collecting Data</h3>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-12">Scan the Internet for useful data</h1>
                    <p className="text-base text-zinc-200 mt-4">Our AI scans thousands of news sources, social media platforms and financial reports to gather real-time information on market trends, stock performance, and economic shifts.</p>                
                </div>
                <div className="aspect-square border-t border-zinc-800">
                    <img src="images/steps/research.svg" alt="Social media research" className="w-full max-h-full" />
                </div>
                {/* NEW ROW */}
                <div className="aspect-square border-t border-r border-zinc-800 p-8">
                    <img src="images/steps/processing.svg" alt="AI language processing" className="w-full max-h-full" />
                </div>
                <div className="aspect-square border-t border-zinc-800 p-16 flex flex-col justify-center">
                    <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Analysing Market Sediment</h3>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-12">Processing data to recognise trends</h1>
                    <p className="text-base text-zinc-200 mt-4">Using our proprietary Natural Language Processing (NLP) and machine learning algorithms, BEDO Intelligence works out how the latest news affects stock prices. By identifying patterns in market reactions, we gain critical insight into future market movements.</p>                
                </div>
                {/* NEW ROW */}
                <div className="aspect-square border-t border-r border-zinc-800 p-16 flex flex-col justify-center">
                    <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Predicting Stock Trends</h3>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-12">Understanding how the market might move</h1>
                    <p className="text-base text-zinc-200 mt-4">Our predictive models analyse historical and real-time data to forecast stock behaviour. This allows us to anticipate price fluctuations before they occur and get our foot in the door.</p>                
                </div>
                <div className="aspect-square border-t border-zinc-800 p-8">
                    <img src="images/steps/market.svg" alt="Market fluctuations" className="w-full max-h-full" />
                </div>
                {/* NEW ROW */}
                <div className="aspect-square border-t border-r border-zinc-800">
                    <img src="images/steps/trades.svg" alt="Trade history page" className="w-full max-h-full" />
                </div>
                <div className="aspect-square border-t border-zinc-800 p-16 flex flex-col justify-center">
                    <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Executing Trades Automatically</h3>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-12">Getting your foot in the door right away</h1>
                    <p className="text-base text-zinc-200 mt-4">When an opportunity arises, our AI executes buy and sell orders with precision and speed, much faster than human traders. By minimising emotional decision-making and maximising data-driven strategy, we increase the potential for profitable trades.</p>                
                </div>
                {/* NEW ROW */}
                <div className="aspect-square border-y border-r border-zinc-800 p-16 flex flex-col justify-center">
                    <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Continuous Learning & Adaptation</h3>
                    <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-12">Constantly Improving our algorithms</h1>
                    <p className="text-base text-zinc-200 mt-4">We know we're not perfect, and the stock market is constanty changing. By constantly refining our algorithms and adapting to new market conditions, BEDO Intelligence stays ahead of the curve.</p>                
                </div>
                <div className="aspect-square border-y border-zinc-800">
                    <img src="images/steps/nn.svg" alt="Neural network diagram" className="w-full h-full object-cover" />
                </div>
            </section>
            <Footer />
        </>
    )
}   

export default HowPage