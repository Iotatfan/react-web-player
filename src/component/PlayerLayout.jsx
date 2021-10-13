import { faPlay, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

function PlayerLayout() {
    const [showVolumeSlider, setShowVolumeSlider] = useState(false)

    return (
        <div className=" flex flex-col min-h-screen bg-gray-800 justify-center">
            <div className="justify-center m-4">
                <h1 className="text-white text-7xl font-bold">Sora Player</h1>
            </div>
            <div className="flex flex-row justify-center my-4">
                <div className="bg-gray-900 rounded-md mx-2">
                    <FontAwesomeIcon icon={faPlay} className="text-gray-300 hover:text-white transition duration-300 text-4xl m-4 cursor-pointer" onClick />
                </div>
                <div className=" flex flex-col justify-center items-start bg-gray-900 rounded-md mx-2 w-1/3">
                    <div className="flex mx-4">
                        <a className="text-white text-sm sm:text-xl font-semibold" href>Song's Title</a>
                    </div>
                    <div className="flex mx-4">
                        <a className="text-white text-left text-sm sm:text-lg" href>Song's Artist</a>
                    </div>
                </div>
                <div className=" flex flex-col relative my-auto bg-gray-900 rounded-md mx-2">
                    <FontAwesomeIcon icon={faVolumeUp} className="text-gray-300 hover:text-white transition duration-300 text-4xl m-4 cursor-pointer" onClick={() => setShowVolumeSlider(!showVolumeSlider)} />
                    {showVolumeSlider ?
                        <div className="absolute -bottom-16 -left-16 right-0">
                            <input type="range" max="100" className="range"></input>
                        </div> : null}
                </div>
            </div>
        </div>
    )
}

export default PlayerLayout;