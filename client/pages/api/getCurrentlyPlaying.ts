import type { NextApiRequest, NextApiResponse } from "next";
import { getCurrentlyPlaying } from "../../utils/spotify";

// type Data = {
//   name: string;
// };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const songObj = await getCurrentlyPlaying();

  res.status(200).json(songObj);
}
