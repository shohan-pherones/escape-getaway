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
    <header
      data-aos="fade-down"
      data-aos-duration="2000"
      className="px-5 md:px-0 fixed top-0 left-0 right-0 w-full z-[100] bg-white/80 border-b backdrop-blur-lg h-[5rem] flex items-center"
    >
      <div className="container mx-auto flex items-center justify-between relative">
        <div className="logo text-xl md:text-2xl font-semibold text-cyan-500">
          <Link href="/">Escape Getaway</Link>
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
                  className="font-semibold text-white bg-cyan-500 py-3 px-5 rounded-lg hover:bg-cyan-600 duration-300"
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
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={handleMenu}
            className="inline-flex  focus:outline-none p-2 z-[102]"
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
              className={`w-screen h-screen fixed z-[101] bg-white top-0 left-0 right-0 bottom-0 flex text-black justify-center items-center ${
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
                      className="font-semibold text-white bg-cyan-500 py-3 px-5 rounded-lg hover:bg-cyan-600 duration-300"
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
    </header>
  );
};

export default Navbar;
