import {Grid, GridItem, Show, Text} from "@chakra-ui/react"
import NavBar from "./COMPONENTS/NavBar";
import GameGrid from "./COMPONENTS/GameGrid";
import {GenreList} from "./COMPONENTS/GenreList";
import {useState} from "react";
import {Genre} from "./hooks/useGenres";
import {PlatformSelectors} from "./COMPONENTS/PlatformSelectors";
import {Platform} from "./hooks/usePlatforms";



function App() {
    const [genre, setGenre] = useState<Genre| null>(null)
    const [platform, setPlatform] = useState<Platform| null>(null)

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
                    <GenreList  selectedGenre={genre} onGenreSelect={(genre) => {
                        setGenre(genre);
                    }}/>
                </GridItem>
            </Show>

            <GridItem area="main">
                <PlatformSelectors
                    selectedPlatform={platform}
                    onSelectPlatform={(platform) => {
                    setPlatform(platform);
                }}/>
                <GameGrid onSelectPlatform={platform} selectedGenre={genre}/>
            </GridItem>
        </Grid>
    );
}

export default App
