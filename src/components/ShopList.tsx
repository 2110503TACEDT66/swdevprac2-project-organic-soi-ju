import { ShopJson } from "../../interface";
import Link from "next/link";
import ShopCard from "./ShopCard";

export default async function ShopList ({shopJson} : {shopJson: Promise<ShopJson>}) {
    
    const shopJsonReady = await shopJson;

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center my-3 font-bold text-2xl">Shops List</h1>
            {
                shopJsonReady.data.map((shopItem) => (
                    
                    <ShopCard key={shopItem.id} shop={shopItem} imgSrc={shopItem.picture? shopItem.picture : '/images/massage1.png'}></ShopCard>
                
                ))
            }
        </div>
    );
}