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
import saveButton from "@/components/SaveButton"

export default function editForm({token, rid, shop}:{token:string, rid: string, shop: any}){
    
    const [reserveDate, setDate] = useState<Dayjs | null>(null);
    
    const { data: session } = useSession();

    return(
        <main>
            <div className="flex flex-col items-center">
                <h1 className="text-center my-3 font-bold text-2xl">Make Reservation</h1>
                <div className="flex flex-col bg-zinc-300 rounded-md shadow-md w-[95%] h-[400px] p-5">
                    <div className='h-[10%]'>
                        <Link href={`/reservations/${rid}`}>
                            <button className="rounded-md shadow-md bg-red-400 text-white w-auto px-3 py-1 hover:bg-red-600">
                                Back
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center justify-around h-[90%]'>
                        <h1 className="text-center font-bold text-xl">Shop: {shop.data.name}</h1>
                        <h1 className="text-center font-bold text-xl">Date: {reserveDate?.toString()}</h1>
                        <DateReserve onDateChange={(value: Dayjs) => setDate(value)}/>
                    </div>
                    <saveButton token={token} rid={rid} date={reserveDate}/>

                </div>
            </div>
        </main>
    );

    
}