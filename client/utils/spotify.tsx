// TODO: how to type context
export const getToken = async () => {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(
          process.env.NEXT_PUBLIC_CLIENT_ID + ":" + process.env.NEXT_PUBLIC_CLIENT_SECRET
        ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=refresh_token&refresh_token=${process.env.NEXT_PUBLIC_REFRESH_TOKEN}`,
  });
  const data = await res.json();
  return data.access_token;
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

  if (res.status === 204 || res.status > 400) return;

  const song = await res.json();

  if (!song) return;

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((artist: any) => artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  const duration = song.item.duration_ms;
  const progress = song.progress_ms;
  const currentSongObj = {
    isPlaying,
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
    duration,
    progress,
  };

  return currentSongObj;
};
