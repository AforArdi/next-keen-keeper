const friendsPromise = async ()=>{
    const res = await fetch('https://next-keen-keeper.vercel.app/data.json');
    // const res = await fetch('http://next-keen-keeper-6oolxvhlu-aforardis-projects.vercel.app/data.json');
    const data = await res.json();
    return data;
}

const BannerStatus = async () => {
    const friends = await friendsPromise();
    return ( 
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
            <div className="card bg-base-100 card-md shadow-sm">
                <div className="card-body text-center">
                    <h2 className="font-semibold text-3xl">{friends.length}</h2>
                    <p className="text-[#64748B]">Total Friends</p>
                </div>
            </div>
            <div className="card bg-base-100 card-md shadow-sm">
                <div className="card-body text-center">
                    <h2 className="font-semibold text-3xl">3</h2>
                    <p className="text-[#64748B]">On Track</p>
                </div>
            </div>
            <div className="card bg-base-100 card-md shadow-sm">
                <div className="card-body text-center">
                    <h2 className="font-semibold text-3xl">6</h2>
                    <p className="text-[#64748B]">Need Attention</p>
                </div>
            </div>
            <div className="card bg-base-100 card-md shadow-sm">
                <div className="card-body text-center">
                    <h2 className="font-semibold text-3xl">12</h2>
                    <p className="text-[#64748B]">Interactions This Month</p>
                </div>
            </div>
        </div>
     );
}
 
export default BannerStatus;