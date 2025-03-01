import MenuButton from "./MenuButton"

function Header() {
    return (
        <header className="navbar w-full z-100 absolute top-0 left-0 px-4 md:px-12 justify-between">
            <h1 className="font-bold text-lg md:text-xl navbar-start">BEDO Intelligence</h1>
            <MenuButton color="white" className="content-end fixed right-4 md:right-12"></MenuButton>
        </header>
    )
}

export default Header