import Footer from "@/components/Footer"
import Header from "@/components/nav/Header"

function PrivacyPage() {
    return (
        <>
            <Header/>
            <section className="bg-[#030303] flex flex-col justify-center items-center py-32">
                <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-12">Privacy Policy</h1>
                <p className="text-zinc-500">Last updated: 05/03/25</p>
                <div className="w-1/2 mt-8">
                    <p>BEDO Intelligence is committed to protecting your privacy and ensuring the security of your personal data. This privacy policy outlines how we collect, use and protect your information in compliance with the <b>Computer Misuse Act (CMA) 1990, Copyright, Designs and Patents Act (CDPA) 1988, Data Protection Act (DPA) 1998 and Regulation of Investigatory Powers Act (RIPA) 2000.</b></p>
                    
                    <h2 className="mt-4 font-bold text-lg">1. Information We Collect</h2>
                    <p>We may collect the following types of personal and non-personal data when you use our services:</p>
                    <ul className="list-disc ml-4">
                        <li><b>Personal Information: </b>Name, email address, phone number, payment details.</li>
                        <li><b>Technical Data: </b>IP address, browser type, device information.</li>
                        <li><b>Usage Data: </b>Interactions with our website, pages visited and preferences.</li>
                    </ul>

                    <h2 className="mt-4 font-bold text-lg">2. How We Use Your Data</h2>
                    <p>We use your information for:</p>
                    <ul className="list-disc ml-4">
                        <li>Providing and improving our AI-powered stock trading services.</li>
                        <li>Processing payments and managing accounts.</li>
                        <li>Ensuring security and fraud prevention.</li>
                        <li>Complying with legal obligations.</li>
                    </ul>

                    <h2 className="mt-4 font-bold text-lg">3. Data Protection & Security</h2>
                    <ul className="list-disc ml-4">
                        <li>We implement strong encryption and access control measures to prevent unauthorised access in line with the Computer Misuse Act 1990.</li>
                        <li>We do not sell or share your data with third parties unless required by law or for essential services.</li>
                    </ul>

                    <h2 className="mt-4 font-bold text-lg">4. Your Rights</h2>
                    <p>Under the <b>Data Protection Act 1998</b> and relevant data protection laws, you have the right to:</p>
                    <ul className="list-disc ml-4">
                        <li>Request access to your data.</li>
                        <li>Request correction or deletion of your personal information.</li>
                        <li>Withdraw consent for data processing where applicable.</li>
                    </ul>
                    <p>To exercise these rights, contact us.</p>
                    
                    <h2 className="mt-4 font-bold text-lg">5. Cookies & Tracking Technologies</h2>
                    <p>We use cookies to enhance user experiences and analyse website traffic. You can control cookie settings in your web browser.</p>
                
                    <p className="mt-4">For any privacy related concerns, contact us.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default PrivacyPage