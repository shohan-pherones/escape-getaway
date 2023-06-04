import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { useSession } from "next-auth/react";
import { FaBars, FaTimes } from "react-icons/fa";
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
    <div>
      <div className="h-20 bg-black text-gray-400 flex items-center">
        <div className="wrapper flex justify-between items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <Link href="/" className="text-white font-semibold">
              Cordemy
            </Link>
          </div>
          <div className="hidden md:block">
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="flex gap-5 justify-between"
            >
              <Link href="/" className="hover:text-white transition-color">
                Home
              </Link>
              <Link
                href="/courses"
                className="hover:text-white transition-color"
              >
                Courses
              </Link>
              {session && (
                <Link
                  href="/orders"
                  className="hover:text-white transition-color"
                >
                  Orders
                </Link>
              )}
              <Link href="/about" className="hover:text-white transition-color">
                About
              </Link>
              <Link href="/faqs" className="hover:text-white transition-color">
                FAQS
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-color"
              >
                Contact
              </Link>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="hidden md:block "
          >
            {!session ? (
              <Button
                href="/users/login"
                placeholder="Sign in"
                color="secondary"
              />
            ) : (
              <Button
                href="/users/profile"
                placeholder="profile"
                color="secondary"
              />
            )}
          </div>

          {/* hamburger button */}
          <div className=" -mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center focus:outline-none  text-white p-2 z-[999]"
            >
              <span className="sr-only">Open Main Menu</span>
              {open == true ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div>
        {open ? (
          <div className="md:hidden">
            <div
              onClick={handleOpen}
              className={`w-screen h-screen fixed z-[900] bg-black/50 backdrop-blur-lg top-0 left-0 right-0 bottom-0 flex text-white justify-center items-center ${
                setOpen ? `` : "hidden"
              }`}
            >
              <div>
                <div className="flex flex-col gap-5 items-center mb-10">
                  <Link href="/" className="hover:text-white transition-color">
                    Home
                  </Link>
                  <Link
                    href="/courses"
                    className="hover:text-white transition-color"
                  >
                    Courses
                  </Link>
                  {session && (
                    <Link
                      href="/orders"
                      className="hover:text-white transition-color"
                    >
                      Orders
                    </Link>
                  )}
                  <Link
                    href="/about"
                    className="hover:text-white transition-color"
                  >
                    About
                  </Link>
                  <Link
                    href="/faqs"
                    className="hover:text-white transition-color"
                  >
                    FAQS
                  </Link>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-color"
                  >
                    Contact
                  </Link>
                </div>

                {!session ? (
                  <Button
                    href="/users/login"
                    placeholder="Sign in"
                    color="primary"
                  />
                ) : (
                  <Button
                    href="/users/profile"
                    placeholder="profile"
                    color="primary"
                  />
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
