const TOKEN_URL = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_URL = "https://api.spotify.com/v1/me/player/recently-played";

export const getToken = async () => {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(
          // process.env.NEXT_PUBLIC_CLIENT_ID + ":" + process.env.NEXT_PUBLIC_CLIENT_SECRET
          process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET
        ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // body: `grant_type=refresh_token&refresh_token=${process.env.NEXT_PUBLIC_REFRESH_TOKEN}`,
    body: `grant_type=refresh_token&refresh_token=${process.env.REFRESH_TOKEN}`,
  });
  const data = await res.json();
  return data.access_token;
};

export const getCurrentlyPlaying = async () => {
  const token = await getToken();
  const res = await fetch(NOW_PLAYING_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};

export const getLastPlayed = async () => {
  const token = await getToken();
  const res = await fetch(RECENTLY_PLAYED_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res;
};
