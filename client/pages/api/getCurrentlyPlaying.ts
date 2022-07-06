import type { NextApiRequest, NextApiResponse } from "next";
import { getCurrentlyPlaying } from "../../utils/spotify";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getCurrentlyPlaying();

  if (response.status === 204 || response.status > 400) {
    res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.currently_playing_type === "episode") {
    res.status(200).json({ isPlaying: false });
  } else {
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

    res.status(200).json(currentSongObj);
  }
}
