import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

export const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Sort By: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem> Relevance</MenuItem>
                <MenuItem> Date aAdded </MenuItem>
                <MenuItem> Name </MenuItem>
                <MenuItem> Release Date </MenuItem>
                <MenuItem> Popularity </MenuItem>
                <MenuItem> Rating </MenuItem>
            </MenuList>
        </Menu>
    );
};