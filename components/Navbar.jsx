import Image from "next/image";
import logo from "../public/images/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="container mx-auto flex h-[4rem] md:h-[5rem]  items-center justify-between">
        <div className="logo">
          <Link href="/">
            <Image src={logo} className="w-28" alt="logo" placeholder="blur" />
          </Link>
        </div>
        <div className="nav-links">
          <ul className="flex gap-3 md:gap-8 items-center justify-center">
            <li>
              <Link
                href=""
                className="text-cyan-500 hover:text-cyan-600 font-semibold"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="text-cyan-500 hover:text-cyan-600 font-semibold"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="text-cyan-500 hidden md:block hover:text-cyan-600 font-semibold"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="text-cyan-500 hover:text-cyan-600 font-semibold"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
