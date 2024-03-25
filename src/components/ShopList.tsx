import { ShopJson } from "../../interface";
import Link from "next/link";
import ShopCard from "./ShopCard";
import getShops from "@/libs/getShops";
// {shopJson} : {shopJson: Promise<ShopJson>}
export default async function ShopList () {
    
    // const shopJsonReady = await shopJson;
    const shopJson = await getShops() as ShopJson;

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-center my-3 font-bold text-2xl">Shops List</h1>
            {
                shopJson.data.map((shopItem) => (
                    
                    <ShopCard shop={shopItem}></ShopCard>
                
                ))
            }
        </div>
    );
}