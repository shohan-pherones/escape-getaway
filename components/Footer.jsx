import Link from "next/link";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="2000"
      className="mt-14 flex flex-col gap-10 border-t py-10"
    >
      <div className="top flex w-full justify-between container mx-auto">
        <div>
          <p className="text-cyan-500 text-xl font-medium pb-3 hover:text-cyan-600 duration-300">
            Escape Getway
          </p>
          <p className="text-sm text-gray-400">
            Experience the Ultimate Travel Adventure <br /> with Our Unbeatable
            Package
          </p>
        </div>
        <Link
          href="/"
          className="text-2xl text-gray-900/50 flex items-end hover:text-cyan-600 duration-300"
        >
          <FaArrowCircleUp />
        </Link>
      </div>
      <div className="bottom flex justify-between container mx-auto">
        <ul className="flex gap-5">
          <li className="bg-cyan-200/50 w-6 rounded-full h-6 items-center justify-center flex text-cyan-500 hover:text-cyan-600 duration-300">
            <Link href="/">
              <FaInstagram />
            </Link>
          </li>
          <li className="bg-cyan-200/50 w-6 rounded-full h-6 items-center justify-center flex text-cyan-500 hover:text-cyan-600 duration-300">
            <Link href="/">
              <BsTwitter />
            </Link>
          </li>
          <li className="bg-cyan-200/50 w-6 rounded-full h-6 items-center justify-center flex text-cyan-500 hover:text-cyan-600 duration-300">
            <Link href="/">
              <FaFacebookF />
            </Link>
          </li>
        </ul>

        <ul className="md:flex gap-5">
          <li className="text-sm text-gray-900/50">
            <Link
              href="/"
              className="hover:text-cyan-600 font-semibold duration-300"
            >
              Home
            </Link>
          </li>
          <li className="text-sm text-gray-900/50">
            <Link
              href="/packages"
              className="hover:text-cyan-600 font-semibold duration-300"
            >
              Packages
            </Link>
          </li>
          <li className="text-sm text-gray-900/50">
            <Link
              href="/testimonials"
              className="hover:text-cyan-600 font-semibold duration-300"
            >
              Testimonials
            </Link>
          </li>
          <li className="text-sm text-gray-900/50">
            <Link
              href="/about"
              className="hover:text-cyan-600 font-semibold duration-300"
            >
              About
            </Link>
          </li>
          <li className="text-sm text-gray-900/50">
            <Link
              href="/user/faq"
              className="hover:text-cyan-600 font-semibold duration-300"
            >
              Faq
            </Link>
          </li>
          <li className="text-sm text-gray-900/50">
            <Link
              href="/contact"
              className="hover:text-cyan-600 font-semibold duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
