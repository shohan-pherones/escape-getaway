import Image from "next/image";
import Link from "next/link";

const PackageItem = ({ packege }) => {
  return (
    <div className="packege flex flex-col gap-5 shadow-md rounded-md overflow-hidden">
      <div className="img">
        <Image
          priority
          unoptimized
          src={packege.image}
          loader={() => packege.image}
          alt={packege.title}
          height={50}
          width={50}
          className="h-[16rem] w-full"
        />
      </div>
      <div className="texts flex flex-col gap-5 px-5 pb-3">
        <h3 className="title text-cyan-500 text-2xl font-medium text-start">
          {packege.title}
        </h3>
        <p className="desc text-start h-[7.5rem]">{packege.description}</p>
        <span className="tags text-start text-rose-500 font-medium">
          {packege.tags}
        </span>
        <div className="flex gap-3">
          <span className="price text-cyan-500 font-medium text-xl">
            Price:{" "}
            {packege.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "BDT",
            })}
          </span>
          <span className="personCount text-xl">
            for {packege.person} person
          </span>
        </div>
        <Link
          href={`/packages/${packege.id}`}
          className="bg-cyan-500 py-2 px-5 rounded-md border font-medium text-white hover:bg-cyan-600 duration-300 mb-3 tracking-wider"
        >
          Explore Packege
        </Link>
      </div>
    </div>
  );
};

export default PackageItem;
