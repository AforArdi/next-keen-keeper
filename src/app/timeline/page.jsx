'use client'

import TimelineCard from "@/components/TimelineCard";
import { timelineContext } from "@/context/TimelineBtnsProvider";
import { useContext } from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdAddCall, MdOutlineVideoCall } from "react-icons/md";

const TimelinePage = () => {
    const {callTimelines, textTimelines, videoTimelines} = useContext(timelineContext);
    const date = new Date();
    const formattedDate = date.toDateString();

    return ( 
        <div className="container mx-auto my-8">
            <h2 className="font-bold text-4xl text-center">Timeline</h2>
            {
                 callTimelines.length > 0 ? callTimelines.map(friend=>{
                    return (
                        <TimelineCard
                        key={friend.id}
                        friend={friend}
                        formattedDate={formattedDate}
                        btnAction='Call'
                        Icon={MdAddCall}
                        ></TimelineCard>
                    )
                }) : ''
            }
            {
                 textTimelines.length > 0 ? textTimelines.map(friend=>{
                    return (
                        <TimelineCard
                        key={friend.id}
                        friend={friend}
                        formattedDate={formattedDate}
                        btnAction='Text'
                        Icon={LuMessageCircleMore}
                        ></TimelineCard>
                    )
                }) : ''
            }
            {
                 videoTimelines.length > 0 ? videoTimelines.map(friend=>{
                    return (
                        <TimelineCard
                        key={friend.id}
                        friend={friend}
                        formattedDate={formattedDate}
                        btnAction='Video'
                        Icon={MdOutlineVideoCall}
                        ></TimelineCard>
                    )
                }) : ''
            }
        </div>
     );
}
 
export default TimelinePage;