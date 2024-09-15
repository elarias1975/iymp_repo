import { FaChartSimple, FaGlobe } from "react-icons/fa6";
import { RiVipDiamondFill} from "react-icons/ri";
import { IoMdCart} from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
export const navItem = [
    {
        id: 1,
        icon: <FaChartSimple className="text-xl text-blue-500"/>,
        title: 'Inscripciones'
    },
    {
        id: 2,
        icon: <FaGlobe className="text-xl text-blue-500"/>,
        title: 'Maps'
    },
    {
        id: 3,
        icon: <RiVipDiamondFill className="text-xl text-blue-500"/>,
        title: 'Components'
    },
    {
        id: 4,
        icon: <IoMdCart className="text-xl text-blue-500"/>,
        title: 'E-Commerce'
    },
    {
        id: 5,
        icon: <FaCalendarAlt className="text-xl text-blue-500"/>,
        title: 'Calendar'
    }
]