import Image from "next/image";
import Link from "next/link";

const PackageItem = ({ packege }) => {
  return (
    <div className="packege flex flex-col gap-5 shadow-md rounded-md overflow-hidden">
      <div className="img relative">
        <Image
          priority
          unoptimized
          src={packege.image}
          loader={() => packege.image}
          alt={packege.title}
          height={50}
          width={50}
          className="h-[20rem] w-full"
        />
      </div>
      <div className="texts flex flex-col gap-4 px-5 pb-3 bg-white/80">
        <h3 className="title text-cyan-500 text-2xl font-medium text-start ">
          {packege.title}
        </h3>
        <p className="desc text-start h-[6rem] text-gray-500">
          {packege.description.substring(0, 100)}...
        </p>
        <span className="tags text-start text-rose-500 font-semibold mt-3">
          {packege.tags}
        </span>
        <div className="flex gap-2 items-center">
          <span className="price text-cyan-500 font-medium text-xl">
            {packege.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "BDT",
            })}
          </span>
          <span className="personCount text-end font-medium">
            for {packege.person} person
          </span>
        </div>
        <Link
          href={`/packages/${packege.id}`}
          className="bg-cyan-500 self-end py-2 px-5 text-white uppercase tracking-widest font-semibold border border-cyan-500/50 rounded inset-2 appearance-none backdrop-blur-md shadow-lg mb-3 bg-blend-color-dodge hover:bg-cyan-600 duration-500 hover:border-white/75"
        >
          Explore Packege
        </Link>
      </div>
    </div>
  );
};

export default PackageItem;
