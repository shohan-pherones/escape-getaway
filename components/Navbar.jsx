import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div>
      <div className="container mx-auto flex h-[5rem]  items-center justify-between">
        <div className="logo text-xl  md:text-2xl font-semibold text-cyan-500">
          <Link href="/">Escape-getaway</Link>
        </div>
        <div className="nav-links">
          <ul className="flex gap-5 md:gap-8 items-center justify-center text-sm md:text-lg">
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
      </div>
    </div>
  );
};

export default Navbar;
