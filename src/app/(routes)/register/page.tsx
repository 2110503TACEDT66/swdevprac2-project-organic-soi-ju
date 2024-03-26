"use client"
import User from "@/db/models/Users"
import { dbConnect } from "@/db/dbConnect"
import { redirect } from "next/navigation"
import { revalidateTag } from "next/cache"
import { useState } from "react"
import { useRouter } from "next/navigation"
import userRegister from "@/libs/userRegister"
import userLogIn from "@/libs/userLogIn"

export default function RegisterPage(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const router = useRouter();
    const callbackUrl = "/api/auth/signin";

    const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    try {

        await userRegister(name, email, password, tel);

        // Redirect if successful
        router.push(callbackUrl);

    } catch (error) {
        // Display specific error messages
        if (error instanceof Error) {
        alert(error.message); // Display the error message
        } else {
        alert("An unknown error occurred. Please try again."); // Default message
        }
    }
}
    
    return(
        <div className="bg-gray-100 mx-10 my-10 px-5 py-2 h-full rounded-md flex flex-row justify-center">
            <form onSubmit={handleLogin} className=" my-5 mx-44 p-5 flex flex-col gap-10 items-center h-[80vh] w-full rounded-md">
                <div className="text-2xl text-primary text-semibold text-[64px] font-serif my-10">Register</div>
                <div className="flex items-center w-1/2 my-2">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name:</label>
                    <input type="text" required id="name" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}
                    className="bg-white border-2 border-gray-200 rounded-md w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400"/>
                </div>
                <div className="flex items-center w-1/2 my-2">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="email">Email:</label>
                    <input type="text" required id="email" name="email" placeholder="Example@example.com" onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border-2 border-gray-200 rounded-md w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400"/>
                </div>
                <div className="flex items-center w-1/2 my-2">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="password">Password:</label>
                    <input type="text" required id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                    className="bg-white border-2 border-gray-200 rounded-md w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400"/>
                </div>
                <div className="flex items-center w-1/2 my-2">
                    <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">Tel:</label>
                    <input type="text" required id="tel" name="tel" placeholder="0xx-xxxxxxx" onChange={(e) => setTel(e.target.value)}
                    className="bg-white border-2 border-gray-200 rounded-md w-full p-2 text-gray-700 
                    focus:outline-none focus:border-blue-400"/>
                </div>
                <button type="submit" className="bg-primary hover:bg-gray-700 text-white px-6 py-4 text-2xl rounded-lg">Submit</button>
            </form>
        </div>
    );
}