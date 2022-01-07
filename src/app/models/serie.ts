import {Character} from "./character";

export interface Serie {
  id: string;
  studio: string;
  name: string;
  genre: string;
  movie: boolean;
  episodes: number;
  season: number;
  yearAired: number;
  characters: Character[];
}
