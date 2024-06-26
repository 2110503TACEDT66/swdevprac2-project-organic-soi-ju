'use client'

import deleteReservation from "@/libs/deleteReservation";
import { useRouter } from "next/navigation";
import { revalidateTag } from "next/cache";
import { deleteAndRevalidate } from "@/utils/resActions";

export default function CancelButton({token, rid} : {token: string, rid: string}) {

    const router = useRouter();

   
    return (
        <button className="p-3 bg-doomred rounded-md hover:bg-doomered transition-colors "
        onClick={() => { deleteAndRevalidate(token, rid); router.push('/profile'); 
        setTimeout(() => {
            router.refresh();
        }, 500); }}>Cancel Reservation</button>
    );
}