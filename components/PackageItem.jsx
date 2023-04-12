import Image from "next/image";
import Link from "next/link";

const PackageItem = ({ packege }) => {
  return (
    <div className="packege flex flex-col gap-5 shadow-md rounded-md overflow-hidden">
      <div className="img relative">
        <span className="absolute top-6 left-0 bg-black/70 text-white px-2 font-semibold">
          20%off
        </span>
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
        <p className="desc text-start h-[7.5rem]">{packege.description}</p>
        <span className="tags text-start text-rose-500 font-semibold mt-3">
          {packege.tags}
        </span>
        <div className="flex gap-2">
          <span className="price text-cyan-500 font-medium text-xl">
            {packege.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "BDT",
            })}
          </span>
          <span className="personCount text-end">
            for {packege.person} person
          </span>
        </div>
        <Link
          href={`/packages/${packege.id}`}
          // className="bg-cyan-500 py-2 px-5 rounded-md border font-medium text-white hover:bg-cyan-600/20 duration-300 mb-3 tracking-wider self-start"
          className="bg-cyan-500 self-end py-2 px-5 text-white uppercase tracking-widest font-semibold border border-cyan-500/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg mb-3 bg-blend-color-dodge hover:bg-cyan-600 duration-500 hover:border-white/75"
        >
          Explore Packege
        </Link>
      </div>
    </div>
  );
};

export default PackageItem;
