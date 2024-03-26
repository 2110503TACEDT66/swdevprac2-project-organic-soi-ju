'use client'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getReservation from "@/libs/getReservation";
import { getServerSession } from "next-auth";
import { ReservationItem } from "../../../../../interface";
import getUserProfile from "@/libs/getUserProfile";
import ShopCard from "@/components/ShopCard";
import getShop from "@/libs/getShop";
import deleteReservation from "@/libs/deleteReservation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ReservationPage({params}:{params: {rid: string}}) {

    const {data: session} = useSession();

    if(!session || !session.user.token) return null;

    const [ res, setRes ] = useState(null);
    const [ profile, setProfile ] = useState(null);
    const [ shop, setShop ] = useState(null);
    const router = useRouter();
    

    //const profile = await getUserProfile(session.user.token); // this is not good

    useEffect(() => {
        const response = async () => {
            const reservation = await getReservation(session.user.token, params.rid);
            setRes(reservation);
            const profile = await getUserProfile(session.user.token);
            setProfile(profile);
            //alert(reservation.data.user + " " + profile.data.name);
        }
        setTimeout(() => {
            response();
        }, 500)
    }, []);
  
    const deleteRes = async () => {
        await deleteReservation(session.user.token, params.rid);
    }

    return (
        <div className="h-[90vh]">
            <div className="w-[90vw] h-[90%] p-[5em] bg-jason m-auto mt-10 rounded-lg shadow-xl flex flex-col justify-between">
                <div className="flex flex-col gap-5 items-center">
                    <div className="text-primary text-center text-[30px]">Reservation </div>
                    <div className="text-primary text-[20px] mt-10 text-center"> { profile? profile.data.name: null} </div>
                    <div className="text-primary text-[20px] text-center"> Massage Date : {res? res.data.reserveDate : null} </div>
                    <div>
                    <button className="p-3 bg-doomred rounded-md hover:bg-doomered transition-colors "
                    onClick={() => {deleteRes(); router.push('/profile')}}>Cancel Reservation</button>
                    </div>
                </div>
                <div className="w-full  flex justify-center" >
                    {
                        res? <ShopCard shop={res.data.massage_shop} imgSrc={res.data.massage_shop.picture? res.data.massage_shop.picture : '/images/massage1.png'}/> : null
                    }
                    
                </div>
            </div>
        </div>
    )
}