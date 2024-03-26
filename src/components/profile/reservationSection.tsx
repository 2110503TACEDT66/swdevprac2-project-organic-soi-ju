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
        <div className="flex flex-col bg-jason rounded-md shadow-md items-center justify-start w-[70%] h-full p-5">
            <div className=" text-primary font-bold text-2xl my-5">
                Reservations
            </div>
            <div className="flex flex-col items-center justify-start gap-5 w-[90%] h-full overflow-y-auto ">
                {
                    reservations.data.map((reservation: ReservationItem) => (
                        <ReservationCard reservation={reservation} />
                    ))
                }
            </div>
        </div>        
    )
}