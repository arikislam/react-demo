import {Grid, GridItem, Show} from "@chakra-ui/react"
import NavBar from "./COMPONENTS/NavBar";

function App() {
    return (
        <Grid templateAreas={`"nav nav" "aside main"`}>
            <GridItem area="nav" >
                <NavBar/>
            </GridItem>

            <GridItem area="aside" bg='gold'>
                Aside
            </GridItem>
            <GridItem area="main" bg='yellow'>
                Main
            </GridItem>
        </Grid>
    );
}

export default App
