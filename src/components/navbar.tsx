import { getServerSession } from "next-auth"
import Link from "next/link"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { profile } from "console";

export default async  function Navbar() {

    const session = await getServerSession(authOptions);


    return (
        <div className="h-[50px] w-full bg-jason top-0 z-50 flex flex-row items-center text-primary justify-start md:justify-center font-semibold " >
            <div className="flex flex-row gap-10">
                <Link href="/">
                    <div className="">Home</div>
                </Link>
                <Link href="/massageshops">
                    <div className="">Shops</div>
                </Link>
                <Link href="/">
                    <div className="">Our Products</div>
                </Link>
                
            </div>
            <div className="absolute right-[2.5vw] flex flex-row gap-10">

                {/* session logic here later */}

                {
                    session ?
                        <>
                            <Link href="/profile">
                                <div className="">Profile</div>
                            </Link>

                            <Link href="/api/auth/signout">
                                <div className="">Logout</div>
                            </Link> 
                        </>
                        :
                        <>
                            <Link href="/register">
                                <div className="">Register</div>
                            </Link>
                            <Link href="/api/auth/signin">
                                <div className="">Login</div>
                            </Link> 
                        </>
                }
            </div>

        </div>
    )
}
