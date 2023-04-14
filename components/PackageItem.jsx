import Image from "next/image";
import Link from "next/link";

const PackageItem = ({ packege }) => {
  return (
    <div className="packege flex flex-col gap-5 shadow-md rounded-md overflow-hidden w-full">
      <div className="img relative">
        <Image
          priority
          unoptimized
          src={packege.image}
          loader={() => packege.image}
          alt={packege.title}
          height={50}
          width={50}
          className="h-[14rem] md:h-[20rem] w-full object-cover"
        />
      </div>

      <div className="texts flex flex-col gap-3 px-5 pb-5 bg-white">
        <h3 className="title text-2xl font-semibold truncate">
          {packege.title}
        </h3>
        <p className="desc h-[4.5rem]">
          {packege.description.substring(0, 75)}...
        </p>
        <span className="tags text-pink-500 font-medium">{packege.tags}</span>
        <div>
          <span className="price text-cyan-500 font-semibold text-2xl">
            {packege.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "BDT",
            })}
          </span>
          <span className="personCount font-medium">/per person</span>
        </div>
        <Link
          href={`/packages/${packege.id}`}
          className="bg-cyan-500 text-cyan-50 text-center py-3 rounded uppercase font-medium mt-3 hover:bg-cyan-600 duration-300"
        >
          Explore Package
        </Link>
      </div>
    </div>
  );
};

export default PackageItem;
