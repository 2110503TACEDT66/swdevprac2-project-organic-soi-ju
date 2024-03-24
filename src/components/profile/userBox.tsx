
import Image from "next/image";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";


export default async function UserBox() {

    const session = await getServerSession(authOptions);
    if(!session || !session.user.token) return null;
    
    const profile = await getUserProfile(session.user.token);

    return (
        <div className="flex flex-row items-center justify-start w-[100%] h-full mt-3 p-5 gap-10 relative">
            <div className="border-solid rounded-md border-primary border-[2px] ">
            <Image  src="/images/house.svg" alt="logo" width={70} height={70} />
            </div>
            <div className=" my-5 text-primary font-bold text-xl">
                {
                    session ? 
                    <div>
                    Hello {profile.data.name}            
                    </div>
                    :
                    "Guest"
                }

            </div>
            <Link href="/api/auth/signout" className="absolute right-10">
                <button className="bg-doomred p-2 rounded-md hover:bg-doomered transition-colors ">Logout</button>
            </Link>
        </div>
    )
    }
