import getShops from "@/libs/getShops";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import ShopList from "@/components/ShopList";
import ShopSkeleton from "@/components/shopSkeleton";

export default function MassageShops () {

    const shops = getShops();

    return (
        <main className="">
            <div>
                <div  className="text-center mt-10 font-bold text-2xl text-primary">Shops List</div>
            </div>
            <Suspense fallback={<ShopSkeleton />}>
                <ShopList shopJson={shops}/>
            </Suspense>
        </main>
    );
}