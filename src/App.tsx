import {Grid, GridItem, Show, Text} from "@chakra-ui/react"
import NavBar from "./COMPONENTS/NavBar";
import GameGrid from "./COMPONENTS/GameGrid";

function App() {
    return (

        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}>
            <GridItem area="nav">
                <NavBar/>
            </GridItem>

            <Show above="lg">
                <GridItem area="aside" bg='blue'>
                    Aside
                </GridItem>
            </Show>

            <GridItem area="main" bg='yellow'>
                <GameGrid/>
            </GridItem>
        </Grid>
    );
}

export default App
