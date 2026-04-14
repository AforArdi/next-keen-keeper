'use client'

import { timelineContext } from "@/context/TimelineBtnsProvider";
import { useContext } from "react";

const TimelinePage = () => {
    const {timelines, setTimelines} = useContext(timelineContext);

    return ( 
        <div className="container mx-auto my-8">
            <h2 className="font-bold text-4xl">Timeline</h2>
            {
                timelines.map(friend=> <h2>{friend.name}</h2>)
            }
        </div>
     );
}
 
export default TimelinePage;