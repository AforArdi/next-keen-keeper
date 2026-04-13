'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavButtons = ({children, to}) => {
    const pathname = usePathname();
    return ( 
        <div>
            <Link href={to}>
                <button className={`btn ${pathname === to ? 'bg-[#244D3F] text-white' : ''}`}>{children}</button>
            </Link>
        </div>
     );
}
 
export default NavButtons;