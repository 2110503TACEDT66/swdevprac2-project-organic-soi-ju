'use client'

import deleteReservation from "@/libs/deleteReservation";
import { revalidateTag } from "next/cache";
import { useRouter } from "next/navigation";
import { revalidateTag } from "next/cache";
import { deleteAndRevalidate } from "@/utils/resActions";

export default function CancelButton({token, rid} : {token: string, rid: string}) {

    const router = useRouter();

   
    return (
        <button className="p-3 bg-doomred rounded-md hover:bg-doomered transition-colors "
        onClick={() => { deleteAndRevalidate(token, rid); router.push('/profile')}}>Cancel Reservation</button>
    );
}