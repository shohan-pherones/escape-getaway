import { getAPackage } from "@/prisma/packages";

const PackageDetails = ({ singlePackage }) => {
  console.log(singlePackage);
  return (
    <>
      {singlePackage && (
        <div>
          <div
            className="image w-full h-[60vh] justify-center items-center flex flex-col bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${singlePackage.image})` }}
          >
            <div class="w-full h-full flex  justify-center items-center backdrop-blur-sm">
              <span class="text-white text-5xl md:text-7xl font-semibold text-center">
                {singlePackage.title}
              </span>
            </div>
          </div>
          <div className="details-area container mx-5 md:mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-20">
            <div className="details-left md:col-span-2 flex flex-col gap-10">
              <h1 className="text-5xl font-semibold text-black/40">Overview</h1>
              <p className="text-2xl"> {singlePackage.description}</p>
            </div>
            <div className="details-right md:col-span-1 md:row-auto gap-8 flex flex-col">
              <div className="flex flex-col gap-5 font-semibold">
                <span className="text-2xl"> {singlePackage.tags}</span>
                <span className="text-2xl">Person- {singlePackage.person}</span>
                <span className="text-2xl text-red-500">
                  <span className="text-black"> Price- </span>
                  {singlePackage.price}
                </span>
              </div>
              <button className="w-full bg-black/80 self-start p-3 lg:py-5 lg:px-10 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black/90 duration-500 hover:border-white/75">
                purchase packages!
              </button>
              <button className="w-full bg-black/80 self-start p-3 lg:py-5 lg:px-10 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black/90 duration-500 hover:border-white/75">
                Go to Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
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
