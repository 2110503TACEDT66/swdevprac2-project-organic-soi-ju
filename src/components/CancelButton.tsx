'use client'

import deleteReservation from "@/libs/deleteReservation";
import { revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";

export default function CancelButton({token, rid} : {token: string, rid: string}) {

    const router = useRouter();

    return (
        <button className="p-3 bg-doomred rounded-md hover:bg-doomered transition-colors "
        onClick={() => {deleteReservation(token, rid); router.push('/profile')}}>Cancel Reservation</button>
    );
}