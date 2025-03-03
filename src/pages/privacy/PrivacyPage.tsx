import Footer from "@/components/Footer"
import Header from "@/components/nav/Header"

function PrivacyPage() {
    return (
        <>
            <Header/>
            <section className="bg-[#030303] h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-12">Privacy Policy</h1>
            </section>
            <Footer />
        </>
    )
}

export default PrivacyPage