import React from 'react'

const TrackInfo = ({ title, author, tracks }) => {
    return (
        <div>
            {tracks !== [] ?
                <div>
                    <div className="flex mx-4">
                        <a className="text-white text-sm sm:text-xl font-semibold" target="_blank"
                            href>{title}</a>
                    </div>
                    <div className="flex mx-4">
                        <a className="text-white text-left text-sm sm:text-lg" target="_blank"
                            href>{author}</a>
                    </div>
                </div>
                : <div className="flex mx-4">
                    <p className="text-white text-sm sm:text-xl font-semibold"
                        href>Playlist is Empty</p>
                </div>
            }
        </div>
    )
}

export default TrackInfo
