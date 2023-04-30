import { getAPackage } from "@/prisma/packages";
import Link from "next/link";

const Checkout = ({ singlePackage }) => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-10">
      <div
        className="col-span-2 w-full h-[90vh] justify-center items-center bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${singlePackage.image})` }}
      >
        <div className="text-sm text-gray-200 absolute bottom-2 p-2">
          {singlePackage.description}
        </div>
      </div>
      <div className="flex flex-col col-span-1 gap-5 justify-center px-10">
        <h3 className="text-2xl font-semibold ">Get in Touch With Us</h3>
        <input
          type="text"
          placeholder="Your Name"
          className=" border-b outline-none py-2"
        />
        <input
          type="text"
          placeholder="Your Email"
          className=" border-b outline-none py-2"
        />
        <input type="number" placeholder="Mobile" className="border-b " />
        <input
          type="text"
          placeholder="Address"
          className=" border-b outline-none py-2"
        />
        <input
          type="text"
          placeholder="Packege"
          className=" border-b outline-none py-2"
        />
        <input
          type="number"
          placeholder="Person"
          className=" border-b outline-none py-2"
        />
        <input
          type="number"
          placeholder="Check-in"
          className="  border-b outline-none py-2"
        />
        <span className="text-xl text-cyan-500 font-medium">Subtotal</span>
        <span className="text-xl text-cyan-500 font-medium">VAT</span>
        <Link
          href={"/"}
          className="text-center w-full bg-black/80 self-start p-3 lg:py-3 lg:px-10 text-white uppercase tracking-widest font-medium border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black/90 duration-500 hover:border-white/75"
        >
          Checkout
        </Link>
      </div>
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
