import AudioPlayer from "./AudioPlayer";

function PlayerLayout() {


    return (
        <div className=" flex flex-col min-h-screen bg-gray-800 justify-center">
            <div className="justify-center m-4">
                <h1 className="text-white text-7xl font-bold">Sora Player</h1>
            </div>
            <AudioPlayer />
        </div>
    )
}

export default PlayerLayout;