// page for making reservation and filling forms
'use client'

import dayjs, { Dayjs } from 'dayjs';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import DateReserve from '@/components/DateReserve';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import addReservation from '@/libs/addReservation';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { RevalidateShop } from '@/utils/resActions';

export default function ReserveShop () {

    const url = useSearchParams();
    const id = url.get('id');
    const shopName = url.get('shop');
    
    const [reserveDate, setDate] = useState<Dayjs | null>(null);
    
    const { data: session } = useSession();

    const router = useRouter();
    

    const reserveShop = () => {
        if (reserveDate && session && id) {
            
            addReservation(session.user.token, id, dayjs(reserveDate).toDate());
           
            RevalidateShop();
            
            router.push('/profile');
            setTimeout(() => {
                router.refresh();
            }, 800);
            
        }
    }

    return (
        <main>
            <div className="flex flex-col items-center text-primary h-[85vh]">
                <h1 className="text-center font-bold text-2xl my-6">Make Reservation</h1>
                <div className="flex flex-col bg-jason rounded-md shadow-md w-[95%] h-[80vh] p-5">
                    <div className='h-[10%]'>
                        <Link href={`/massageshops/${id}`}>
                            <button className="rounded-md shadow-md bg-primary text-white w-auto px-5 py-3 hover:bg-gray-700 transition-all">
                                Back
                            </button>
                        </Link>
                    </div>
                    <div className='flex flex-col items-center justify-start gap-10 h-[90%]'>
                        <h1 className="text-center font-bold text-[60px]">{shopName}</h1>
                        <h1 className="text-center font-bold text-2xl ">Date: {dayjs(reserveDate).toDate().toLocaleString()}</h1>
                        <DateReserve onDateChange={(value: Dayjs) => setDate(value)}/>
                        <button className="rounded-md shadow-md text-xl bg-primary text-white w-auto
                         px-4 py-5 hover:bg-gray-800 transition-all mt-[10vh]"
                        onClick={() => {
                            reserveShop();
                        }}>
                            Make Reservation
                        </button>
                    </div>
                    

                </div>
            </div>
        </main>
    );
}