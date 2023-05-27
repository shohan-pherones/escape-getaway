import prisma from "@/prisma/prisma";
import { formatCurrency } from "@/utils/formatCurrency";
import { format } from "date-fns";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Orders = ({ session, customer }) => {
  const router = useRouter();

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
      <div>
        <h2>
          Your order{customer.orders.length > 1 ? "s" : ""}:{" "}
          {customer.orders.length}
        </h2>

        <div>
          {customer.orders.map((order) => (
            <div key={order.id}>
              <p>Ticket no: {order.id}</p>
              <p>
                Booking date: {format(new Date(order.createdAt), "dd/MM/yyyy")}
              </p>
              <p>Tour date: {format(new Date(order.tourDate), "dd/MM/yyyy")}</p>
              <p>{order.name}</p>
              <p>{order.mobile}</p>
              <p>{customer.email}</p>
              <p>{order.address}</p>
              <p>{order.person}</p>
              <p>{order.packageName}</p>
              <p>{formatCurrency(order.amountTotal, "en-BD", "BDT")}</p>
            </div>
          ))}
        </div>
      </div>
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
