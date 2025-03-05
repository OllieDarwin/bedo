import { AnimatePresence, motion } from "framer-motion"
import Lenis from "lenis"
import { X } from "lucide-react"
import { RefObject } from "react"
import { Link } from "react-router"

interface NavMenuProps {
    isOpen: boolean,
    onClose: () => void,
    lenis?: RefObject<Lenis | null>
}

function NavMenu({ isOpen, onClose }: NavMenuProps) {

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="backdrop"
                        className="fixed inset-0 bg-black z-100"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />
                )}
            </AnimatePresence>
            <motion.div 
                className="fixed right-0 top-0 overflow-y-auto h-screen w-full sm:w-3/4 md:w-1/2 lg:w-1/3 z-[100] bg-zinc-900 py-8"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{
                    initial: { x: "100%", opacity: 0 },
                    animate: {
                        x: isOpen ? "0%" : "100%",
                        opacity: isOpen ? 1 : 0,
                        transition: {
                        duration: 0.5,
                        ease: [0.79, 0.35, 0.26, 1],
                        },
                    },
                    exit: {
                        x: "100%",
                        opacity: 0,
                        transition: {
                        duration: 0.5,
                        ease: [0.79, 0.35, 0.26, 1],
                        },
                    },
                }}
                >
                <button onClick={onClose} className="float-right px-4">
                    <X size={24} color="white" className="mr-8 cursor-pointer" />
                </button>
                <div className="h-full mx-8 sm:mx-12 md:mx-16 flex flex-col items-start justify-center">
                    <div className="w-full h-full flex items-center">
                        <ul className="flex flex-col gap-4">
                            <li className="text-2xl text-white font-bold">
                                <Link to="/">Home</Link>
                            </li>  
                            <li className="text-2xl text-white font-bold">
                                <Link to="/how-it-works">How it Works</Link>
                            </li>    
                            <li className="text-2xl text-white font-bold">
                                <Link to="/terms-of-service">Terms & Conditions</Link>
                            </li>  
                            <li className="text-2xl text-white font-bold">
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </li>    
                        </ul>  
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default NavMenu