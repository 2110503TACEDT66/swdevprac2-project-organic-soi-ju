import UserBox from "./userBox"
import UserInfoBox from "./userInfoBox"

export default function UserSection() {
    return (
        <div className="flex flex-col bg-jason w-[45%] h-[100%] p-2 rounded-md shadow-md">
            <UserBox />
            <UserInfoBox />
        </div>
    )
    }