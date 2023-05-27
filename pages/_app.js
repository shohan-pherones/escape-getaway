import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

export default function App({ Component, pageProps, session }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <SessionProvider session={session}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
