export type Song = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  duration: number;
  progress: number;
};

export type ImageTypes = {
  lowQualityImg: string;
  highQualityImg: string;
  className: string;
  aspectRatio: string;
};

// export type Post = {
//   _id: string;
//   slug: string;
//   content: MDXRemoteSerializeResult;
//   title: string;
//   date: string;
//   excerpt: string;
//   coverImage: string;
//   readingTime: string;
//   tweets: any[];
// };

// export type Snippet = {
//   _id: string;
//   slug: string;
//   content: MDXRemoteSerializeResult;
//   title: string;
//   description: string;
//   logo: string;
// };

// export enum Form {
//   Initial,
//   Loading,
//   Success,
//   Error
// }

// export type FormState = {
//   state: Form;
//   message?: string;
// };

// export type Subscribers = {
//   count: number;
// };

// export type Views = {
//   total: number;
// };

// export type Song = {
//   songUrl: string;
//   artist: string;
//   title: string;
// };

// export type NowPlayingSong = {
//   album: string;
//   albumImageUrl: string;
//   artist: string;
//   isPlaying: boolean;
//   songUrl: string;
//   title: string;
// };

// export type TopTracks = {
//   tracks: Song[];
// };

// export type YouTube = {
//   subscriberCount: number;
//   viewCount: number;
// };

// export type GitHub = {
//   stars: number;
// };

// export type Unsplash = {
//   downloads: number;
//   views: number;
// };
