import UserBox from "./userBox"
import UserInfoBox from "./userInfoBox"

export default function UserSection() {
    return (
        <div className="flex flex-col bg-jason w-[45%] h-[100%] p-2">
            <UserBox />
            <UserInfoBox />
        </div>
    )
    }