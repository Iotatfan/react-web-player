import React from 'react'

const TrackInfo = ({ title, author, track }) => {
    return (
        <div className=" flex flex-col justify-center items-start bg-gray-900 rounded-md mx-2 pr-2 w-1/3 overflow-hidden">
            {track !== [] ?
                <div>
                    <div className="flex mx-4">
                        <p className="text-white text-sm sm:text-xl font-semibold whitespace-nowrap" target="_blank">{title}</p>
                    </div>
                    <div className="flex mx-4">
                        <p className="text-white text-left text-sm sm:text-lg whitespace-nowrap">{author}</p>
                    </div>
                </div>
                : <div className="flex mx-4">
                    <p className="text-white text-sm sm:text-xl font-semibold">Playlist is Empty</p>
                </div>
            }
        </div>
    )
}

export default TrackInfo
