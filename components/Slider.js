import { useEffect, useState } from "react";

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
    const timer = setTimeout(() => {
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
    height: "100%",
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };

  return (
    <div className="h-[37rem] relative">
      <div style={bgImageStyle}></div>
      <div className="description w-full absolute z-10 top-3 left-3 md:top-8 md:left-10 lg:top-10 lg:left-10">
        <div>
          <div className="container mx-auto flex flex-col gap-2 md:gap-5 lg:gap-8">
            <h1 className="text-4xl md:text-6xl font-bold pt-20">
              Adventure awaits, let us plan your escape
            </h1>
            <p className="w-3/4 md:font-semibold">
              The provided words are potential options for a travel agency
              website. They highlight the agency's focus on adventure and
              relaxation, personalized itineraries, expertise, diversity of
              travel options, commitment to sustainability, convenience, and
              creating memorable experiences for customers.
            </p>
            <button className="border border-cyan-600 bg-cyan-600 text-white p-2 md:p-3 lg:p-4 w-60 rounded-lg hover:bg-cyan-700">
              More information
            </button>
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
