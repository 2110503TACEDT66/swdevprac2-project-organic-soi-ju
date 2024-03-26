'use server'
import { revalidateTag, revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { dbConnect } from "@/db/dbConnect"
import User from "@/db/models/Users"


export const addUser = async (adduserForm:FormData) => {
        const name = adduserForm.get("name")
        const email = adduserForm.get("email")
        const password = adduserForm.get("password")
        const tel = adduserForm.get("tel")

        try{
            await dbConnect()

            const user = await User.create({
                "name": name,
                "email": email,
                "password": password,
                "tel": tel
            })

        }catch(error){
            
            return ({
                error: "Failed to create user"
            })
        
        }
        revalidateTag("users")
        redirect('/api/auth/signin');
}