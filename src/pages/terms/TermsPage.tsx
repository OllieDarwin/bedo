import Footer from "@/components/Footer"
import Header from "@/components/nav/Header"

function TermsPage() {
    return (
        <>
            <Header/>
            <section className="bg-[#030303] flex flex-col justify-center items-center py-32">
                <h1 className="text-3xl md:text-4xl font-bold mt-2 leading-12">Terms & Conditions</h1>
                <p className="text-zinc-500">Last updated: 12/03/25</p>
                <div className="w-1/2 mt-8">
                    <p>These Terms & Conditions govern your use of BEDO Intelligence's website and services. By accessing our website, you agree to comply with these terms.</p>
                    
                    <h2 className="mt-4 font-bold text-lg">1. Use of Our Services</h2>
                    <ul className="list-disc ml-4">
                        <li>You must be at least 18 years old to use our stock trading services. Any new or pre-existing users who have not already must complete our secure ID verification process before they begin/continue trading.</li>
                        <li>You agree not to engage in unauthorised access, hacking, or distribution of malware, in compliance with the <b>Computer Misuse Act 1990</b>.</li>
                        <li>You shall not use our platform to distribute any material without permission, following the <b>Copyright, Designs and Patents Act 1988</b>.</li>
                    </ul>

                    <h2 className="mt-4 font-bold text-lg">2. Intellectual Property</h2>
                    <ul className="list-disc ml-4">
                        <li>All content, AI models, and trading algorithms on BEDO Intelligence are our intellectual property. Unauthorised copying or distribution is prohibited under the <b>Copyright, Designs and Patents Act 1988</b>.</li>
                        <li>We do, however, want to remain relatively transparent about our AI systems and how they work, in compiance with the <b>Online Safety Act (OSA) 2023</b>. We do not modify or manipulate market data in any way, to ensure fair trading. If you have any concerns don't hesitate to contact us.</li>
                    </ul>

                    <h2 className="mt-4 font-bold text-lg">3. Account Security</h2>
                    <ul className="list-disc ml-4">
                        <li>You are resposible for maintaining the confidentiality of your account credentials.</li>
                        <li>Any suspected breach of security must be reported immediately to use via our contact information.</li>
                    </ul>

                    <h2 className="mt-4 font-bold text-lg">4. Compliance with Legal Obligations</h2>
                    <ul className="list-disc ml-4">
                        <li>BEDO Intelligence actively moderates any financial discussions and/or trading forums on our platform to prevent misinformation, scams or misleading stock predictions.</li>
                        <li>Any fraudulent or misleading activity on our platform will immediately be reported and investigated.</li>
                        <li>We may be required to share data with authorities under the <b>Regulation of Investigatory Powers Act 2000</b> when legally mandated.</li>
                        <li>Any attempts to unlawfully access our systems will be prosecuted under the <b>Computer Misuse Act 1990</b>.</li>
                    </ul>
                    <p>To exercise these rights, contact us.</p>
                    
                    <h2 className="mt-4 font-bold text-lg">5. Limitation of Liability</h2>
                    <ul className="list-disc ml-4">
                        <li>BEDO Intelligence provides stock trading insights but does not guarantee financial success. We are not responsible for losses incurred while using our services.</li>
                        <li>We do not take liability for system downtme, cyber-attacks or unauthorised account breaches.</li>
                    </ul>

                    <h2 className="mt-4 font-bold text-lg">6. Termination of Service</h2>
                    <ul className="list-disc ml-4">
                        <li>We reserve the right to suspend or terminate accounts found in violation of these terms.</li>
                        <li>Users who attempt unauthorised access or distribute malicious software will be reported to authorities under the <b>Computer Misuse Act 1990</b>.</li>
                    </ul>

                    <p className="mt-4">For any questions, please contact us.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default TermsPage