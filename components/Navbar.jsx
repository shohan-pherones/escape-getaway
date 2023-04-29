import Link from "next/link";

const Navbar = () => {
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
            <li className="border border-cyan-500   py-3 px-4 bg-cyan-500 hover:bg-cyan-600 rounded-lg duration-300">
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
