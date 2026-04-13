import Link from "next/link";
import { CiTimer } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import NavButtons from "./NavButtons";

const navItems = [
    {
        path: '/',
        go: 'Home',
        icon: <IoHomeOutline></IoHomeOutline>
    },
    {
        path: '/timeline',
        go: 'Timeline',
        icon: <CiTimer></CiTimer>
    },
    {
        path: '/stats',
        go: 'Home',
        icon: <TfiStatsUp></TfiStatsUp>
    }
]

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
                    {
                        navItems.map((item, i)=> {
                            return (
                                <NavButtons key={i} to={item.path}>{item.icon} {item.go}</NavButtons>
                            )
                        })
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;