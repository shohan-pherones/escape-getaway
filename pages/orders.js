import prisma from "@/prisma/prisma";
import ReactToPrint from "react-to-print";
import { formatCurrency } from "@/utils/formatCurrency";
import { format } from "date-fns";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const Orders = ({ session, customer }) => {
  const router = useRouter();
  const ref = useRef();

  useEffect(() => {
    if (!session) {
      router.replace("/user/login");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }

  if (session) {
    return (
      <main className="container mx-auto py-10 min-h-screen">
        <h2
          className="text-4xl font-semibold py-3"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Your Order{customer.orders.length > 1 ? "s" : ""}:{" "}
          {customer.orders.length}
        </h2>

        <div className="flex flex-wrap  items-center gap-10">
          {customer.orders.map((order) => (
            <div key={order.id}>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                className="grid items-center justify-center w-[38rem] h-80 shadow-md rounded-md space-y-1  p-5"
              >
                <div ref={ref}>
                  <p className="text-xl font-semibold text-center py-2">
                    {order.packageName}
                  </p>
                  <div className="flex justify-between gap-10">
                    <div className="grid gap-1">
                      <span className="text-cyan-500 font-medium">
                        Ticket no: {order.id}
                      </span>
                      <p className="text-lg">
                        <span className="text-black">Booking date:</span>{" "}
                        {format(new Date(order.createdAt), "dd/MM/yyyy")}
                      </p>
                      <p>{order.name}</p>
                      <p>{order.mobile}</p>
                      <p>{customer.email}</p>
                      <p>{order.address}</p>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-lg text-black">
                          Tour date:{" "}
                          {format(new Date(order.tourDate), "dd/MM/yyyy")}
                        </p>
                        <p>
                          <span className="text-black">Person:</span>{" "}
                          {order.person}
                        </p>
                      </div>
                      <p className="text-lg font-medium">
                        {formatCurrency(order.amountTotal, "en-BD", "BDT")}
                      </p>
                    </div>
                  </div>
                </div>
                <ReactToPrint
                  trigger={() => (
                    <button className="bg-cyan-500 text-cyan-50 text-center py-1 px-4  font-medium mx-auto w-1/2 hover:bg-cyan-600 duration-300">
                      Download Your Ticket
                    </button>
                  )}
                  content={() => ref.current}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
};

export default Orders;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const customer = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      orders: true,
    },
  });

  if (!session || !customer) {
    return {
      redirect: {
        destination: "/user/login",
        permanent: false,
      },
    };
  }

  const updatedCustomer = {
    ...customer,
    updatedAt: customer.updatedAt.toString(),
    createdAt: customer.createdAt.toString(),
    orders: customer.orders.map((order) => ({
      ...order,
      updatedAt: order.updatedAt.toString(),
      createdAt: order.createdAt.toString(),
    })),
  };

  return {
    props: { session, customer: updatedCustomer },
  };
};
