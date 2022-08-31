import { Album } from "./album.types";
import { Artist } from "./artist.types";
import { Ep } from "./ep.types";
import { Genre } from "./genre.types";
import { Playlist } from "./playlist.types";
import { Single } from "./single.types";
import { Track } from "./track.types";

type SearchedArtist = Omit<Artist, "albums" | "eps" | "singles">;
type SearchedAlbum = Album<
  Pick<Artist, "_id" | "name">,
  Genre,
  Omit<
    Track<Pick<Artist, "name" | "_id">, Pick<Artist, "name" | "_id">>,
    "lyrics"
  >
>;

type SearchedEp = Ep<
  Pick<Artist, "_id" | "name">,
  Genre,
  Omit<
    Track<Pick<Artist, "name" | "_id">, Pick<Artist, "name" | "_id">>,
    "lyrics"
  >
>;

type SearchedSingle = Single<
  Pick<Artist, "_id" | "name">,
  Genre,
  Omit<
    Track<Pick<Artist, "name" | "_id">, Pick<Artist, "name" | "_id">>,
    "lyrics"
  >
>;

type SearchedPlaylist = Playlist;

export interface SearchResponse {
  artists: SearchedArtist[];
  albums: SearchedAlbum[];
  eps: SearchedEp[];
  singles: SearchedSingle[];
  playlists: SearchedPlaylist[];
}
