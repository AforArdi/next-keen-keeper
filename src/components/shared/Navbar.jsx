import Link from "next/link";
import { CiTimer } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
    return ( 
        <div className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <p className="text-2xl font-bold">
                        Keen<span className="text-[#244D3F]">Keeper</span>
                    </p>
                </div>
                <div className="navbar-end flex items-center gap-4">
                    <Link href={'/'}>
                        <button className="btn"><IoHomeOutline></IoHomeOutline> Home</button>
                    </Link>
                    <Link href={'/timeline'}>
                        <button className="btn"><CiTimer></CiTimer> Timeline</button>
                    </Link>
                    <Link href={'/stats'}>
                        <button className="btn"><TfiStatsUp></TfiStatsUp> Stats</button>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;