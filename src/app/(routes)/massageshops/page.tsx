import getShops from "@/libs/getShops";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import ShopList from "@/components/ShopList";

export default function MassageShops () {

    const shops = getShops();

    return (
        <main className="">
            <Suspense fallback={ <p className="font-semibold text-center text-primary my-2">LOADING ...<LinearProgress/></p>}>
                <ShopList shopJson={shops}/>
            </Suspense>
        </main>
    );
}