'use client'

import { timelineContext } from "@/context/TimelineBtnsProvider";
import { useContext } from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

const DetailsPageButtons = ({clickedFriend}) => {
    const {timelines, setTimelines} = useContext(timelineContext);

    const handleTimelineBtn=(action)=>{
        if(action === 'call'){
            
        }
        setTimelines([
            ...timelines,
            clickedFriend
        ])
    };
    // console.log(timelines);
    
    return ( 
        <div className="flex items-center justify-between gap-4">
            <button onClick={()=> handleTimelineBtn('call')} className="btn px-15 py-10 text-xl"><MdAddCall></MdAddCall> Call</button>
            <button onClick={()=> handleTimelineBtn('text')} className="btn px-15 py-10 text-xl"><TiMessages></TiMessages> Text</button>
            <button onClick={()=> handleTimelineBtn('video')} className="btn px-15 py-10 text-xl"><IoVideocamOutline></IoVideocamOutline> Video</button>
        </div>
     );
}
 
export default DetailsPageButtons;