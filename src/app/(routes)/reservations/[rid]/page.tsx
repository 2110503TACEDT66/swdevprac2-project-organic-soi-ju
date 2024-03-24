import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getReservation from "@/libs/getReservation";
import { getServerSession } from "next-auth";
import { ReservationItem } from "../../../../../interface";
import getUserProfile from "@/libs/getUserProfile";
import ShopCard from "@/components/ShopCard";
import getShop from "@/libs/getShop";

export default async function ReservationPage({
    params
}:{
    params: {
        rid: string
    }

}) {

    const session = await getServerSession(authOptions);

    if(!session || !session.user.token) return null;

    const reservationJson = await getReservation(session.user.token,params.rid);

    const profile = await getUserProfile(session.user.token); // this is not good

    



    const reservation: ReservationItem = reservationJson.data;
    const reserveDate = new Date(reservation.reserveDate).toLocaleString();
    const shop = await getShop(reservation.massage_shop.id);

    return (
        <div className="h-[90vh]">
            <div className="w-[90vw] h-[90%] p-[5em] bg-jason m-auto mt-10 rounded-lg shadow-xl flex flex-col justify-between">
                <div className="flex flex-col gap-5 items-center">
                    <div className="text-primary text-center text-[30px]">Reservation </div>
                    <div className="text-primary text-[20px] mt-10 text-center"> {profile.data.name} </div>
                    <div className="text-primary text-[20px] text-center"> Massage Date : {reserveDate} </div>
                    <div>
                        <button className="p-3 bg-doomred rounded-md hover:bg-doomered transition-colors ">Cancel Reservation</button>
                    </div>
                </div>
                <div className="w-full  flex justify-center" >
                    <ShopCard shop={shop.data} />
                </div>
            </div>
        </div>
    )
}