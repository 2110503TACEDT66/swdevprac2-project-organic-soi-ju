
import Image from "next/image";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function UserBox() {

    const session = await getServerSession(authOptions);
    if(!session || !session.user.token) return null;
    
    const profile = await getUserProfile(session.user.token);

    return (
        <div className="flex flex-row items-center justify-start w-[40%] h-full mt-3 p-5 gap-10">
            <div className="border-solid rounded-md border-primary border-[2px]">
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

        </div>
    )
    }
