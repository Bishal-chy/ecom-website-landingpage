import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
const menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/2",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/3",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/4",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
      {/*upper Navbar*/}
      <div className="bg-purple-400 py-2 flex justify-center items-center ">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 ">
              <img
                src="https://picsum.photos/id/28/50/50"
                alt=""
                className="rounded-full uppercase"
              />
              <h1 className="py-2  text-cyan-50">
                Godam <hr></hr>
              </h1>
            </a>
          </div>
          {/* search bar*/}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px]
                        sm:w-[200px] group-hover:w-[300px] transition-all duration-300
                        rounded-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-1
                        focus:border-primary "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-purple-400 absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/*other button*/}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-orange-400 to-red-300 transition-all duration-300 text-white py-2 px-2  rounded-full flex 
                items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            {/*Darkmode switch*/}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/*lower Navbar*/}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className=" navbar-text inline-block px-4 hover:text-purple-400 duration-200 "
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* simple dropdownlist*/}
          <li className="group relative  cursor-pointer">
            <a href="#" className=" navbar-text flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown
                  className="transition-all duration-200
                    group-hover:rotate-180"
                />
              </span>
            </a>

            <div
              className="absolute  h-40   hidden group-hover:block w-[150px]
                    rounded-md bg-white  p-2 text-black shadow-md "
            >
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full
                                    rounded-md p-2 hover:bg-purple-400    "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
