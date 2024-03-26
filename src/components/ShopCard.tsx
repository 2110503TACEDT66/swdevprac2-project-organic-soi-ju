'use client'
import Image from "next/image";
import Link from "next/link";
import InteractiveCard from "./InteractiveCard";
import { ShopItem } from "../../interface";


export default function ShopCard ({shop, imgSrc}: {shop: ShopItem, imgSrc: string}) {


    return (
        <InteractiveCard>

            <div className="h-[60%] w-auto relative ">
                <Image src={imgSrc} alt='Shop Picture' fill={true}></Image>

            </div>
            <div className="flex flex-col justify-between p-3 m-2 h-[40%]">
                <div>
                    <p className="inline font-semibold">Name: </p>{ shop.name }
                </div>
                <div>
                    <p className="inline font-semibold">Address: </p>{ shop.address }, { shop.district }, 
                </div>
                <div>
                    { shop.province } { shop.postalcode }
                </div>
                <div>
                    <p className="inline font-semibold">Open-Close: </p>{ shop.open_time } - { shop.close_time }
                </div>
                <div>
                    <p className="inline font-semibold">Tel: </p>{ shop.tel }
                </div>
            </div>
            <div className="h-[10%] flex flex-col justify-center pb-5 pr-5">
                <div className="flex flex-col justify-center items-end ">
                    <Link href={`/massageshops/${shop.id}`}>
                        <button className="rounded-md shadow-md bg-doomred text-white w-auto px-6 py-1 hover:bg-red-400">
                            View
                        </button>                     
                    </Link>
 
                </div>
                
            </div>
            
        </InteractiveCard>
    );
}