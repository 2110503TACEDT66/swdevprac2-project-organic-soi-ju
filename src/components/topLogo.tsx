import Image from "next/image";

export default function TopLogo() {
    return (
        <div className="flex flex-col items-center justify-center h-full mt-3">
            <Image  src="/images/house.svg" alt="logo" width={70} height={70} />
            <div className=" my-5 text-primary font-bold text-xl">
                Soiju Massage Center
            </div>
        </div>
    )
    }