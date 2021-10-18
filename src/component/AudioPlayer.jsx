import { useState, useRef, useEffect } from "react"
import Tracks from "../tracks.json"
import AudioPlayerControl from "./AudioPlayerControl";
import TrackInfo from "./TrackInfo";
import VolumeSlider from "./VolumeSlider";

function AudioPlayer() {
    const [isPlaying, setIsplaying] = useState(false)
    const [trackIndex, setTrackIndex] = useState(0)
    const streamUrl = 'http://localhost:3030/stream/'
    const playlistUrl = 'http://localhost:3030/playlist/'

    // Put Playlist URL
    // const tracks = getPlaylist()
    const tracks = Tracks
    const { title, author, audioSrc } = tracks[trackIndex]
    async function getPlaylist() {
        return await fetch(playlistUrl)
    }

    // Get Playlist's Track From Youtube
    const audioRef = useRef(new Audio(`${streamUrl}${audioSrc}/`))
    audioRef.current.addEventListener("ended", (event) => {
        console.log("Playback Ended")
        nextTrack()
    })

    // Is Playback Paused or Running
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    // Playback Index
    const nextTrack = () => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1)
        }
        else {
            setTrackIndex(0)
        }
    }
    const prevTrack = () => {
        if (trackIndex - 1 > 0) {
            setTrackIndex(trackIndex - 1)
        }
        else {
            setTrackIndex(tracks.length - 1)
        }
    }
    useEffect(() => {
        audioRef.current.pause()
        audioRef.current = new Audio(`${streamUrl}${audioSrc}`
        )
        audioRef.current.play()
    }, [trackIndex, audioSrc])

    return (
        <div className="flex flex-row justify-center my-4">
            <div className="bg-gray-900 rounded-md mx-2">
                <AudioPlayerControl
                    isPlaying={isPlaying}
                    setIsplaying={setIsplaying}
                    nextTrack={nextTrack}
                    prevTrack={prevTrack}
                />
            </div>
            <div className=" flex flex-col justify-center items-start bg-gray-900 rounded-md mx-2 w-1/3">
                <TrackInfo
                    title={title}
                    author={author}
                    tracks={tracks}
                />
            </div>
            <div className=" flex flex-col relative my-auto bg-gray-900 rounded-md mx-2">
                <VolumeSlider
                    audioRef={audioRef}
                />
            </div>
        </div>
    );
}

export default AudioPlayer;