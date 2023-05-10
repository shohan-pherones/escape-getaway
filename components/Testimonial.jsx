import { ImQuotesLeft } from "react-icons/im";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="grid shadow-lg rounded-lg px-5 mb-10 gap-10 justify-center ">
      <div className="py-10 mt-10 h-[21.5rem]">
        <ImQuotesLeft className="text-lg mb-2" />
        <p>{testimonial.para}</p>
      </div>
      <div className="flex gap-5 p-5 items-center h-[7.25rem] ">
        <img
          src={testimonial.img}
          className="w-16 h-16 rounded-full"
          alt={testimonial.name}
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
