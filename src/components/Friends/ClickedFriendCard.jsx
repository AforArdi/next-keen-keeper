import Image from "next/image";
import { FaBoxArchive } from "react-icons/fa6";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { MdOutlineDeleteForever } from "react-icons/md";
import DetailsPageButtons from "../DetailsPageButtons/DetailsPageButtons";

const ClickedFriendCard = ({clickedFriend, currentStatusBadgeClass}) => {
    return ( 
        <div className="container mx-auto grid md:grid-cols-2 gap-4 my-15">
            {/* details div on the left */}
            <div className="flex flex-col gap-4">
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
                        <p><span className="font-bold">Email:</span> {clickedFriend.email}</p>
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
                <div className="grid grid-cols-3 gap-4">
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body text-center">
                            <h2 className="font-semibold text-2xl">{clickedFriend.days_since_contact}</h2>
                            <p className="text-[#64748B]">Days Since Contact</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body text-center">
                            <h2 className="font-semibold text-2xl">{clickedFriend.goal}</h2>
                            <p className="text-[#64748B]">Goal (Days)</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 card-md shadow-sm">
                        <div className="card-body text-center">
                            <h2 className="font-semibold text-2xl">{clickedFriend.next_due_date}</h2>
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
                        {/* use client */}
                        <DetailsPageButtons clickedFriend={clickedFriend}></DetailsPageButtons>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ClickedFriendCard;