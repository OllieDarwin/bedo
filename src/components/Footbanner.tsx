import { X } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router"

function FootBanner() {
    const [visible, setVisible] = useState(true)
    const navigate = useNavigate()

    return (
        <div className={`w-screen min-h-100px bg-[#060606] px-16 py-4 text-white fixed bottom-0 left-0 z-50 flex items-center justify-center ${visible ? 'block' : 'hidden'}`}>
            <div className="flex flex-col justify-center w-full">
                <h5 className="font-semibold">We have updated our ToS!</h5>
                <p className="text-zinc-400 text-sm">
                    Due to the introduction of the Online Safety Act (OSA) 2023, we have made some changes to the way BEDO intelligence is ran. <br />
                    You can 
                    <span onClick={() => {
                        navigate("/updates")
                        setVisible(false)
                    }} className="text-white cursor-pointer mx-1">click here</span> 
                    to learn more.    
                </p>
            </div>
            <div className="h-full flex items-start justify-end">
                <X size={24} className="cursor-pointer" onClick={() => setVisible(false)} />
            </div>
        </div>
    )
}

export default FootBanner