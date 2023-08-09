import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";
import {useRef} from "react";

interface Props {
    findGames: (search: string) => void
}

export const SearchInput = ({findGames}: Props) => {
    const searchGames = useRef<HTMLInputElement>(null)
    return (
        <form style={{width: '100%'}} onSubmit={(event) => {
            event.preventDefault();
            if (searchGames.current?.value) findGames(searchGames.current?.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input ref={searchGames} placeholder="Search..." borderRadius={20} variant='filled'/>
            </InputGroup>
        </form>
    );
};