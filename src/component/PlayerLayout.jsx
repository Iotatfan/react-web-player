import AudioPlayer from "./AudioPlayer";
import SearchOverlay from "./SearchOverlay";
import { useState } from 'react'
// import Tracks from "../assets/tracks.json"

function PlayerLayout() {
    const [tracks, setTracks] = useState(null)
    const [isTracksReady, setIsTracksReady] = useState(false)

    return (
        <div className=" flex flex-col min-h-screen bg-gray-800 justify-center">
            <div className="justify-center m-4">
                <h1 className="text-white text-7xl font-bold">Sora Player</h1>
            </div>
            {isTracksReady ?
                <AudioPlayer
                    tracks={tracks} />
                : <SearchOverlay
                    isTracksReady={isTracksReady}
                    setIsTracksReady={setIsTracksReady}
                    tracks={tracks}
                    setTracks={setTracks} />
            }
        </div>
    )
}

export default PlayerLayout;