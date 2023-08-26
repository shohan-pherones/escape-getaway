import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

const Testimonial = ({ testimonial }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="bg-white border p-7 rounded-xl shadow-lg flex flex-col gap-5 justify-between"
    >
      <div className="flex flex-col gap-2.5">
        <ImQuotesLeft className="text-5xl text-gray-300" />
        <p className="min-h-[192px]">{testimonial.para}</p>
      </div>

      <hr />

      <div className="flex gap-5">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <Image
            priority
            src={testimonial.img}
            alt={testimonial.name}
            height={50}
            width={50}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-400 font-light">
            {testimonial.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
