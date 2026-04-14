'use client'
import { createContext, useState } from "react";

export const timelineContext = createContext();

const TimelineBtnsProvider = ({children}) => {
    const [callTimelines, setCallTimelines] = useState([]);
    const [textTimelines, setTxtTimelines] = useState([]);
    const [videoTimelines, setVideoTimelines] = useState([]);

    const data = {
        callTimelines, setCallTimelines, textTimelines, setTxtTimelines, videoTimelines, setVideoTimelines
    }

    return ( 
        <timelineContext.Provider value={data}>
            {children}
        </timelineContext.Provider>
     );
}
 
export default TimelineBtnsProvider;