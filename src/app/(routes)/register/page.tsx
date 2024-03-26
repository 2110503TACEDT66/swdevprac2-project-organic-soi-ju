"use client"
import User from "@/db/models/Users"
import { dbConect } from "@/db/dbConnect"
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
        <div className="bg-gray-300 mx-10 my-10 px-5 py-2">
        <form onSubmit={handleLogin} className="bg-jason my-5 mx-44 rounded-lg p-5 flex flex-col items-center">
            <div className="text-2xl  text-semibold font-serif">Register</div>
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
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg">Submit</button>
        </form>
        </div>
    );
}