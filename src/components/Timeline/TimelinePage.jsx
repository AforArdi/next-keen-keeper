'use client'

import TimelineCard from "@/components/Timeline/TimelineCard";
import { timelineContext } from "@/context/TimelineBtnsProvider";
import { useContext, useEffect, useState } from "react";
import { CgSearchLoading } from "react-icons/cg";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdAddCall, MdOutlineVideoCall } from "react-icons/md";

const Timeline = () => {
    const {timelines, searchValue, setSearchValue} = useContext(timelineContext);
    const date = new Date();
    const formattedDate = date.toDateString();
    // console.log(formattedDate);

    const icons = {
        'Call': MdAddCall,
        'Text': LuMessageCircleMore,
        'Video': MdOutlineVideoCall,
    }
    const [filtered, setFiltered] = useState('all');

    // took help with || and &&, casue I got stuck inside the if block of last commit - ae57bba
    const filteredTimelines = timelines.filter(item => {
        const matchesCategory = filtered === 'all' || item.action.toLowerCase() === filtered;

        const matchesSearch = searchValue.trim() === '' || 
                            item.friend.name.toLowerCase().includes(searchValue.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });
        
    // console.log(filteredTimelines);

    return ( 
        <div className="container mx-auto my-8">
            <h2 className="font-bold text-4xl text-center">Timeline</h2>

            <div className="flex items-center justify-between">
                {/* sorting dropdown */}
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Filter Timeline</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=> setFiltered('all')}><a>All</a></li>
                        <li onClick={()=> setFiltered('call')}><a>Call</a></li>
                        <li onClick={()=> setFiltered('text')}><a>Text</a></li>
                        <li onClick={()=> setFiltered('video')}><a>Video</a></li>
                    </ul>
                </div>

                {timelines.length > 0 ? 
                    <form className="join" onSubmit={(e) => e.preventDefault()}>
                        <label className="input rounded-lg">
                            <input type="text"
                            placeholder="Search Name"
                            name="search"
                            onChange={(e)=>setSearchValue(e.target.value)}
                            />
                        </label>
                        {/* <button type="submit" className="btn btn-primary join-item">Search</button> */}
                    </form> : ''
                }
            </div>

            {timelines.length === 0 ? 
                <div className="mt-6 py-40 shadow-md rounded-lg flex flex-col items-center">
                    <CgSearchLoading size={40}></CgSearchLoading>
                    <h2 className="text-center font-semibold">No timeline data available</h2>
                </div> :

                <div>
                    {
                        filteredTimelines.map((friend, index)=>{
                            return (
                                <TimelineCard
                                key={index}
                                friend={friend}
                                formattedDate={formattedDate}
                                btnAction={friend.action}
                                Icon={icons[friend.action]}
                                ></TimelineCard>
                            )
                        })
                    }
                </div>       
            }
        </div>
     );
}
 
export default Timeline;