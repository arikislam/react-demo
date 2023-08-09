import useData from "./useData";
import {Genre} from "./useGenres";
import {Platform} from "./usePlatforms";
import {GameQuery} from "../App";

export interface Platforms {
    id: number,
    name: string;
    background_image: string;
    slug: string;
    parent_platform: { platform: Platform } [],
}

export interface Game {
    id: number;
    name: string,
    background_image: string;
    parent_platforms: { platform: Platforms } [],
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {
    params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sort
    }
}, [gameQuery]);

export default useGames;