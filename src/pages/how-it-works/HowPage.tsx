import Footer from "@/components/Footer"
import Header from "@/components/nav/Header"

function HowPage() {
    return (
        <>
            <Header/>
            <div id="page-overlay" className="fixed w-screen h-screen top-0 left-0" aria-hidden="true"></div>
            <main>
                <section className="bg-[#030303] min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-20" aria-labelledby="intro-heading">
                    <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest text-center">How it Works</h3>
                    <h1 id="intro-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 leading-tight text-center">What do we do?</h1>
                    <p className="text-base text-zinc-200 mt-4 w-full md:w-4/5 lg:w-3/5 text-center">We at BEDO Intelligence employ sophisticated artificial intelligence to trade stocks in real-time on the basis of the latest news, market sentiment, and analytics.</p>                
                </section>
                
                <section className="bg-[#030303]" id="steps" aria-label="Our process steps">
                    {/* Step 1: Collecting Data */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="border-t border-zinc-800 md:border-r p-6 sm:p-10 md:p-16 flex flex-col justify-center order-1">
                            <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Collecting Data</h3>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 leading-tight">Scan the Internet for useful data</h2>
                            <p className="text-base text-zinc-200 mt-4">Our AI scans thousands of news sources, social media platforms and financial reports to gather real-time information on market trends, stock performance, and economic shifts.</p>                
                        </div>
                        <div className="border-t border-zinc-800 aspect-auto md:aspect-square order-2">
                            <img src="images/steps/research.svg" alt="Illustration of social media research" className="w-full h-full object-contain p-4" />
                        </div>
                    </div>
                    
                    {/* Step 2: Analysing Market Sentiment */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="border-t border-zinc-800 p-6 sm:p-10 md:p-16 flex flex-col justify-center order-1 md:order-2">
                            <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Analysing Market Sentiment</h3>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 leading-tight">Processing data to recognise trends</h2>
                            <p className="text-base text-zinc-200 mt-4">Using our proprietary Natural Language Processing (NLP) and machine learning algorithms, BEDO Intelligence works out how the latest news affects stock prices. By identifying patterns in market reactions, we gain critical insight into future market movements.</p>                
                        </div>
                        <div className="border-t border-zinc-800 md:border-r aspect-auto md:aspect-square order-2 md:order-1">
                            <img src="images/steps/processing.svg" alt="Illustration of AI language processing" className="w-full h-full object-contain p-4" />
                        </div>
                    </div>
                    
                    {/* Step 3: Predicting Stock Trends */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="border-t border-zinc-800 md:border-r p-6 sm:p-10 md:p-16 flex flex-col justify-center order-1">
                            <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Predicting Stock Trends</h3>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 leading-tight">Understanding how the market might move</h2>
                            <p className="text-base text-zinc-200 mt-4">Our predictive models analyse historical and real-time data to forecast stock behaviour. This allows us to anticipate price fluctuations before they occur and get our foot in the door.</p>                
                        </div>
                        <div className="border-t border-zinc-800 aspect-auto md:aspect-square order-2">
                            <img src="images/steps/market.svg" alt="Illustration of market fluctuations" className="w-full h-full object-contain p-4" />
                        </div>
                    </div>
                    
                    {/* Step 4: Executing Trades Automatically */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="border-t border-zinc-800 p-6 sm:p-10 md:p-16 flex flex-col justify-center order-1 md:order-2">
                            <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Executing Trades Automatically</h3>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 leading-tight">Getting your foot in the door right away</h2>
                            <p className="text-base text-zinc-200 mt-4">When an opportunity arises, our AI executes buy and sell orders with precision and speed, much faster than human traders. By minimising emotional decision-making and maximising data-driven strategy, we increase the potential for profitable trades.</p>                
                        </div>
                        <div className="border-t border-zinc-800 md:border-r aspect-auto md:aspect-square order-2 md:order-1">
                            <img src="images/steps/trades.svg" alt="Illustration of trade history" className="w-full h-full object-contain p-4" />
                        </div>
                    </div>
                    
                    {/* Step 5: Continuous Learning & Adaptation */}
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="border-t border-b border-zinc-800 md:border-r p-6 sm:p-10 md:p-16 flex flex-col justify-center order-1">
                            <h3 className="text-sm md:text-md text-blue-400 uppercase font-medium tracking-widest">Continuous Learning & Adaptation</h3>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2 leading-tight">Constantly Improving our algorithms</h2>
                            <p className="text-base text-zinc-200 mt-4">We know we're not perfect, and the stock market is constanty changing. By constantly refining our algorithms and adapting to new market conditions, BEDO Intelligence stays ahead of the curve.</p>                
                        </div>
                        <div className="border-t border-b border-zinc-800 aspect-auto md:aspect-square order-2">
                            <img src="images/steps/nn.svg" alt="Neural network diagram" className="w-full h-full object-contain p-4" />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}   

export default HowPage