
import Image from "next/image";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { decorateLink } from "@/utils/decorateLink";


export default async function UserBox() {

    const session = await getServerSession(authOptions);
    if(!session || !session.user.token) return null;
    
    const profile = await getUserProfile(session.user.token);

    let imageSrc = '/images/house.svg';

    const localDate = new Date(profile.data.createdAt).toLocaleString();

    if(profile.data.picture) {
        imageSrc = decorateLink(profile.data.picture);
    }

    return (
        <div className="flex flex-row items-center justify-start w-[100%] h-1/4 mt-3 p-5 gap-5 relative">
            <div className="border-solid rounded-md border-primary border-[2px] ">
            <Image  src={imageSrc} alt="logo" width={70} height={70} />
            </div>
            <div className=" my-5 mr-5 text-primary font-bold text-xl">
                {
                    session ? 
                    <div>
                        <div>
                            {profile.data.name}            
                        </div>
                        <div className="text-sm">
                            Member since {localDate}
                        </div>
                    </div>
                    :
                    "Guest"
                }

            </div>
            <Link href="/api/auth/signout" className="absolute right-5 ">
                <button className="bg-doomred p-2 rounded-md hover:bg-doomered transition-colors ">Logout</button>
            </Link>
        </div>
    )
    }
