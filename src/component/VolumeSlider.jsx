import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const VolumeSlider = ({ audioRef }) => {
    const [showVolumeSlider, setShowVolumeSlider] = useState(false)

    return (
        <div className=" flex flex-col relative my-auto bg-gray-900 rounded-md mx-2">
            <FontAwesomeIcon icon={faVolumeUp}
                className="text-gray-300 hover:text-white transition duration-300 text-4xl m-4 cursor-pointer"
                onClick={() => setShowVolumeSlider(!showVolumeSlider)} />
            <div className={`absolute -bottom-16 -left-16 right-0  ${showVolumeSlider ? "show" : "hidden"}`}>
                <input type="range" max="100" min="0" defaultValue={100}
                    step="1"
                    onInput={(event) => {
                        audioRef.current.volume = event.target.value / 100
                    }} className="range"></input>
            </div>
        </div>
    )
}

export default VolumeSlider
