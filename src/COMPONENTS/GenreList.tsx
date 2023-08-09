import useGenres, {Genre} from "../hooks/useGenres";
import {Button, HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/card-image-url";

interface Props {
    onGenreSelect: (genre: Genre) => void
    selectedGenre: Genre | null
}

export const GenreList = ({onGenreSelect, selectedGenre}: Props) => {
    const {data, isLoading, error} = useGenres();

    if (isLoading) return <Spinner/>;

    if (error) return null;

    return (
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image
                            boxSize='32px'
                            borderRadius={8}
                            src={getCroppedImageUrl(genre.image_background)}/>
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} variant='link'
                                onClick={() => onGenreSelect(genre)} fontSize='lg'>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>

    );
};