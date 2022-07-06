import { useEffect, useState } from "react";
import RecentlyPlayed from "./RecentlyPlayed";
import { showTime, showPercentage } from "../utils/helpers";

type Song = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  duration: number;
  progress: number;
};

const Spotify = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [playMarquee, setPlayMarquee] = useState<boolean>(false);

  // function to fetch current song and set necessary state
  const getCurrentSong = async () => {
    const res = await fetch("/api/getCurrentlyPlaying");
    const data = await res.json();
    if (!data.isPlaying) return;
    setCurrentSong(data);
    setProgress(data.progress);
    setDuration(data.duration);
  };
  // fetch song on component mount
  useEffect(() => {
    getCurrentSong();
    setLoading(false);
  }, []);

  // when current song changes, start the timer based on current progress and total song duration
  let interval: any;
  useEffect(() => {
    if (currentSong?.isPlaying) {
      interval = setInterval(() => {
        setProgress((currProgress) => currProgress + 1000);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentSong]);

  // if progress becomes greater than duration, check to see if another new song is playing and clear the timer
  useEffect(() => {
    if (currentSong) {
      if (progress > duration) {
        getCurrentSong();
        clearInterval(interval);
      }
    }
  }, [progress, duration]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full h-full font-robot text-xl flex flex-col justify-center items-center p-2">
      {currentSong?.isPlaying ? (
        <>
          <h1 className="text-xl self-start mb-3 text-gray-400">Currently listening to...</h1>
          <div className="flex gap-2 w-full items-center text-white">
            <img src={currentSong.albumImageUrl} className="w-16 rounded" />
            <div className="overflow-x-hidden w-full">
              <div className="mb-2 whitespace-nowrap text-sm">
                {!!currentSong && currentSong.title} by: {!!currentSong && currentSong.artist}
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[32px]">{showTime(progress)}</div>
                <div className="bg-white w-full rounded-xl h-[10px]">
                  <div
                    className="transition-all rounded-xl border-2 border-green-600 bg-green-600"
                    style={{
                      width: `${showPercentage(progress, duration)}%`,
                      height: "100%",
                    }}></div>
                </div>
                <div className="">{showTime(duration)}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <RecentlyPlayed />
      )}
    </div>
  );
};

export default Spotify;
