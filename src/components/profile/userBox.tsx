import Image from "next/image";

export default function UserBox() {
    return (
        <div className="flex flex-row items-center justify-start w-[40%] h-full mt-3 p-5 gap-10">
            <div className="border-solid rounded-md border-primary border-[2px]">
            <Image  src="/images/house.svg" alt="logo" width={70} height={70} />
            </div>
            <div className=" my-5 text-primary font-bold text-xl">
                Soiju Massage Center

            </div>

        </div>
    )
    }
