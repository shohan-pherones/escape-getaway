import PackageItem from "@/components/PackageItem";
import { getAllPackages } from "@/prisma/packages";

const Packeges = ({ packages }) => {
  return (
    <div className="packeges container mx-auto px-5 md:px-0 justify-center items-center py-10">
      <h1 className="text-4xl font-semibold text-center">Packeges</h1>
      <div className="packeges-wrpper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 items-center">
        {packages?.map((packege) => (
          <PackageItem key={packege.id} packege={packege} />
        ))}
      </div>
    </div>
  );
};

export default Packeges;

/* DO NOT TOUCH THESE CODES */
export const getStaticProps = async () => {
  const packages = await getAllPackages();

  const updatedPackages = packages.map((pkg) => ({
    ...pkg,
    updatedAt: pkg.updatedAt.toString(),
    createdAt: pkg.createdAt.toString(),
  }));

  return {
    props: {
      packages: updatedPackages,
    },
  };
};
/* DO NOT TOUCH THESE CODES */
