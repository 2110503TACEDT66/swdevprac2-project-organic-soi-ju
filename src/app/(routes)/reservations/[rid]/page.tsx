import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getReservation from "@/libs/getReservation";
import { getServerSession } from "next-auth";
import { ReservationItem } from "../../../../../interface";
import getUserProfile from "@/libs/getUserProfile";
import ShopCard from "@/components/ShopCard";
import getShop from "@/libs/getShop";
import CancelButton from "@/components/CancelButton";
import Link from "next/link";
import { decorateLink } from "@/utils/decorateLink";
import Image from "next/image";

export default async function ReservationPage({params}:{params: {rid: string}}) {

    const session = await getServerSession(authOptions);

    if(!session || !session.user.token) return null;

    const profile = await getUserProfile(session.user.token); // this is not good

    const reservation = await getReservation(session.user.token, params.rid);
    const mid = reservation.data.massage_shop.id;
    

    const res: ReservationItem = reservation.data;
    // const resUsername: = res.user;
    const reserveDate = new Date(res.reserveDate).toLocaleString();

    const shop = await getShop(mid);


    return (
        <div className="h-[90vh]">
            <div className="w-[90vw] h-[90%] bg-gray-100 m-auto mt-10 rounded-lg gap-5 shadow-xl flex flex-row-reverse justify-between">
                <div className="flex flex-col gap-10 items-center w-[65%] p-[5em] mt-10">
                    <div className="text-primary text-center text-[30px]">Reservation </div>
                    <div className="text-primary text-[20px] mt-10 text-center"> { res.user.name } </div>
                    <div className="text-primary text-[20px] text-center"> Massage Date : {reserveDate} </div>
                    <div className="flex flex-row gap-10 mt-10">
                        <CancelButton rid={params.rid} token={session.user.token}/>
                        <Link href={`/reservations/${params.rid}/edit`}>
                            <button className="p-3 bg-soz rounded-md hover:bg-darksoz transition-colors ">
                                Edit Reservation
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-[35%] bg-jason text-primary rounded-l-md p-5 ">

                        <div className="h-[50%] w-auto relative ">
                            <Image src={shop.data.picture? decorateLink(shop.data.picture) : '/images/massage1.png'} alt='Shop Picture' fill={true} className="rounded-md"></Image>

                        </div>
                        <div className="flex flex-col justify-between p-3 m-2 h-[40%] text-center gap-10">
                            <div>
                                <p className="inline font-semibold">Shop Name<br/> </p>{ shop.data.name }
                            </div>
                            <div>
                                <p className="inline font-semibold">Address <br/></p>{ shop.data.address }, { shop.data.district },{ shop.data.province } { shop.data.postalcode } 
                            </div>
                            <div>
                                <p className="inline font-semibold">Open-Close <br/> </p>{ shop.data.open_time } - { shop.data.close_time }
                            </div>
                            <div>
                                <p className="inline font-semibold">Tel<br/>  </p>{ shop.data.tel }
                            </div>
                        </div>
                </div>
                {/* <div className="flex flex-row w-[50%] h-full p-5 m-10 ml-[25%] shadow-md rounded bg-jason
                 text-primary hover:shadow-lg items-center justify-center transition-all scale-200" >
                        <div className="w-[25%] h-full relative m-3">
                            <Image src={shop.data.picture? decorateLink(shop.data.picture) : '/images/massage1.png'} alt="shop picture" 
                            fill={true}/>
                        </div>
                        <div className="w-[50%] h-full relative m-3">
                            <div>Shop: {shop.data.name}</div>
                            <div>Address: {shop.data.address} {shop.data.district}
                             {shop.data.province} {shop.data.postalcode}</div>
                             <div>Tel: {shop.data.tel}</div>
                             <div>Available: {shop.data.open_time} - {shop.data.close_time}</div>
                        </div>
                    
                    
                </div> */}
            </div>
        </div>
    )
}