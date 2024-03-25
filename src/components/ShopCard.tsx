import Image from "next/image";
import Link from "next/link";
import InteractiveCard from "./InteractiveCard";
import { ShopItem } from "../../interface";


export default function ShopCard ({shop}: {shop: ShopItem}) {
    return (
        <InteractiveCard>
            <div className="w-[25%] relative">
                <Image src={'/images/massage1.png'} alt='Shop Picture' fill={true}></Image>
            </div>
            <div className="flex flex-col justify-center p-3 m-2 w-[45%]">
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
            <div className="w-[30%] flex flex-col justify-center">
                <div className="flex flex-row justify-center">
                    <Link href={`/massageshops/${shop.id}`}>
                        <button className="rounded-md shadow-md bg-doomred text-white w-auto px-6 py-1 hover:bg-red-400">
                            Info
                        </button>                     
                    </Link>
 
                </div>
                
            </div>
            
        </InteractiveCard>
    );
}