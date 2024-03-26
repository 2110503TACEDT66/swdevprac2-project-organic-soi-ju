import Link from "next/link";
import { ReservationItem, ShopItem } from "../../../interface";

export default function ReservationCard({
    reservation
}: {
    reservation: ReservationItem

}) { // may need to change any to ReservationItem

    const massageShop = reservation.massage_shop as ShopItem;
    const localDate = new Date(reservation.reserveDate).toLocaleString();

    return (
        <div className="flex flex-row bg-gray-50 w-[100%] h-[30%] p-6 text-primary items-center relative shadow-md rounded-md">
            <div className="flex flex-col gap-10 p-4 ">
                <div className="flex flex-col text-xl mt-3">
                {massageShop.name}
                </div>
                <div className="flex flex-col mb-3">

                    <div>Massage Date : {localDate}</div>
                    <div>{massageShop.tel}</div>
                </div>
            </div>
            <div className="absolute right-6 bottom-5">
                <div className="flex flex-row gap-3">
                    <Link href={`/massageshops/${massageShop.id}`}>
                        <button className="border border-primary  text-primary rounded-md p-1 
                        hover:bg-primary hover:text-jason transition-colors">Visit Shop</button>
                    </Link>
                    <Link href={`/reservations/${reservation._id}`}>
                        <button className="border border-primary  text-primary rounded-md p-1 
                        hover:bg-primary hover:text-jason transition-colors">View info</button>
                    </Link>


                </div>
            </div>
        </div>
    )
}
    