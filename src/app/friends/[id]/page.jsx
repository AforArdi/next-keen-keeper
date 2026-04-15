import ClickedFriendCard from "@/components/Friends/ClickedFriendCard";
import { notFound } from "next/navigation";

const friendsPromise = async ()=>{
    const res = await fetch('https://next-keen-keeper.vercel.app/data.json');
    const data = await res.json();
    return data;
}

// custom metadata added from documents
export async function generateMetadata({ params }) {
    const res = await fetch('https://next-keen-keeper.vercel.app/data.json');
    const friends = await res.json();

    const { id } = await params;
    const friend = friends.find(f => f.id == id);

    if (!friend) {
        return {
            title: "Friend Not Found",
            description: "No friend data available"
        };
    }

    return {
        title: `${friend.name} | Friend Details`,
        description: `Details about ${friend.name} and their current status: ${friend.status}`,
    };
}

const FriendDetails = async ({params}) => {
    const friends = await friendsPromise();
    // console.log(params);
    const {id} = await params;
    const clickedFriend = friends.find(friend=> friend.id == id);
    // console.log(clickedFriend);
    if (!clickedFriend) {
        notFound(); 
    }

    const statusBadgeClass = {
        'almost due': 'badge-warning',
        'overdue': 'badge-error',
        'on-track': 'bg-[#244D3F]'
    }
    const currentStatusBadgeClass = statusBadgeClass[clickedFriend.status];

    return ( 
        <div>
            <ClickedFriendCard 
            clickedFriend={clickedFriend} 
            currentStatusBadgeClass={currentStatusBadgeClass}></ClickedFriendCard>
        </div>
     );
}
 
export default FriendDetails;