'use client'

import updateReservation from "@/libs/updateReservation";
import { useRouter } from "next/navigation";

export default function saveButton({token, rid, date} : {token: string, rid: string, date:Date}){
    const router = useRouter();

    return (
        <button className="p-3 bg-soz rounded-md hover:bg-darksoz transition-colors "
        onClick={() => {updateReservation(token, rid, date); router.push('/profile')}}>Save</button>
    );
}