import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/all";

export const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch/>}/>
            <Input placeholder="Search..." borderRadius={20} variant='filled' />
        </InputGroup>
    );
};