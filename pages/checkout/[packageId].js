import { getAPackage } from "@/prisma/packages";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

/* STRIPE PROMISE */
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = ({ singlePackage }) => {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    packageId: singlePackage.id,
    package: singlePackage.title,
    person: singlePackage.person,
    date: "",
    price: singlePackage.price,
    total: singlePackage.price,
  });

  /* UPDATE SESSION USER DATA */
  useEffect(() => {
    if (session) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  /* UPDATE SUBTOTAL BASED ON PERSON */
  useEffect(() => {
    const total = formData.price * formData.person;

    setFormData((prevFormData) => ({
      ...prevFormData,
      total: total,
    }));
  }, [formData.price, formData.person]);

  /* CHECKOUT HANDLER */
  const handleCheckout = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;

    // Call the backend to create a checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: [singlePackage],
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      person: formData.person,
      tourDate: formData.date,
      packageName: formData.package,
    });

    // Redirect user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <main className="container my-20 mx-auto grid 2xl:grid-cols-3 gap-10  xl:grid-cols-2 md:grid-cols-1">
      <div
        className="package-image 2xl:col-span-2 w-full h-[90vh] justify-center items-center bg-cover bg-no-repeat bg-center relative xl:col-span-1 hidden sm:block"
        style={{ backgroundImage: `url(${singlePackage.image}) ` }}
      >
        <div className="text-sm text-gray-200 absolute bottom-2 p-2">
          {singlePackage.description}
        </div>
      </div>

      <form
        onSubmit={handleCheckout}
        className="flex flex-col 2xl:col-span-1 gap-5 justify-center px-10 xl:col-span-1"
      >
        <h3 className="text-2xl font-semibold ">Please Provide Your Details</h3>
        <input
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          type="text"
          placeholder="Your Name"
          className="border-b outline-none p-2"
          required
          readOnly
        />
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="text"
          placeholder="Your Email"
          className=" border-b outline-none p-2"
          required
          readOnly
        />
        <input
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          type="tel"
          placeholder="Mobile"
          className="border-b outline-none p-2"
          required
        />
        <input
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          type="text"
          placeholder="Address"
          className="border-b outline-none p-2"
          required
        />
        <input
          value={formData.package}
          onChange={(e) =>
            setFormData({ ...formData, package: e.target.value })
          }
          readOnly
          type="text"
          placeholder="Your Package"
          className="border-b outline-none p-2 cursor-not-allowed"
          required
        />
        <input
          value={formData.person}
          onChange={(e) => setFormData({ ...formData, person: e.target.value })}
          type="number"
          placeholder="Person"
          className="border-b outline-none p-2"
          required
        />
        <input
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          type="date"
          placeholder="Check-in"
          className="border-b outline-none p-2"
          required
        />
        <span className="text-xl text-cyan-500 font-medium">
          Subtotal:{" "}
          <span>
            {formData.total?.toLocaleString("en-US", {
              style: "currency",
              currency: "BDT",
            })}
          </span>
        </span>

        <button
          role="link"
          type="submit"
          className="text-center w-full bg-black/80 self-start p-3 lg:py-3 lg:px-10 text-white uppercase tracking-widest font-medium border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black/90 duration-500 hover:border-white/75"
        >
          Checkout
        </button>
      </form>
    </main>
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
