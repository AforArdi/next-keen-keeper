'use client'

import { timelineContext } from "@/context/TimelineBtnsProvider";
import { useContext } from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { toast } from "react-toastify";

const DetailsPageButtons = ({clickedFriend}) => {
    const {timelines, setTimelines} = useContext(timelineContext);

    const handleTimelineBtn=(btnAction)=>{
        setTimelines([
            ...timelines,
            {friend: clickedFriend, action: btnAction}
        ])
        toast.success(`${btnAction} with ${clickedFriend.name}`);
    };
    
    return ( 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button onClick={()=> handleTimelineBtn('Call')} className="btn px-10 py-6"><MdAddCall></MdAddCall> Call</button>
            <button onClick={()=> handleTimelineBtn('Text')} className="btn px-10 py-6"><TiMessages></TiMessages> Text</button>
            <button onClick={()=> handleTimelineBtn('Video')} className="btn px-10 py-6"><IoVideocamOutline></IoVideocamOutline> Video</button>
        </div>
     );
}
 
export default DetailsPageButtons;