/**
 * @template A the type of artist
 * @template F the type of feat
 */
export interface Track<A = string, F = string> {
  _id: string;
  name: string;
  audio: string;
  cover: string;
  lirycs: string;
  eclipticContent: boolean;
  duration: number;
  artists: A[];
  feats: F[];
}
