import Link from "next/link";
import { useEffect, useState } from "react";
import { images } from "@/data/images";

const Slider = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${images[currentState].src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div className="relative">
      <div
        style={bgImageStyle}
        className={`h-[calc(100vh-5rem)] duration-1000 ${
          images.indexOf(currentState) ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div className="description w-full absolute z-10 top-3 left-3 md:top-8 md:left-8 lg:top-10 lg:left-10">
        <div>
          <div className="container mx-auto flex flex-col gap-2 md:gap-5 ">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="text-4xl lg:text-7xl 2xl:text-8xl font-bold pt-20 text-white uppercase"
            >
              Adventure awaits, let us plan your escape.
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="2000"
              className="w-3/4 md:text-lg font-medium text-white"
            >
              {`The provided words are potential options for a travel agency
              website. They highlight the agency's focus on adventure and
              relaxation, personalized itineraries, expertise, diversity of
              travel options, commitment to sustainability, convenience, and
              creating memorable experiences for customers.`}
            </p>
            <Link
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="2000"
              href="/packages"
              className="bg-black/10 self-start p-3 lg:py-5 lg:px-10 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-gray-900/90 duration-500 hover:border-white/75 mt-4"
            >
              Explore our packages
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
