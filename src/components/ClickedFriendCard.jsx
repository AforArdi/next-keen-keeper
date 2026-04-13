import Image from "next/image";
import { FaBoxArchive } from "react-icons/fa6";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { IoVideocamOutline } from "react-icons/io5";
import { MdAddCall, MdOutlineDeleteForever } from "react-icons/md";
import { TiMessages } from "react-icons/ti";

const ClickedFriendCard = ({clickedFriend, currentStatusBadgeClass}) => {
    return ( 
        <div className="container mx-auto flex gap-4 my-15">
            {/* first div on the left */}
            <div className="flex flex-col gap-4 w-[50vh]">
                <div className="card bg-base-100 shadow-sm">
                    <figure className="px-10 pt-10">
                        <Image
                            src={clickedFriend.picture}
                            height={100}
                            width={100}
                            alt="Each Friends Picture"
                            className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{clickedFriend.name}</h2>
                        <p>{clickedFriend.days_since_contact}d ago</p>
                        <div>
                            {clickedFriend.tags && clickedFriend.tags.length > 0 && (
                                <div className="badge badge-secondary uppercase rounded-full font-semibold">{clickedFriend.tags[0]}</div>
                            )}
                        </div>
                        <div className={`badge text-white ${currentStatusBadgeClass}`}>{clickedFriend.status}</div>
                        <p>{clickedFriend.bio}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <button className="btn"><HiOutlineBellSnooze></HiOutlineBellSnooze> Snooze 2 Weeks</button>
                    <button className="btn"><FaBoxArchive></FaBoxArchive> Archive</button>
                    <button className="btn text-[#EF4444]"><MdOutlineDeleteForever></MdOutlineDeleteForever> Delete</button>
                </div>
            </div>

            {/* 2nd div on the right */}
            <div className="grid grid-cols-1 gap-4">
                {/* 3 card parent */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body text-center">
                            <h2 className="font-semibold text-3xl">{clickedFriend.days_since_contact}</h2>
                            <p className="text-[#64748B]">Days Since Contact</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body text-center">
                            <h2 className="font-semibold text-3xl">{clickedFriend.goal}</h2>
                            <p className="text-[#64748B]">Goal (Days)</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body text-center">
                            <h2 className="font-semibold text-3xl">{clickedFriend.next_due_date}</h2>
                            <p className="text-[#64748B]">Next Due</p>
                        </div>
                    </div>
                </div>
                {/* middle card */}
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <div className="flex items-center justify-between">
                            <p className="text-[20px]">Relationship Goal</p>
                            <button className="btn">Edit</button>
                        </div>
                        <p className="text-[18px]">Connect every: <span className="font-bold">30 Days</span></p>
                    </div>
                </div>

                {/* last interactive card */}
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <p className="text-[20px]">Quick Check-In</p>
                        <div className="flex items-center justify-between">
                            <button className="btn px-15 py-5"><MdAddCall></MdAddCall> Call</button>
                            <button className="btn px-15 py-5"><TiMessages></TiMessages> Text</button>
                            <button className="btn px-15 py-5"><IoVideocamOutline></IoVideocamOutline> Video</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ClickedFriendCard;