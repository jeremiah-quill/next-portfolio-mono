import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const client_id = "55847e80caec422d9960cfca61b7618d";
const client_secret = "5a2d12e22dd842cfa02465559277bda8";

const Spotify = () => {
  const [token, setToken] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [percentage, setPercentage] = useState(null);
  const [totalTime, setTotalTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getToken = async () => {
      const res = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=refresh_token&refresh_token=AQACwKZ70sBOIvj8yls0VruH4hVeibFR7_0-3749vjOuyI8FVVRxx_oDgP5k2nDfwk7dHiPO2KfDN_kIQK5D4fLj9dtESUw7Of-_P98AkoopEzDUgcrP0glRVc5y2NtToqk",
      });
      const data = await res.json();
      setToken(data.access_token);
    };
    if (!token) {
      getToken();
    }
  }, []);

  useEffect(() => {
    const getCurrentlyPlaying = async () => {
      const NOW_PLAYING_URL = `https://api.spotify.com/v1/me/player/currently-playing`;
      const res = await fetch(NOW_PLAYING_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const song = await res.json();
      const isPlaying = song.is_playing;
      const title = song.item.name;
      const artist = song.item.artists.map((artist) => artist.name).join(", ");
      const album = song.item.album.name;
      const albumImageUrl = song.item.album.images[0].url;
      const songUrl = song.item.external_urls.spotify;
      const duration = song.item.duration_ms;
      const progress = song.progress_ms;
      const currentSongObj = {
        song,
        isPlaying,
        title,
        artist,
        album,
        albumImageUrl,
        songUrl,
        duration,
        progress,
      };
      console.log(currentSongObj);
      getProgress(currentSongObj.progress, currentSongObj.duration);
      setCurrentSong(currentSongObj);
      setLoading(false);
    };
    // TODO: Uncomment to check for currently playing song every second.
    // if (token) {
    //   const interval = setInterval(() => {
    //     getCurrentlyPlaying();
    //   }, 1000);
    //   return () => clearInterval(interval);
    // }
    if (token) {
      getCurrentlyPlaying();
    }
  }, [token]);

  const getProgress = (progress, duration) => {
    if (progress > duration) {
    }
    function millisToMinutesAndSeconds(millis) {
      var minutes = Math.floor(millis / 60000);
      var seconds = parseInt(((millis % 60000) / 1000).toFixed(0));

      return seconds == 60
        ? minutes + 1 + ":00"
        : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
    setTotalTime(millisToMinutesAndSeconds(duration));
    setCurrentTime(millisToMinutesAndSeconds(progress));

    const percentage = parseInt((progress / duration) * 100);
    setPercentage(percentage);
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
              <Marquee gradientColor={"none"}>
                <div className="text-center mb-2 whitespace-nowrap ">
                  {!!currentSong && currentSong.title} by: {!!currentSong && currentSong.artist}
                </div>
              </Marquee>
              <div className="flex gap-2 items-center">
                <div>{currentTime}</div>
                <div className="bg-white w-full rounded-xl h-[10px]">
                  <div
                    className="transition-all rounded-xl border-2 border-green-600 bg-green-600"
                    style={{
                      width: `${percentage}%`,
                      height: "100%",
                    }}></div>
                </div>
                <div>{totalTime}</div>
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
