import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  const handleOpen = () => {
    setOpen(false);
  };

  const { data: session } = useSession();

  return (
    <div className="px-5 md:px-0">
      <div className="container mx-auto flex h-[5rem]  items-center justify-between relative">
        <div className="logo text-xl  md:text-2xl font-semibold text-cyan-500">
          <Link href="/">Escape-getaway</Link>
        </div>
        <div className="nav-links hidden lg:block">
          <ul className="flex gap-5 items-center justify-center text-sm md:text-lg">
            <li>
              <Link
                href="/"
                className="hover:text-cyan-600 font-semibold duration-300"
              >
                Home
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
            <li>
              <Link
                href="/blog"
                className="hover:text-cyan-600 font-semibold duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="hover:text-cyan-600 font-semibold duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-cyan-600 font-semibold duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-cyan-600 font-semibold duration-300"
              >
                Contact
              </Link>
            </li>

            <li>
              {!session ? (
                <Link
                  href="/user/login"
                  className="font-semibold text-white bg-cyan-500 py-3 px-5 rounded hover:bg-cyan-600 duration-300"
                >
                  Sign in
                </Link>
              ) : (
                <Link
                  href="/user/profile"
                  className="font-semibold text-white bg-cyan-500 py-3 px-5 rounded hover:bg-cyan-600 duration-300"
                >
                  Profile
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* hamburger button */}
        <div className=" flex lg:hidden">
          <button
            type="button"
            onClick={handleMenu}
            className="inline-flex  absolute right-0 top-6  focus:outline-none   p-2 z-[999]"
          >
            <span className="sr-only">Open Main Menu</span>
            {open == true ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div>
        {open ? (
          <div className="lg:hidden">
            <div
              onClick={handleOpen}
              className={`w-screen h-screen fixed z-[900] bg-black/50 backdrop-blur-lg top-0 left-0 right-0 bottom-0 flex text-white justify-center items-center ${
                setOpen ? `` : "hidden"
              }`}
            >
              <ul className="lg:flex lg:gap-8 space-y-5 lg:space-x-0 items-center justify-center text-sm md:text-lg">
                <li>
                  <Link
                    href="/"
                    className="hover:text-cyan-600 font-semibold duration-300"
                  >
                    Home
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
                <li>
                  <Link
                    href="/blog"
                    className="hover:text-cyan-600 font-semibold duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="hover:text-cyan-600 font-semibold duration-300"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-cyan-600 font-semibold duration-300"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-cyan-600 font-semibold duration-300"
                  >
                    Contact
                  </Link>
                </li>

                <li className="pt-5">
                  {!session ? (
                    <Link
                      href="/user/login"
                      className="font-semibold text-white bg-cyan-500 py-3 px-5 rounded hover:bg-cyan-600 duration-300"
                    >
                      Sign in
                    </Link>
                  ) : (
                    <Link
                      href="/user/profile"
                      className="font-semibold text-white bg-cyan-500 py-3 px-5 rounded hover:bg-cyan-600 duration-300"
                    >
                      Profile
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
