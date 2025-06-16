import React from "react";
import * as styles from "../styleNav";
import { Search } from 'lucide-react';

interface SearchContainerProps {
    clicked: boolean;
    isClicked: () => void;
}



const SearchContainer: React.FC<SearchContainerProps> = ({ clicked, isClicked }) => {
    return (
        <styles.SearchContainer expanded={clicked}>
            <styles.ButtonNav onClick={isClicked}><Search /></styles.ButtonNav>
            <input type="text" placeholder="search for food, restaurant..." />
        </styles.SearchContainer>
    )
}


export default SearchContainer