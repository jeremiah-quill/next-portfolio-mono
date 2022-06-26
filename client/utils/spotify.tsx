const client_id = "55847e80caec422d9960cfca61b7618d";
const client_secret = "5a2d12e22dd842cfa02465559277bda8";

export const getToken = async () => {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=refresh_token&refresh_token=AQACwKZ70sBOIvj8yls0VruH4hVeibFR7_0-3749vjOuyI8FVVRxx_oDgP5k2nDfwk7dHiPO2KfDN_kIQK5D4fLj9dtESUw7Of-_P98AkoopEzDUgcrP0glRVc5y2NtToqk",
  });
  const data = await res.json();
  return data.access_token;
  // setToken(data.access_token);
};

export const getCurrentlyPlaying = async () => {
  const token = await getToken();

  if (!token) return;

  const NOW_PLAYING_URL = `https://api.spotify.com/v1/me/player/currently-playing`;
  const res = await fetch(NOW_PLAYING_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const song = await res.json();
  if (!song) return;

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
  // console.log(currentSongObj);
  // getProgress(currentSongObj.progress, currentSongObj.duration);
  // setCurrentSong(currentSongObj);
  // setLoading(false);
  return currentSongObj;
};
