import ReservationSection from "@/components/profile/reservationSection";
import UserBox from "@/components/profile/userBox";
import UserSection from "@/components/profile/userSection";


export default function ProfilePage() {
    return (
        <div className="p-10 bg-gray-50 w-[90vw] m-auto my-10 rounded-lg shadow-md">
            <div className="flex flex-row gap-5">
            <UserSection />
            <ReservationSection />
            </div>
        </div>
    )
}
