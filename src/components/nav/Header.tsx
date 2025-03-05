import { Link } from "react-router"
import MenuButton from "./MenuButton"

function Header() {
    return (
        <header className="navbar w-full z-100 absolute top-0 left-0 px-4 md:px-12 justify-between" role="banner">
            <Link className="w-full" to="/" aria-label="BEDO Intelligence Home">
                <h1 className="font-bold text-lg md:text-xl navbar-start">BEDO Intelligence</h1>
            </Link>
            <MenuButton color="white" className="content-end fixed right-4 md:right-12" aria-label="Menu"></MenuButton>
        </header>
    )
}

export default Header