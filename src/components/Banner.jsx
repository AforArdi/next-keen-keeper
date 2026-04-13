import { CiCirclePlus } from "react-icons/ci";

const Banner = () => {
    return (
        <div className="flex flex-col justify-center items-center my-10">
            <div className="flex flex-col justify-center items-center text-center gap-4 mb-4">
                <h2 className="font-bold text-5xl">Friends to keep close in your life</h2>
                <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
                <button className="btn bg-[#244D3F] text-white"><CiCirclePlus></CiCirclePlus> Add a Friend</button>
            </div>
            <div>
                {/* card parent */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body text-center">
                            <h2 className="font-semibold text-3xl">10</h2>
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
            </div>
        </div>
    );
}

export default Banner;