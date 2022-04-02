import { createContext, useState } from "react";

export const FilterSearchContext = createContext(null);

export function FilterSearchProvider({ children }) {
    const [serchText, setSerchText] = useState("")

    const value = {
        serchText,
        setSerchText
    };

    return (
        <FilterSearchContext.Provider value={value}>{children}</FilterSearchContext.Provider>
    );
}