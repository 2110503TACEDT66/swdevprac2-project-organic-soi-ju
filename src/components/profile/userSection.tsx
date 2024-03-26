import UserBox from "./userBox"
import UserInfoBox from "./userInfoBox"

export default function UserSection() {
    return (
        <div className="flex flex-col justify-start bg-jason w-[45%] h-full p-2 rounded-md shadow-md">
            <UserBox />
            <UserInfoBox />
        </div>
    )
    }