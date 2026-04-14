'use client'

import { timelineContext } from "@/context/TimelineBtnsProvider";
import { useContext } from "react";

const TimelinePage = () => {
    const {callTimelines, textTimelines, videoTimelines} = useContext(timelineContext);

    return ( 
        <div className="container mx-auto my-8">
            <h2 className="font-bold text-4xl text-center">Timeline</h2>
            {
                callTimelines.length > 0 ? callTimelines.map(friend=> <h2 key={friend.id}>Called - {friend.name}</h2>) : ''
            }
            {
                textTimelines.length > 0 ? textTimelines.map(friend=> <h2 key={friend.id}>Texted - {friend.name}</h2>) : ''
            }
            {
                videoTimelines.length > 0 ? videoTimelines.map(friend=> <h2 key={friend.id}>Video - {friend.name}</h2>) : ''
            }
        </div>
     );
}
 
export default TimelinePage;