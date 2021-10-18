import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";


// Play / Pause, Next, Prev Button
const AudioPlayerControl = ({ isPlaying, setIsplaying, nextTrack, prevTrack }) => {
    return (
        <div className="flex flex-row">
            <FontAwesomeIcon icon={faBackward}
                className="text-gray-300 hover:text-white transition duration-300 text-4xl m-4 cursor-pointer"
                onClick={prevTrack} />
            {isPlaying ?
                <FontAwesomeIcon icon={faPause}
                    className="text-gray-300 hover:text-white transition duration-300 text-4xl m-4 cursor-pointer"
                    onClick={() => setIsplaying(!isPlaying)} />
                : <FontAwesomeIcon icon={faPlay}
                    className="text-gray-300 hover:text-white transition duration-300 text-4xl m-4 cursor-pointer"
                    onClick={() => setIsplaying(!isPlaying)} />
            }
            <FontAwesomeIcon icon={faForward}
                className="text-gray-300 hover:text-white transition duration-300 text-4xl m-4 cursor-pointer"
                onClick={nextTrack} />
        </div>
    );
}

export default AudioPlayerControl;