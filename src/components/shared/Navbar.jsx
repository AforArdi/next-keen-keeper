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
        go: 'Stats',
        icon: <TfiStatsUp></TfiStatsUp>
    }
]

const Navbar = () => {
    return ( 
        // took help here to make the navbar center
        <div className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto flex-col justify-center items-center md:flex-row gap-4 py-4 md:py-2">
                <div className="navbar-start w-full justify-center md:justify-start md:w-1/2">
                    <p className="text-2xl font-bold">
                        Keen<span className="text-[#244D3F]">Keeper</span>
                    </p>
                </div>
                <div className="navbar-end w-full justify-center md:justify-end md:w-1/2 flex items-center gap-4">
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