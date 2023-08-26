import { getAPackage } from "@/prisma/packages";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const PackageDetails = ({ singlePackage }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handlePurchase = () => {
    if (session) {
      router.push(`/checkout/${singlePackage.id}`);
    } else {
      router.push(`/user/login?destination=/checkout/${singlePackage.id}`);
    }
  };

  return (
    <main>
      {singlePackage && (
        <div>
          <div
            className="image w-full h-[60vh] justify-center items-center flex flex-col bg-cover bg-no-repeat bg-center bg-fixed"
            style={{ backgroundImage: `url(${singlePackage.image})` }}
          >
            <div className="w-full h-full flex justify-center items-center">
              <span className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-100">
                {singlePackage.title}
              </span>
            </div>
          </div>
          <div className="details-area container mx-5 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 py-20">
            <div className="details-left md:col-span-2 flex flex-col gap-5">
              <h1 className="text-2xl font-semibold text-black uppercase">
                Overview
              </h1>
              <p className="text-lg"> {singlePackage.description}</p>
              <span className="text-xl font-medium text-rose-500">
                {" "}
                {singlePackage.tags}
              </span>
            </div>
            <div className="details-right md:col-span-1 md:row-auto gap-5 flex flex-col">
              <div className="flex flex-col gap-3 justify-between font-semibold">
                <span className="text-3xl text-red-500">
                  <span className="text-black"> Price: </span>
                  {singlePackage.price?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "BDT",
                  })}
                </span>
                <span className="text-xl">
                  * Only for {singlePackage.person} person
                </span>
              </div>
              <button
                onClick={handlePurchase}
                className="text-center w-full bg-black/80 self-start p-3 lg:py-5 lg:px-10 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black/90 duration-500 hover:border-white/75"
              >
                Purchase Package
              </button>
              <Link
                href="/packages"
                className="text-center w-full bg-black/80 self-start p-3 lg:py-5 lg:px-10 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black/90 duration-500 hover:border-white/75"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default PackageDetails;

/* DO NOT TOUCH THESE CODES */
export const getServerSideProps = async ({ query }) => {
  const singlePackage = await getAPackage(query.packageId);

  const updatedPackage = {
    ...singlePackage,
    updatedAt: singlePackage.updatedAt.toString(),
    createdAt: singlePackage.createdAt.toString(),
  };

  return {
    props: {
      singlePackage: updatedPackage,
    },
  };
};
/* DO NOT TOUCH THESE CODES */
