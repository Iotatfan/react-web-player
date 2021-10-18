import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const VolumeSlider = ({ audioRef }) => {
    const [showVolumeSlider, setShowVolumeSlider] = useState(false)
    const [volume, setVolume] = useState(100)

    return (
        <div>
            <FontAwesomeIcon icon={faVolumeUp}
                className="text-gray-300 hover:text-white transition duration-300 text-4xl m-4 cursor-pointer"
                onClick={() => setShowVolumeSlider(!showVolumeSlider)} />
            {showVolumeSlider ?
                <div className="absolute -bottom-16 -left-16 right-0">
                    <input type="range" max="100" min="0" defaultValue={volume}
                        onChange={(event) => {
                            setVolume(event.target.value)
                            audioRef.current.volume = volume / 100
                        }} className="range"></input>
                </div>
                : <div className="absolute -bottom-16 -left-16 right-0 hidden">
                    <input type="range" max="100" min="0" defaultValue={volume}
                        onChange={(event) => {
                            setVolume(event.target.value)
                            audioRef.current.volume = volume / 100
                        }} className="range"></input>
                </div>}
        </div>
    )
}

export default VolumeSlider
