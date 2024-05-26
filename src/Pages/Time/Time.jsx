import { FaCalendarCheck, FaPhoneVolume } from "react-icons/fa"
import { FaLocationPinLock } from "react-icons/fa6"

const Time = () => {
  return (
    <div className="grid grid-cols-3 h-72 bg-black text-white my-44 rounded-2xl">
        <div className="flex items-center justify-center">
        <FaCalendarCheck className="text-5xl mr-5"/>
            <div className="">
            <p>We are open monday-friday</p>
            <h3 className="text-2xl my-2 font-bold">7:00 am - 9:00 pm</h3>
            </div>
        </div>
        <div className="flex items-center justify-center">
        <FaPhoneVolume className="text-5xl mr-5"/>
            <div className="">
            <p>Have a question?</p>
            <h3 className="text-2xl my-2 font-bold">+2546 251 2658</h3>
            </div>
        </div>
        <div className="flex items-center justify-center">
        <FaLocationPinLock className="text-5xl mr-5"/>
            <div className="">
            <p className="">Need a repair? our address</p>
            <h3 className="text-2xl my-2 font-bold">Liza Street, New York</h3>
            </div>
        </div>
    </div>
  )
}

export default Time