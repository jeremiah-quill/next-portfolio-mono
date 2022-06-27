import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { getCurrentlyPlaying } from "../utils/spotify";

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

  const getSong = async () => {
    const songObj = await getCurrentlyPlaying();
    if (songObj && songObj.isPlaying) {
      setCurrentSong(songObj);
      setProgress(songObj.progress);
      setDuration(songObj.duration);
    }
    setLoading(false);
  };

  useEffect(() => {
    getSong();
  }, []);

  let interval: any;

  useEffect(() => {
    if (currentSong?.isPlaying) {
      interval = setInterval(() => {
        setProgress((currProgress) => currProgress + 1000);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [currentSong]);

  useEffect(() => {
    if (currentSong) {
      if (progress > duration) {
        getSong();
        clearInterval(interval);
      }
    }
  }, [progress, duration]);

  const showTime = (millis: number) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = parseInt(((millis % 60000) / 1000).toFixed(0));

    return seconds == 60
      ? minutes + 1 + ":00"
      : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  const showPercentage = (progress: number, duration: number) => {
    return ((progress / duration) * 100).toFixed();
  };

  if (loading) return <div className="text-center">loading...</div>;

  return (
    <div className="w-full p-5">
      {currentSong?.isPlaying ? (
        <>
          <h1 className="text-2xl font-bold text-center mb-5">Now playing</h1>
          <div className="flex gap-2 w-full items-center">
            <img src={currentSong.albumImageUrl} className="w-20" />
            <div className="overflow-x-hidden w-full">
              <Marquee gradient={false}>
                <div className="text-center mb-2 whitespace-nowrap ">
                  {!!currentSong && currentSong.title} by: {!!currentSong && currentSong.artist}
                </div>
              </Marquee>
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
                <div className="w-[32px]">{showTime(duration)}</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1 className="text-2xl font-bold text-center mb-5">Not playing</h1>
      )}
    </div>
  );
};

export default Spotify;
