/**
 * @template E the type of ep
 * @template A the type of album
 * @template S the type of single
 */
export interface Artist<A = string, E = string, S = string> {
  _id: string;
  name: string;
  image: string;
  albums: A[];
  eps: E[];
  singles: S[];
  followersCount: number;
}
