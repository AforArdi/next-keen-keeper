import StatsPieChart from "@/components/piechart/StatsPieChart";

const friendsPromise = async ()=>{
    const res = await fetch('http://localhost:3000/data.json');
    // const res = await fetch('http://next-keen-keeper-6oolxvhlu-aforardis-projects.vercel.app/data.json');
    const data = await res.json();
    return data;
}

const StatsPage = async () => {
    const friends = await friendsPromise();

    return ( 
        <div className="container mx-auto my-8">
            <h2 className="font-bold text-4xl text-center">Friendship Analytics</h2>
            <StatsPieChart></StatsPieChart>
        </div>
     );
}
 
export default StatsPage;