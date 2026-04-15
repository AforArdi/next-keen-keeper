import { CiCirclePlus } from "react-icons/ci";
import BannerStatus from "./BannerStatus";

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
                <BannerStatus></BannerStatus>
            </div>
        </div>
    );
}

export default Banner;