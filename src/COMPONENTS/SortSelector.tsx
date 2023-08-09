import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";

interface Props {
    sortGames: (sort: string) => void,
    sorted: string | null
}


export const SortSelector = ({sortGames, sorted}: Props) => {
    const sortOptions = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date Added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: '-matacritic', label: 'Popularity'},
        {value: '-rating', label: 'Rating'},

    ]
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Sort By: {sorted ? sortOptions.find(option => option.value === sorted)?.label : 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOptions.map(option => <MenuItem onClick={() => sortGames(option.value)} key={option.value}>{option.label}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};