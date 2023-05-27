import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

const Testimonial = ({ testimonial }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="grid shadow-md rounded-md px-5 mb-10 gap-10 justify-center "
    >
      <div className="py-10 mt-10 h-[21.5rem]">
        <ImQuotesLeft className="text-lg mb-2" />
        <p>{testimonial.para}</p>
      </div>
      <div className="flex gap-5 p-5 items-center h-[7.25rem] ">
        <Image
          priority
          src={testimonial.img}
          className="w-16 h-16 rounded-full"
          alt={testimonial.name}
          height={50}
          width={50}
        />
        <div className="justify-center items-center">
          <p className="uppercase font-semibold tracking-wider">
            {testimonial.name}
          </p>
          <p>{testimonial.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
