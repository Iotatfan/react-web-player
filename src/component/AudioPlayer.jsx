import { useState, useRef, useEffect } from "react"
import AudioPlayerControl from "./AudioPlayerControl";
import TrackInfo from "./TrackInfo";
import VolumeSlider from "./VolumeSlider";

const streamUrl = 'https://web-player-backend.herokuapp.com/stream/'

function AudioPlayer({tracks}) {
    const [isPlaying, setIsplaying] = useState(true)
    const [trackIndex, setTrackIndex] = useState(0)
    const { title, author, audioSrc } = tracks[trackIndex]

    // Init Audio Player
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
        console.log(`Playing ${title}`)
        // audioRef.current = new Audio(`${streamUrl}${audioSrc}`)
        audioRef.current.src = `${streamUrl}${audioSrc}`
        audioRef.current.play()
    }, [trackIndex, audioSrc, title])

    return (
        <div className="flex flex-row justify-center my-4">
            <AudioPlayerControl
                isPlaying={isPlaying}
                setIsplaying={setIsplaying}
                nextTrack={nextTrack}
                prevTrack={prevTrack}
            />
            <TrackInfo
                title={title}
                author={author}
                track={tracks[trackIndex]}
            />
            <VolumeSlider
                audioRef={audioRef}
            />
        </div>
    );
}

export default AudioPlayer;