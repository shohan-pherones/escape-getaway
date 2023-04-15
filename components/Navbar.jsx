import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto flex h-[4rem] md:h-[5rem]  items-center justify-between">
        <div className="logo text-3xl font-semibold text-cyan-500">
          <Link href="/">
            Esxape- <span className="italic">getaway</span>
          </Link>
        </div>
        <div className="nav-links">
          <ul className="flex gap-3 md:gap-8 items-center justify-center">
            <li>
              <Link
                href=""
                className="hover:text-cyan-600 font-semibold duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/packages"
                className="hover:text-cyan-600 font-semibold duration-300"
              >
                Packages
              </Link>
            </li>
            <li className="border border-cyan-500 px-3 py-1 sm:py-3 sm:px-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg">
              <Link
                href="/packages"
                className=" font-semibold duration-300 text-white"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
