"use client"
import dayjs, { Dayjs } from 'dayjs';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import DateReserve from '@/components/DateReserve';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import addReservation from '@/libs/addReservation';
import { useSession } from 'next-auth/react';
import updateReservation from '@/libs/updateReservation';
import SaveButton from "@/components/SaveButton"
import { ShopJson } from '../../../../../../interface';
import { ShopItem } from '../../../../../../interface';

export default function EditForm({token, rid, shopName}:{token:string, rid: string, shopName: string}){
    
    const [reserveDate, setDate] = useState<Dayjs | null>(null);
    
    const { data: session } = useSession();
    //get first item from data in shopjson as cast it as shopitem
 
    

    return(
        <main>
            <div className="flex flex-col items-center">
                <h1 className="text-center my-3 font-bold text-2xl">Make Reservation</h1>
                <div className="flex flex-col justify-center items-center bg-jason rounded-md shadow-md w-[95%] h-[80vh] p-5 relative">
                    <div className='h-[10%]'>
                        <Link href={`/reservations/${rid}`} >
                            <button className="rounded-md shadow-md bg-primary text-white w-auto px-4 py-2 hover:bg-gray-800 transition-all absolute left-4 top-4 ">
                                Back
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-col gap-10 items-center justify-start h-[90%] text-primary'>
                                <h1 className="text-center font-bold text-xl">Shop: {shopName}</h1>
                        <h1 className="text-center font-bold text-xl">Date: {dayjs(reserveDate).toDate().toLocaleString()}</h1>
                        <DateReserve onDateChange={(value: Dayjs) => setDate(value)}/>
                    </div>
                    <SaveButton token={token} rid={rid} date={dayjs(reserveDate).toDate()}/>

                </div>
            </div>
        </main>
    );

    
}