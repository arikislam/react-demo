import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App";

interface GameHeadingProps {
    gameQuery: GameQuery
}

export const GameHeading = ({gameQuery}: GameHeadingProps) => {
    return (
        <Heading as="h1">{gameQuery.platform?.name || ''} {gameQuery.genre?.name || ''} Games</Heading>
    );
};