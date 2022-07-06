import type { NextApiRequest, NextApiResponse } from "next";
import { getLastPlayed } from "../../utils/spotify";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getLastPlayed();
  const songs = await response.json();

  const tracksResponse = songs.items.map((item: any) => ({
    name: item.track.name,
    artists: item.track.artists.map((artist: any) => artist.name).join(", "),
    album: item.track.album.name,
    albumImageUrl: item.track.album.images[0].url,
  }));

  res.status(200).json(tracksResponse);
}
