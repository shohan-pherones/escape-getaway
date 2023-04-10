import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1681125444/escape-getaway/pexels-bagus-pangestu-1464815_lp09kw.jpg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1681125442/escape-getaway/pexels-spencer-davis-4388165_uujmgr.jpg",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1681141301/escape-getaway/pexels-photo-1271619_acgpld.jpg",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/doo2ywmrb/image/upload/v1681141277/escape-getaway/pexels-photo-5029301_rkkyr5.jpg",
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
      <div className="description w-full absolute z-10 top-3 left-3 md:top-8 md:left-10 lg:top-10 lg:left-10">
        <div>
          <div className="container mx-auto flex flex-col gap-2 md:gap-5 lg:gap-8">
            <h1 className="text-5xl lg:text-8xl font-bold pt-20 text-white uppercase">
              Adventure awaits, let us plan your escape
            </h1>
            <p className="w-3/4 text-lg font-medium text-white">
              {`The provided words are potential options for a travel agency
              website. They highlight the agency's focus on adventure and
              relaxation, personalized itineraries, expertise, diversity of
              travel options, commitment to sustainability, convenience, and
              creating memorable experiences for customers.`}
            </p>
            <Link
              href="/packages"
              className="bg-black/10 self-start py-5 px-10 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-lg inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black/90 duration-500 hover:border-white/75"
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
