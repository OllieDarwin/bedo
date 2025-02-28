import { AlignJustify } from "lucide-react"
import { useState } from "react"
import NavMenu from "./NavMenu"

interface MenuButtonProps {
    color?: string,
    className?: string
}

function MenuButton({ color="#181818", className }: MenuButtonProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
        <>
            <div className="">
                <button
                    style={{
                        stroke: color
                    }}
                    className={className || ""}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <AlignJustify color={color} size={24} className="cursor-pointer"/>
                </button>
            </div>
            <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    )
}

export default MenuButton