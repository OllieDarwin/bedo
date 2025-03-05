import { Link } from "react-router"

function Footer() {
    return ( 
        <footer className="bg-[#030303] px-4 md:px-16 py-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-zinc-400">© BEDO Intelligence 2025</p>
                <p className="text-zinc-400">Website built by <a className="text-zinc-100 underline" href="https://github.com/OllieDarwin" target="_blank">Ollie Darwin</a>.</p>
            </div>
            <div className="flex flex-row mt-4 items-center gap-8">
                <Link className="text-zinc-100 underline" to="/privacy-policy">Privacy Policy</Link>
                <Link className="text-zinc-100 underline" to="/terms-of-service">Terms of Service</Link>
            </div>
        </footer>
    )
}

export default Footer