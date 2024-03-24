import getReservations from "@/libs/getReservations"
import ReservationCard from "./reservationCard"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { ReservationItem } from "../../../interface";

export default async function ReservationSection() {
   
    const session = await getServerSession(authOptions);
    if(!session || !session.user.token) return null;
    
    
    const reservations = await getReservations(session.user.token);

    console.log(reservations);

    

    return (
        <div className="flex flex-col items-center justify-start w-[70%] h-full mt-3 p-5 gap-10">
            <div className="my-5 text-primary font-bold text-2xl">
                Reservations
            </div>
            <div className="flex flex-col items-center justify-start gap-5 w-[90%]">
                {
                    reservations.data.map((reservation: ReservationItem) => (
                        <ReservationCard reservation={reservation} />
                    ))
                }
            </div>
        </div>        
    )
}