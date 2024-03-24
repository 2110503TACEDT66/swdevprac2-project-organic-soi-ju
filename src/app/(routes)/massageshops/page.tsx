import getShops from "@/libs/getShops";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import ShopList from "@/components/ShopList";

export default function MassageShops () {

    const shops = getShops();

    return (
        <main className="bg-gray-100">
            <Suspense fallback={ <p className="font-semibold text-center my-2">LOADING ...<LinearProgress/></p>}>
                <ShopList shopJson={shops}/>
            </Suspense>
        </main>
    );
}