import UserBox from "./userBox"
import UserInfoBox from "./userInfoBox"

export default function UserSection() {
    return (
        <div className="flex flex-col relative justify-start bg-white w-[45%] h-full p-5 rounded-md shadow-md">
            <UserBox />
            <UserInfoBox />
        </div>
    )
    }