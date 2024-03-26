'use client'

import updateReservation from "@/libs/updateReservation";
import { useRouter } from "next/navigation";
import { RevalidateShop } from "@/utils/resActions";

export default function SaveButton({token, rid, date} : {token: string, rid: string, date:Date}){



    const router = useRouter();

    return (
        <button className="p-3 bg-soz rounded-md hover:bg-darksoz transition-colors "
        onClick={() => {updateReservation(token, rid, date); RevalidateShop(); router.push('/profile');
        setTimeout(() => {
            router.refresh();
        }, 500);}}>Save</button>
    );
}