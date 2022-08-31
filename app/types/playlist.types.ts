/**
 * @template A the type of author
 * @template T the type of track
 */
export interface Playlist<A = string, T = string> {
  _id: string;
  name: string;
  image: string;
  plays: number;
  author: A[];
  tracks: T[];
}
