/**
 * @template T the type of track
 */
export interface Radio<T = string> {
  _id: string;
  name: string;
  tracks: T[];
}
