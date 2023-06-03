import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps, session }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <ToastContainer />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
