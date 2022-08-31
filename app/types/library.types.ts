/**
 * @template A the type of artist
 * @template E the type of ep
 * @template Fa the type of favorite
 * @template Fo the type of follow
 * @template P the type of playlist
 * @template R the type of radio
 * @template S the type of single
 */
export interface Library<
  A = string,
  E = string,
  Fa = string,
  Fo = string,
  P = string,
  R = string,
  S = string
> {
  _id: string;
  albums: A[];
  eps: E[];
  singles: S[];
  playlists: P[];
  favorites: Fa[];
  follows: Fo[];
  radios: R[];
}
