import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const images = [
  {
    id: 1,
    src: "https://drscdn.500px.org/photo/1036091092/q%3D80_m%3D1500/v2?sig=a03a79b0c9cf7886bf12af1da75b63ff302dcae80862b6272d648cd01b0b0b0e",
  },
  {
    id: 2,
    src: "https://drscdn.500px.org/photo/60163706/q%3D80_m%3D1500/v2?sig=8b942191f961143d7d8663d7edbc5d3c430a5b79640628b5f12f49dee28feda7",
  },
  {
    id: 3,
    src: "https://drscdn.500px.org/photo/86655053/q%3D80_m%3D1500/v2?sig=0124ec21e70bb5e565df2c60d9787467808f4ead98d92052f0d3bbc61a47e0a9",
  },
  {
    id: 4,
    src: "https://drscdn.500px.org/photo/287092861/q%3D80_m%3D1500/v2?sig=51e7a9cc7672dc768887d260d94ec9c87958493de4b33892c6d59bef2372d79d",
  },
];

const Slider = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 10000);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${images[currentState].src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  const goToNext = useCallback((currentState) => {
    setCurrentState(currentState);
  }, []);

  return (
    <div className="relative">
      <div style={bgImageStyle} className="h-[calc(100vh-5rem)]"></div>
      <div className="description w-full absolute z-10 top-3 left-3 md:top-8 md:left-8 lg:top-10 lg:left-10">
        <div>
          <div className="container mx-auto flex flex-col gap-2 md:gap-5 lg:gap-8">
            <h1 className="text-4xl lg:text-7xl 2xl:text-8xl font-bold pt-20 text-white uppercase">
              Adventure awaits, let us plan your escape
            </h1>
            <p className="w-3/4 md:text-lg font-medium text-white">
              {`The provided words are potential options for a travel agency
              website. They highlight the agency's focus on adventure and
              relaxation, personalized itineraries, expertise, diversity of
              travel options, commitment to sustainability, convenience, and
              creating memorable experiences for customers.`}
            </p>
            <Link
              href="/packages"
              className="bg-black/10 self-start p-3 lg:py-5 lg:px-10 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-gray-900/90 duration-500 hover:border-white/75 mt-4"
            >
              Explore our packages
            </Link>
          </div>
        </div>
        <div className="flex gap-3 text-center">
          {images.map((image, currentState) => (
            <span key={image.id} onClick={() => goToNext(currentState)}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
