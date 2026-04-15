import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
    const statusBadgeClass = {
        'almost due': 'badge-warning',
        'overdue': 'badge-error',
        'on-track': 'bg-[#244D3F]'
    }
    const currentStatusBadgeClass = statusBadgeClass[friend.status];

    return (
        <Link href={`/friends/${friend.id}`} className="card bg-base-100 shadow-sm">
            <figure className="px-10 pt-10">
                <Image
                    src={friend.picture}
                    height={100}
                    width={100}
                    alt="Each Friends Picture"
                    className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{friend.name}</h2>
                <p>{friend.days_since_contact}d ago</p>
                <div>
                    {friend.tags && friend.tags.length > 0 && (
                        <div className="badge badge-secondary uppercase rounded-full font-semibold">{friend.tags[0]}</div>
                    )}
                </div>
                <div className={`badge text-white ${currentStatusBadgeClass}`}>{friend.status}</div>
            </div>
        </Link>
    );
}

export default FriendCard;