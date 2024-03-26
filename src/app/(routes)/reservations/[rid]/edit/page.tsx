import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getReservation from "@/libs/getReservation";
import { getServerSession } from "next-auth";
import { ReservationItem } from "../../../../../../interface";
import getUserProfile from "@/libs/getUserProfile";
import updateReservation from "@/libs/updateReservation";
import ShopCard from "@/components/ShopCard";
import getShop from "@/libs/getShop";
import CancelButton from "@/components/CancelButton";
import Link from "next/link";
import EditForm from "./form";

export default async function ReservationPage({params}:{params: {rid: string}}) {

    const session = await getServerSession(authOptions);

    if(!session || !session.user.token) return null;

    const profile = await getUserProfile(session.user.token); // this is not good
    const reservation = await getReservation(session.user.token, params.rid);
    const mid = reservation.data.massage_shop.id;
    

    const res: ReservationItem = reservation.data;
    const reserveDate = new Date(res.reserveDate).toLocaleString();

    const shop = await getShop(mid);

    return (
        <main>
             <EditForm token={session.user.token} rid={params.rid} shop={shop}/>
        </main>
    )
}