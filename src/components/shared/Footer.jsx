import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    return ( 
        <footer className="footer footer-horizontal footer-center bg-[#1A8862] text-primary-content p-10">
            <div>
                <h2 className="font-bold text-5xl">KeenKeeper</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className="font-bold">Social Links</p>
                <div className="flex items-center justify-center gap-3">
                    <a href="" className="bg-base-100 p-2 rounded-full">
                        <GrInstagram color="black" size={10}></GrInstagram>
                    </a>
                    <a href="" className="bg-base-100 p-2 rounded-full">
                        <FaFacebook color="black" size={10}></FaFacebook>
                    </a>
                    <a href="" className="bg-base-100 p-2 rounded-full">
                        <FaXTwitter color="black" size={10}></FaXTwitter>
                    </a>
                </div>
            </div>
            <div className="border-t border-gray-400 w-full"></div>
            <div className="flex items-center justify-between w-full">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                <div className="flex items-center gap-3">
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Cookies</a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;