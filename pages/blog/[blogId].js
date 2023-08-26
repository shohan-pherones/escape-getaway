import { getABlog } from "@/prisma/blog";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
const writerImg =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1684302917/escape-getaway/1-lg_gzskno.webp";
const BlogDetails = ({ singleBlog }) => {
  return (
    <main className="my-16 container mx-auto px-5 lg:px-0 ">
      <div className="w-full lg:flex gap-10">
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="lg:w-2/3 w-full  space-y-5 border-b border-gray-400/50 pb-10"
        >
          <div
            className="image w-full  h-[30rem] justify-center items-center flex flex-col bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${singleBlog.cover})` }}
          ></div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className=" space-y-5"
          >
            <h1 className="text-5xl font-medium">{singleBlog.firstHeadline}</h1>
            <p className="text-sm font-medium">{singleBlog.createdAt}</p>
            <p className="text-sm font-medium">
              WORDS BY{" "}
              <span className="underline">{singleBlog.writerName}</span>
            </p>
            <p className="text-lg text-gray-900">
              {singleBlog.firstDescription}
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className=" space-y-5"
          >
            <h2 className="text-3xl font-semibold pt-5">
              {singleBlog.bestSideTitle} ?
            </h2>
            <p className="text-lg text-gray-900">
              {singleBlog.bestSideDescription}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <Image
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1000"
              src={singleBlog.image1}
              alt="Travel img"
              loader={() => singleBlog.image1}
              width={50}
              height={50}
              priority
              unoptimized
              className="w-full h-96 object-cover block "
            />{" "}
            <Image
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
              src={singleBlog.image2}
              loader={() => singleBlog.image2}
              alt="travel img"
              width={50}
              height={50}
              priority
              unoptimized
              className="w-full h-96 object-cover block "
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="space-y-5"
          >
            <h2 className="text-3xl font-semibold pt-5">
              {singleBlog.fastWayTitle} ?
            </h2>
            <p className="text-lg text-gray-900">{singleBlog.fastWayDetails}</p>
            <div className="grid grid-cols-2 gap-10">
              <div className="space-y-2">
                <p className="text-2xl font-bold px-4 py-1">1. Camping Tips</p>
                <p className="text-lg">{singleBlog.campingTips}</p>
              </div>
              <div className="">
                <p className="text-2xl font-bold px-4 py-1">2. Packing Tips</p>
                <p className="text-lg">{singleBlog.packingTips}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
          className="flex items-center w-full lg:w-1/3 flex-col gap-2 border-cyan-300/50 px-8 border-l border-dashed"
        >
          <Image
            src={writerImg}
            alt="writter img"
            width={50}
            height={50}
            priority
            unoptimized
            className="w-52 h-52 object-cover block rounded-[100%] m-5 border-cyan-300/50 border-4"
          />
          <h2 className="text-xl font-semibold">
            Hi! I am {singleBlog.writerName}
          </h2>
          <p className="text-sm font-semibold">ANTHROPOLOGIST</p>
          <p className="text-center text-lg">
            Welcome to my travel blog. Follow me on my adventure to world
            discovery.
          </p>
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
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;
export const getServerSideProps = async ({ query }) => {
  const singleBlog = await getABlog(query.blogId);

  const updatedBlog = {
    ...singleBlog,
    updatedAt: singleBlog.updatedAt.toString(),
    createdAt: singleBlog.createdAt.toString(),
  };

  return {
    props: {
      singleBlog: updatedBlog,
    },
  };
};
