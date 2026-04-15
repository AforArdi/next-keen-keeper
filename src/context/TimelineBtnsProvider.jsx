'use client'
import { createContext, useState } from "react";

export const timelineContext = createContext();

const TimelineBtnsProvider = ({ children }) => {
    const [timelines, setTimelines] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const data = {
        timelines, setTimelines, searchValue, setSearchValue
    }

    return (
        <timelineContext.Provider value={data}>
            {children}
        </timelineContext.Provider>
    );
}

export default TimelineBtnsProvider;