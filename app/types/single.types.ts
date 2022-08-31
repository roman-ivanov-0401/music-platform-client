/**
 * @template A the type of artist
 * @template G the type of genre
 * @template T the type of track
 */
export interface Single<A = string, G = string, T = string> {
  _id: string;
  name: string;
  cover: string;
  plays: number;
  year: number;
  artists: A[];
  genres: G[];
  tracks: T[];
}
