import { createContext, useState } from "react";

export const FilterSearchContext = createContext(null);

export function FilterSearchProvider({ children }) {
    const [searchText, setSearchText] = useState("")

    const value = {
        searchText,
        setSearchText
    };

    return (
        <FilterSearchContext.Provider value={value}>{children}</FilterSearchContext.Provider>
    );
}