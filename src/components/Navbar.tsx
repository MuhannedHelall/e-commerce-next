import Link from "next/link";

import { SlClose } from "react-icons/sl";
import { BsHeart } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { RiUser3Line } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { GoChevronRight } from "react-icons/go";

import Logo from "./Logo";
import LinkItem from "./LinkItem";
import Dropdown from "./Dropdown";
import BurgerIcon from "./BurgerIcon";
import ShoppingCart from "./ShoppingCart";

export const categories = [
  "End of year",
  "Mobiles & Tablets",
  "Televisions",
  "Large Appliances",
  "Small Appliances",
  "Kitchen Appliances",
  "Laptops & PCs",
  "Health & Beauty",
  "Electronics",
  "Installment",
];
function Navbar() {
  return (
    <header className="relative bg-blue-700 text-white rounded-b-3xl">
      <div className="w-11/12 lg:w-4/5 mx-auto pt-4">
        <div className="flex lg:flex-row lg:items-center lg:justify-between flex-col">
          <div className="flex items-center justify-between">
            <BurgerIcon>
              <aside className="hidden peer-checked:block absolute top-0 left-0 bg-white text-black min-h-screen w-full z-10">
                <div className="w-11/12 mx-auto py-5">
                  <div className="flex items-center justify-between">
                    <SlClose size={32} />
                    <Logo className="bg-blue-700 rounded-3xl" />
                  </div>
                  <div className="flex flex-col gap-5 my-5">
                    <Link
                      href="/"
                      className="flex items-center justify-between py-2 border-b"
                    >
                      <span className="font-semibold">Welcome Muhanned !</span>
                      <GoChevronRight size={34} />
                    </Link>
                    {categories.map((item) => (
                      <Link
                        href="/"
                        className="flex items-center justify-between py-2"
                        key={item}
                      >
                        <span key={item} className="capitalize">
                          {item}
                        </span>
                        <GoChevronRight size={34} />
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </BurgerIcon>
            <Logo />
            <ShoppingCart className="block lg:hidden" />
          </div>
          <div className="relative w-full my-5 lg:w-1/2 lg:my-0">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full h-11 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full text-black"
            />
            <button
              type="button"
              className="flex gap-2 items-center absolute top-1 right-2 p-2 rounded-full bg-blue-700"
            >
              <SlMagnifier size={20} />
              <span className="text-sm font-semibold">Search</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-5">
            <div className="flex items-center justify-between gap-2">
              <span>العربية</span>
              <TfiWorld />
            </div>
            <div className="h-6 w-[1px] bg-white" />
            {true ? (
              <div className="relative flex items-center justify-between gap-2">
                <RiUser3Line size={21} />
                <span className="text-sm">Welcome Muhanned</span>
                <Dropdown />
              </div>
            ) : (
              <Link href="/login">Login</Link>
            )}
            <div className="flex items-center justify-between gap-5">
              <BsHeart size={25} />
              <ShoppingCart className="hidden lg:block" />
            </div>
          </div>
        </div>
        <nav className="hidden lg:block mt-2">
          <div className="container flex items-center justify-between mx-auto text-sm py-2">
            {categories.map((item) => (
              <LinkItem
                key={item}
                className="font-semibold hover:after:-bottom-[7px]"
                href=""
              >
                {item}
              </LinkItem>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
