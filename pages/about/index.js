import Image from "next/image";
const img1 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683715837/escape-getaway/pexels-photo-3968117_vtxa3n.jpg";
const img2 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683712169/escape-getaway/pexels-photo-697244_xs4yhq.jpg";
const img3 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683712169/escape-getaway/pexels-photo-708440_cqwezk.jpg";

const img4 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683712169/escape-getaway/pexels-photo-14388136_b4so1e.jpg";

const img5 =
  "https://res.cloudinary.com/doo2ywmrb/image/upload/v1683712169/escape-getaway/pexels-photo-13385171_ruq0ib.jpg";

const AboutPage = () => {
  return (
    <main className="py-20 container mx-auto px-5 md:px-0">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="heading text-3xl sm:text-5xl lg:text-7xl w-4/6 font-semibold leading-tight  sm:leading-tight lg:leading-tight"
      >
        <span className="text-design-left relative"> We provide</span>
        <span className="text-design-right relative"> Unforgettable</span>
        <span> Journeys </span>
        <span className="text-design-right relative">Designed</span>
        <span> Just for You</span>
      </div>

      {/* image section */}
      <div
        data-aos-delay="200"
        data-aos-duration="2000"
        className="h-auto md:h-[80rem] lg:h-[30rem] grid md:grid-cols-2 lg:grid-cols-5 gap-5 my-16"
      >
        <div className="flex items-start md:col-span-1 lg:col-span-1">
          <Image
            data-aos="fade-right"
            data-aos-duration="1000"
            priority
            unoptimized
            src={img1}
            loader={() => img1}
            alt={"image"}
            height={50}
            width={50}
            className="h-[20rem] w-full object-cover"
          />
        </div>
        <div className="flex items-end md:col-span-1 lg:col-span-1">
          <Image
            data-aos="fade-up"
            data-aos-duration="1000"
            priority
            unoptimized
            src={img2}
            loader={() => img2}
            alt={"image"}
            height={50}
            width={50}
            className="h-[20rem] w-full object-cover"
          />
        </div>
        <div className="flex items-center md:col-span-1 lg:col-span-1">
          <Image
            data-aos="fade-down"
            data-aos-duration="1000"
            priority
            unoptimized
            src={img3}
            loader={() => img3}
            alt={"image"}
            height={50}
            width={50}
            className="h-[20rem] w-full object-cover"
          />
        </div>
        <div className="flex items-start md:col-span-1 lg:col-span-1">
          <Image
            data-aos="fade-up"
            data-aos-duration="1000"
            priority
            unoptimized
            src={img4}
            loader={() => img4}
            alt={"image"}
            height={50}
            width={50}
            className="h-[20rem] w-full object-cover"
          />
        </div>
        <div className="flex items-center md:col-span-1 lg:col-span-1">
          <Image
            data-aos="fade-left"
            data-aos-duration="1000"
            priority
            unoptimized
            src={img5}
            loader={() => img5}
            alt={"image"}
            height={50}
            width={50}
            className="h-[20rem] w-full object-cover"
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="space-y-4 border-b pb-5"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl w-4/6 font-semibold leading-tight  sm:leading-tight lg:leading-tight">
          The art of visual storytelling
        </h1>
        <p className="text-xl">
          We are dedicated to providing the best travel packages for our
          customers. We understand that planning a trip can be overwhelming,
          which is why we offer a variety of customizable packages to suit every
          need and budget. Our travel experts work tirelessly to research and
          curate the best destinations, accommodations, and activities to
          provide an unforgettable travel experience for our clients. Whether
          you are looking for a relaxing beach getaway, a cultural adventure, or
          a thrilling outdoor excursion, we have a package that will exceed your
          expectations. With our best travel packages, you can rest assured that
          every detail of your trip will be taken care of, leaving you free to
          enjoy your vacation to the fullest.
        </p>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="my-16 space-y-4"
      >
        <h1 className="text-3xl sm:text-5xl lg:text-7xl w-4/6 font-semibold leading-tight  sm:leading-tight lg:leading-tight">
          <span className="text-design-left relative">EscapeGetaway</span> - 5
          Things we value
        </h1>
        <p className="text-3xl font-semibold">
          Strong values that bring great people together
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-10 gap-5 pb-16 text-3xl font-medium "
      >
        <div className="card flex items-center p-5">
          <h1 className="">Always be nice and respectful</h1>
        </div>
        <div className="card flex items-center p-5">
          Believe in dreams becoming reality
        </div>
        <div className="card flex items-center p-5">
          {" "}
          Exploring Hidden Gems Around the World
        </div>
        <div className="card flex items-center p-5">
          Own it! even if it’s a mistake
        </div>
        <div className="card flex items-center p-5">
          Travel is a lifelong education
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="my-16 space-y-5"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight  sm:leading-tight lg:leading-tight relative text-design-left inline-block">
          The Beauty of Our Differences
        </h1>

        <p className="text-gray-500 font-semibold">
          {`We take pride in our ability to customize travel packages according to
          our clients' requirements.`}
        </p>
        <p className="text-xl">
          We believe that our attention to detail and personalized approach sets
          us apart from other travel agencies. We take the time to get to know
          our clients and understand their needs, so we can recommend the best
          travel options for them. Our commitment to quality and customer
          satisfaction is reflected in our wide range of travel services, which
          include flight bookings, hotel reservations, tours and activities, and
          transportation arrangements. We work with trusted partners to ensure
          that our clients receive the best travel experiences at competitive
          prices.
        </p>
        <p className="text-xl">
          what makes us different is our dedication to providing personalized
          and high-quality travel services that cater to individual needs and
          preferences. We take pride in helping our clients plan their dream
          trips and creating unforgettable travel experiences that they will
          cherish for a lifetime.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
