import FriendCard from "./FriendCard";
// import data from '../../public/data.json';

const friendsPromise = async ()=>{
    const res = await fetch('https://next-keen-keeper.vercel.app/data.json', {
        cache: 'no-store'
    });
    // const res = await fetch('http://next-keen-keeper-6oolxvhlu-aforardis-projects.vercel.app/data.json');
    const data = await res.json();
    return data;
}

const AllFriends = async () => {
    const friends = await friendsPromise();
    // const friends = data;
    // console.log(friends);

    return ( 
        <div className="container mx-auto">
            <div className="divider"></div>
            <div>
                <h2 className="font-semibold text-2xl">All Friends</h2>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-6">
                {
                    friends.map(friend=>{
                        return (
                            <FriendCard key={friend.id} friend={friend}></FriendCard>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default AllFriends;