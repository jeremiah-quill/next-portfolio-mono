import { useState, useEffect } from "react";

const RecentlyPlayed = () => {
  const [showRecent, setShowRecent] = useState<boolean>(false);
  const [tracks, setTracks] = useState<any>([]);

  const getRecentTracks = async () => {
    const res = await fetch("/api/getRecentlyPlayed");
    const data = await res.json();
    setTracks(data);
  };

  useEffect(() => {
    getRecentTracks();
  }, []);

  return (
    <div className="h-full p-1 pb-5 w-full">
      {!showRecent ? (
        <button
          onClick={() => setShowRecent(true)}
          className="flex h-full w-full items-center justify-center">
          <h1 className="text-2xl text-center text-gray-400 h-full flex items-center">
            Not currently listening to Spotify, but click here to view my recently played tracks.
          </h1>
        </button>
      ) : (
        <>
          <div className="grid gap-3 grid-cols-12 border-b border-gray-300">
            <div className="col-span-1">#</div>
            <div className="col-span-7">Title</div>
            <div className="col-span-4">Album</div>
          </div>
          <ul className="h-full overflow-y-scroll pb-2">
            {tracks.map((track: any, idx: number) => (
              <li className="grid grid-cols-12 gap-3 mb-2" key={idx}>
                <div className="col-span-1 text-sm">{idx + 1}</div>
                <div className="col-span-7 flex items-center">
                  <img className="w-10 aspect-square mr-2" src={track.albumImageUrl} />
                  <div>
                    <h1 className="text-xl whitespace-nowrap overflow-hidden">{track.name}</h1>
                    <h2 className="text-sm whitespace-nowrap overflow-hidden">{track.artists}</h2>
                  </div>
                </div>
                <div className="text-sm col-span-4">{track.album}</div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default RecentlyPlayed;
