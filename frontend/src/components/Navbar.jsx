import React from 'react'
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaCaretDown, FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import logo from "../assets/jira-logo.png";

function Navbar() {
    return (
        <div className="w-full px-6 py-3 bg-white shadow flex items-center justify-between">
            <div className="flex items-center gap-4">
                <BsGrid3X3GapFill className="text-gray-600 text-xl" />

                <div className="flex items-center gap-2">
                    <img className="w-8 h-8" src={logo} alt="Jira Logo" />
                    <h1 className="font-semibold text-gray-800 text-lg">Jira Software</h1>
                </div>

                <ul className="flex items-center gap-6 ml-6 text-gray-700 text-sm">
                    {["Your work", "Projects", "Filters", "Dashboard", "Teams", "Apps"].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
                            {item} <FaCaretDown />
                        </li>
                    ))}
                </ul>

                <button
                    className="ml-6 bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 rounded text-sm"
                    type="button"
                >
                    Create
                </button>
            </div>
            <div className='flex items-center gap-4'>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded focus-within:ring ring-blue-400">
                    <IoSearch className="text-gray-500" />
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="bg-transparent outline-none text-sm w-40"
                    />
                </div>
                <div className="relative">
                    <FaBell className="text-gray-700 text-xl" />
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1.5 py-[1px] rounded-full">
                        9+
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
