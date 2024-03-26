import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile";
export default async function UserInfoBox() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null;
    
    const profile = await getUserProfile(session.user.token);

    return (
        <div className="flex flex-col bg-gray-100 w-full p-5 rounded-lg h-full">
            <div className="flex flex-row justify-center items-center">
                <div className="text-xl font-bold mb-3">User Info</div>
            </div>
            <div className="flex flex-row justify-between">
                
                <div className="text-primary font-bold text-lg">
                        {/* show all user field beautifully */}
                        <div className="flex flex-col">
                                <div className="font-bold">
                                    <div>Name: {profile.data.name}</div>
                                </div>
                                <div className="font-bold">
                                    <div>Email: {profile.data.email}</div>
                                </div>
                                <div className="font-bold">
                                    <div>Tel: {profile.data.tel}</div>
                                </div>
                        </div>
                </div>
            </div> 
        </div>
            
        
    )

}