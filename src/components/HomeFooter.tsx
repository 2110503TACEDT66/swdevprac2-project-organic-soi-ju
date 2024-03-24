import Link from "next/link";

export default function HomeFooter(){
    return(
        <div className="mt-5 w-full bg-jason flex flex-col text-center items-center justify-center">
            <div className="my-16">
                <p className="text-2xl">Experience our best massage</p>
                <p className="m-10">Make a reservation now</p>
                <Link href="/massageshops">
                    <button className="bg-gray-300 rounded-lg py-2 px-10 text-lg">Reserve</button>
                </Link>
            </div>
        </div>
    );
}