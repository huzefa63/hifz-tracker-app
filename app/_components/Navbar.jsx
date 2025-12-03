import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6";
function Navbar() {
    return (
        <div className="h-14 bg-gray-50 shadow w-full flex items-center justify-between px-3">
            <RxHamburgerMenu className="text-2xl"/>
            <FaRegCircleUser className="text-2xl"/>
        </div>
    )
}

export default Navbar
