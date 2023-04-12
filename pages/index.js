import HeroSection from "@/components/HeroSection";
import Packeges from "./packages";
import { getAllPackages } from "@/prisma/packages";

const HomePage = ({ packages }) => {
  return (
    <div>
      <HeroSection />
      <Packeges packages={packages} />
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
