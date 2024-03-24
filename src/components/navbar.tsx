import Link from "next/link"

export default function Navbar() {
    return (
        <div className="h-[50px] w-full bg-jason top-0 z-50 flex flex-row items-center text-primary justify-start md:justify-center font-semibold " >
            <div className="flex flex-row gap-10 ml-[2.5vw] ">
                <Link href="/">
                    <div className="">Home</div>
                </Link>
                <Link href="/">
                    <div className="">Shops</div>
                </Link>
                <Link href="/">
                    <div className="">Our Products</div>
                </Link>
            </div>
            <div className="absolute right-[2.5vw] flex flex-row gap-10">

                {/* session logic here later */}

                <Link href="/profile">
                    <div className="">Profile</div>
                </Link>
                <Link href="/login">
                    <div className="">Login</div>
                </Link>
            </div>

        </div>
    )
}
