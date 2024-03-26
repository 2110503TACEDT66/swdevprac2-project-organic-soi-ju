import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getReservation from "@/libs/getReservation";
import { getServerSession } from "next-auth";
import { ReservationItem } from "../../../../../interface";
import getUserProfile from "@/libs/getUserProfile";
import ShopCard from "@/components/ShopCard";
import getShop from "@/libs/getShop";
import CancelButton from "@/components/CancelButton";
import Link from "next/link";

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
        <div className="h-[90vh]">
            <div className="w-[90vw] h-[90%] p-[5em] bg-jason m-auto mt-10 rounded-lg shadow-xl flex flex-col justify-between">
                <div className="flex flex-col gap-5 items-center">
                    <div className="text-primary text-center text-[30px]">Reservation </div>
                    <div className="text-primary text-[20px] mt-10 text-center"> { profile.data.name} </div>
                    <div className="text-primary text-[20px] text-center"> Massage Date : {reserveDate} </div>
                    <div>
                    <CancelButton rid={params.rid} token={session.user.token}/>
                    <Link href={`/reservations/${params.rid}/edit`}>
                        <button className="p-3 bg-soz rounded-md hover:bg-darksoz transition-colors ">
                            Edit Reservation
                        </button>
                    </Link>
                    </div>
                </div>
                <div className="w-full  flex justify-center" >
                    
                        <ShopCard shop={shop.data} imgSrc={shop.data.picture? shop.data.picture : '/images/massage1.png'}/>
                    
                    
                </div>
            </div>
        </div>
    )
}