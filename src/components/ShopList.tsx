import { ShopJson } from "../../interface";
import Link from "next/link";
import ShopCard from "./ShopCard";

export default async function ShopList ({shopJson} : {shopJson: Promise<ShopJson>}) {
    
    const shopJsonReady = await shopJson;

    return (
        <div className="flex flex-row flex-wrap w-full items-center justify-center mt-5 ">
            {
                shopJsonReady.data.map((shopItem) => (
                    
                    <ShopCard key={shopItem.id} shop={shopItem} imgSrc={shopItem.picture? shopItem.picture : '/images/massage1.png'}></ShopCard>
                
                ))
            }
        </div>
    );
}