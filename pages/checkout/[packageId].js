import { getAPackage } from "@/prisma/packages";

const Checkout = ({ singlePackage }) => {
  return (
    <div>
      {/* TEST */}
      <p>{singlePackage?.title}</p>
    </div>
  );
};

export default Checkout;

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
