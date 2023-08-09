
import {HStack, Image, Text} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import {SearchInput} from "./SearchInput";

interface Props {
    onSearch: (search: string) => void
}


const NavBar = ({onSearch}: Props) => {
    return (
        <HStack padding="10px">
            <Image src={logo} boxSize="50px"/>
            <SearchInput findGames={(searchText) => onSearch(searchText)}/>
            <ColorModeSwitch/>

        </HStack>
    )
}

export default NavBar;