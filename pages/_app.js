import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps, session }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Escape Getaway</title>
        <meta
          name="description"
          content="Discover your dream escape with Getaway, your ultimate travel agency for unforgettable journeys. Explore exotic destinations, plan seamless vacations, and create cherished memories with Escape Getaway."
        />
        <meta
          name="keywords"
          content="Travel agency, Getaway vacations, Exotic destinations, Dream escapes, Unforgettable journeys, Vacation planning, Travel experiences, Adventure trips, Luxury getaways, Travel packages"
        />
      </Head>

      <SessionProvider session={session}>
        <Navbar />
        <ToastContainer />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
