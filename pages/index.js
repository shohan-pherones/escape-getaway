import HeroSection from "@/components/HeroSection";
import Packeges from "./packages";
import { getAllPackages } from "@/prisma/packages";
import Testimonials from "./testimonials";

const HomePage = ({ packages }) => {
  return (
    <div>
      <HeroSection />
      <Packeges packages={packages} />
      <Testimonials />
    </div>
  );
};

export default HomePage;

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
