import { getAPackage } from "@/prisma/packages";

const PackageDetails = ({ singlePackage }) => {
  return (
    <>
      {singlePackage && (
        <div>
          {/* START FROM HERE */}
          <h1>{singlePackage.title}</h1> {/* h1 is for demo */}
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
