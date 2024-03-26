'use client';
import User from "@/db/models/Users"
import { dbConnect } from "@/db/dbConnect"
import { addUser } from "./actions";

export default function RegisterPage(){
    
  
    
    return(
        <div className="bg-gray-300 mx-10 my-10 px-5 py-2">
        <form action={async (FormData)=>{
            await addUser(FormData);
            
        }} className="bg-jason my-5 mx-44 rounded-lg p-5 flex flex-col items-center">
            <div className="text-2xl  text-semibold font-serif">Register</div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="name">Name:</label>
                <input type="text" required id="name" name="name" placeholder="Name"
                className="bg-white border-2 border-gray-200 rounded-md w-full p-2 text-gray-700 
                focus:outline-none focus:border-blue-400"/>
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="email">Email:</label>
                <input type="text" required id="email" name="email" placeholder="Example@example.com"
                className="bg-white border-2 border-gray-200 rounded-md w-full p-2 text-gray-700 
                focus:outline-none focus:border-blue-400"/>
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="password">Password:</label>
                <input type="text" required id="password" name="password" placeholder="Password"
                className="bg-white border-2 border-gray-200 rounded-md w-full p-2 text-gray-700 
                focus:outline-none focus:border-blue-400"/>
            </div>
            <div className="flex items-center w-1/2 my-2">
                <label className="w-auto block text-gray-700 pr-4" htmlFor="tel">Tel:</label>
                <input type="text" required id="tel" name="tel" placeholder="0xx-xxxxxxx"
                className="bg-white border-2 border-gray-200 rounded-md w-full p-2 text-gray-700 
                focus:outline-none focus:border-blue-400"/>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg">Submit</button>
        </form>
        </div>
    );
}