
import getShops from "@/libs/getShops";
import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import ShopList from "@/components/ShopList";

export default function MassageShops () {

    // const shops = getShops();

    return (
        <main className="">

            <div>
                <div className="text-center my-3 font-bold text-2xl text-primary">Shops List</div>
            </div>
            <div>
            <Suspense fallback={ <p className="font-semibold text-center text-primary my-2">LOADING ...<LinearProgress/></p>}>
                <ShopList/>
            </Suspense>
            </div>
        </main>
    );
}