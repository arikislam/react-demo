import React from 'react';
import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image, Text} from "@chakra-ui/react";
import PlatformList from "./PlatformList";
import GameScore from "./GameScore";
import getCroppedImageUrl from "../services/card-image-url";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <GameScore score={game.metacritic}/>
                </HStack>
                <Heading fontStyle="2xl">{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard;