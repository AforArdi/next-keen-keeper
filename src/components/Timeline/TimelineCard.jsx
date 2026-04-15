'use client'

const TimelineCard = ({friend, formattedDate,btnAction, Icon}) => {
    // console.log(friend.name);
    return ( 
        <div className="flex items-center gap-4 my-6 p-3 rounded-lg shadow-md">
            <Icon size={40}></Icon>
            <div>
                <h2><span className="font-bold">{btnAction}</span> with {friend.friend.name}</h2>
                {formattedDate}
            </div>
        </div>
     );
}
 
export default TimelineCard;