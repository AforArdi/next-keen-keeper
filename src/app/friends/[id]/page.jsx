import ClickedFriendCard from "@/components/ClickedFriendCard";

const friendsPromise = async ()=>{
    const res = await fetch('http://localhost:3000/data.json');
    // const res = await fetch('http://next-keen-keeper-6oolxvhlu-aforardis-projects.vercel.app/data.json');
    const data = await res.json();
    return data;
}

const FriendDetails = async ({params}) => {
    const friends = await friendsPromise();
    // console.log(params);
    const {id} = await params;
    const clickedFriend = friends.find(friend=> friend.id == id);
    // console.log(clickedFriend);

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