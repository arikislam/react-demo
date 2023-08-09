import {Grid, GridItem, Show, Text} from "@chakra-ui/react"
import NavBar from "./COMPONENTS/NavBar";
import GameGrid from "./COMPONENTS/GameGrid";
import {GenreList} from "./COMPONENTS/GenreList";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import {PlatformSelectors} from "./COMPONENTS/PlatformSelectors";
import {Platform} from "./hooks/usePlatforms";

export interface GameQuery {
    genre: Genre | null,
    platform: Platform | null
}


function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (

        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }} templateColumns={{
            base: "1fr",
            lg: "200px 1fr"
        }}>
            <GridItem area="nav">
                <NavBar/>
            </GridItem>

            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList  selectedGenre={gameQuery.genre} onGenreSelect={(genre) => {
                        setGameQuery({...gameQuery, genre});
                    }}/>
                </GridItem>
            </Show>

            <GridItem area="main">
                <PlatformSelectors
                    selectedPlatform={gameQuery.platform}
                    onSelectPlatform={(platform) => {
                    setGameQuery({...gameQuery, platform});
                }}/>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    );
}

export default App
