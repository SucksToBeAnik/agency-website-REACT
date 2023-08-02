import { Link } from "react-router-dom";
import Icon from "../../assets/images/level.png";
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false)
    console.log(open)


  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <nav className="bg-gray-900 fixed sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-gray-400 h-[50px] sm:h-auto">
        {/* desktop nav start */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
          <Link to="/" className="flex items-center">
            <img
              src={Icon}
              alt="Icon"
              className="hidden sm:block sm:w-[35px] sm:h-[35px]"
            />
            <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
              levelUp Solution
            </span>
          </Link>

          <div className="flex">
            <ul className="flex justify-center">
                <li className="p-2 text-white hover:text-blue-400 cursor-pointer">
                    <Link to='/'>Home</Link>
                </li>
                <li className="p-2 text-white hover:text-blue-400 cursor-pointer">
                <Link to='/about'>About</Link>
                </li>
                <li className="p-2 text-white hover:text-blue-400 cursor-pointer">
                <Link to='/about'>About</Link>
                </li>
                <li className="p-2 text-white hover:text-blue-400 cursor-pointer">
                <Link to='/services'>Services</Link>
                </li>
            </ul>
          </div>

          <div className="flex">
            <button
              type="button"
              className="bg-blue-600 px-4 py-2 text-white rounded-xl mr-2 hover:bg-blue-500 hidden sm:block"
            >
              Get started
            </button>
            <button type="button" className="hidden sm:block text-white border font-medium rounded-lg ml-2 mr-4 text-sm px-4 hover:bg-blue-300/10">
              Login
            </button>

            <button onClick={()=>setOpen((s)=>!s)} className="sm:hidden block">
                < GiHamburgerMenu size={30} className="mt-2 mr-2 text-white/70"/>
            </button>
          </div>

          

        </div>

        {/* desktop nav ends */}
      </nav>
    </div>
  );
}

export default Navbar;
