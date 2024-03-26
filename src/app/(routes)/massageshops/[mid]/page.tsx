// display one shop
import Image from "next/image";
import getShop from "@/libs/getShop";
import Link from "next/link";
import { decorateLink } from "@/utils/decorateLink";

export default async function ShopPage({params} : {params: {mid: string}}) {
    
    const shop = await getShop(params.mid);
    
    return (
        <main >
            <div className="flex flex-col h-full items-center text-primary">
                <h1 className="text-center my-6 font-bold text-2xl">Shop Info</h1>
                <div className="flex flex-row bg-jason rounded-md shadow-md w-[95%] h-[80vh]">
                    <div className="w-[60%] h-auto relative">
                        <Image src={shop.data.picture? decorateLink(shop.data.picture) : '/images/massage1.png'} alt="Shop Picture" fill={true}
                        className="rounded-l-md"/>
                    </div>
                    <div className="flex flex-col justify-start items-center text-center w-[40%] gap-5 px-[100px] py-2 relative my-[5%]">
                        <div>
                        <p className="inline font-semibold">Name<br/> </p>{ shop.data.name }
                        </div>
                        <div>
                            <p className="inline font-semibold">Address <br/></p>{ shop.data.address }, { shop.data.district }<br/>{ shop.data.province } { shop.data.postalcode }
                        </div>
                       
                        <div>
                            <p className="inline font-semibold">Open-Close<br/> </p>{ shop.data.open_time } - { shop.data.close_time }
                        </div>
                        <div>
                            <p className="inline font-semibold">Tel: </p>{ shop.data.tel }
                        </div>
                        <div>
                            <p className="inline font-semibold">Description<br/> </p>This shop offers variety of massages and body treatments. We have dragon scale skin scrubber, whale testicle oil, soul-burning stone, and much much more!
                        </div>
                        <div className="m-auto">
                            <Link href={`/reserveshop?id=${params.mid}&shop=${shop.data.name}`}>
                                <button className="rounded-md shadow-md bg-primary text-white w-auto px-3 py-4 hover:shadow-lg hover:bg-gray-800 transition-all ">
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