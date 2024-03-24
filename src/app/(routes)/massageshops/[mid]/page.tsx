// display one shop
import Image from "next/image";
import getShop from "@/libs/getShop";
import Link from "next/link";

export default async function ShopPage({params} : {params: {mid: string}}) {
    
    const shop = await getShop(params.mid);
    
    return (
        <main>
            <div className="flex flex-col items-center">
                <h1 className="text-center my-3 font-bold text-2xl">Shop Info</h1>
                <div className="flex flex-row bg-zinc-300 rounded-md shadow-md w-[95%] h-[400px] p-5">
                    <div className="w-[50%] h-auto relative">
                        <Image src='/images/massage1.png' alt="Shop Picture" fill={true}
                        className="shadow-md rounded-md"></Image>
                    </div>
                    <div className="flex flex-col justify-start px-5 py-2">
                        <div>
                        <p className="inline font-semibold">Name: </p>{ shop.data.name }
                        </div>
                        <div>
                            <p className="inline font-semibold">Address: </p>{ shop.data.address }, { shop.data.district }, 
                        </div>
                        <div>
                            { shop.data.province } { shop.data.postalcode }
                        </div>
                        <div>
                            <p className="inline font-semibold">Open-Close: </p>{ shop.data.open_time } - { shop.data.close_time }
                        </div>
                        <div>
                            <p className="inline font-semibold">Tel: </p>{ shop.data.tel }
                        </div>
                        <div>
                            <p className="inline font-semibold">Description: </p>This shop offers variety of massages and body treatments. We have dragon scale skin scrubber, whale testicle oil, soul-burning stone, and much much more!
                        </div>
                        <div className="my-5">
                            <Link href={`/reserveshop?id=${params.mid}&shop=${shop.data.name}`}>
                                <button className="rounded-md shadow-md bg-red-400 text-white w-auto px-3 py-1 hover:bg-red-600">
                                    Make Reservation
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}