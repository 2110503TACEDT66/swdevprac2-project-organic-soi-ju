'use server'
import deleteReservation from "@/libs/deleteReservation";
import addReservation from "@/libs/addReservation";
import { revalidateTag } from "next/cache";

export async function deleteAndRevalidate(token: string, rid: string) {

    deleteReservation(token, rid);
    revalidateTag('reservations');

}

export async function createAndRevalidateShop(){
   
    revalidateTag('reservations');
    
}