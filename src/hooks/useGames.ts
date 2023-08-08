import {useEffect, useState} from "react";
import apiClient from "../services/api-client";
import {CanceledError} from "axios";

export interface Platform {
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
    parent_platforms: { platform: Platform } [],
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}


const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        const controller = new AbortController();
        apiClient.get<FetchGamesResponse>('/games', {
            signal: controller.signal
        })
            .then(response => {
                setGames(response.data.results);
                setIsLoading(false);
            })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setIsLoading(false);
            })


        return () => controller.abort();
    }, []);


    return {games, error, isLoading};

}

export default useGames;