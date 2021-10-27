import { useState, useEffect } from 'react'
import axios from 'axios'
import { getPlaylistID, validateID } from 'ytpl'

function SearchOverlay({ isTrackReady, setIsTracksReady, tracks, setTracks }) {
    const [input, setInput] = useState(null)
    const playlistUrl = 'https://web-player-backend.herokuapp.com/playlist/'

    const getPlaylistData = async () => {
        const playlistID = await getPlaylistID(input)
        const res = await axios.get(`${playlistUrl}${playlistID}`)
        console.log(res.data)
        setTracks(res.data)
    }

    useEffect(() => {
        if (tracks !== null) {
            setIsTracksReady(true)
        }

    }, [setIsTracksReady, tracks])

    return (
        <div className="flex flex-row justify-center">
            <div className="form-control" >
                <label className="label">
                    <span className="label-text text-white text-xl">Put Youtube Playlist Link</span>
                </label>
                <div className="relative">
                    <input type="text" placeholder="Playlist Link"
                        className="w-full mr-64 input border-gray-900 input-bordered"
                        onInput={e => setInput(e.target.value)} />
                    <button className="absolute top-0 right-0 btn bg-gray-900 rounded-l-none text-white text-xl"
                        onClick={() => {
                            if (validateID(input)) getPlaylistData()
                            else console.log("Please Enter the Correct Playlist Link")
                        }}>Go</button>
                </div>
            </div>
        </div>
    )
}

export default SearchOverlay
