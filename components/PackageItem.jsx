import Image from "next/image";
import Link from "next/link";

const PackageItem = ({ packege }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="packege flex flex-col gap-5 shadow-lg rounded-xl overflow-hidden w-full border bg-white"
    >
      <Link
        href={`/packages/${packege.id}`}
        className="img relative group h-[14rem] md:h-[20rem] overflow-hidden"
      >
        <Image
          priority
          unoptimized
          src={packege.image}
          loader={() => packege.image}
          alt={packege.title}
          height={500}
          width={500}
          className="w-full h-full object-cover group-hover:brightness-75 duration-500 group-hover:scale-125"
        />
        <div className="absolute bottom-0 left-0 translate-y-full right-0 w-full h-10 bg-orange-500 flex items-center justify-center text-center uppercase tracking-widest text-orange-50 font-semibold group-hover:translate-y-0 duration-500">
          Explore Now
        </div>
      </Link>

      <div className="texts flex flex-col gap-1 px-7 pb-10 bg-white">
        <span className="tags text-pink-500 font-medium text-sm">
          {packege.tags}
        </span>
        <h3 className="title text-2xl font-semibold truncate">
          {packege.title}
        </h3>
        <p className="desc text-gray-400 font-light h-20">
          {packege.description.substring(0, 100)}...
        </p>
        <div className="flex items-center">
          <span className="price font-semibold text-2xl">
            {packege.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "BDT",
            })}
          </span>
          <span className="personCount text-gray-400">/per person</span>
        </div>
        <Link
          href={`/packages/${packege.id}`}
          className="bg-cyan-500 text-cyan-50 text-center py-3 rounded-lg uppercase font-medium mt-3 hover:bg-cyan-600 duration-300"
        >
          Explore Package
        </Link>
      </div>
    </div>
  );
};

export default PackageItem;
