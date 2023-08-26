import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vgjljcl",
        "template_e9yrtor",
        form.current,
        "t5Pz4uUfxgdWFtoTd"
      )
      .then(
        (result) => {
          console.log(result.text);

          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const submitHandler = () => {
    if (sendEmail) {
      toast.success("Email sent!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Something went wrong!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <main>
      <form
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        ref={form}
        onSubmit={sendEmail}
        className="container mx-auto  px-5 p-44 w-1/2  justify-center  text-start "
      >
        <div className="w-full">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid grid-cols-1 gap-2"
          >
            <h2 className="text-4xl  font-semibold text-start">
              Love to hear from you,
            </h2>
            <h2 className="text-4xl  font-semibold text-start">
              Get in touch 👋🏻
            </h2>
          </div>
          <div className="py-10 mt-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="name" className="mt-5 font-semibold">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="James vince"
                  className="outline-none border p-3 w-full"
                />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label htmlFor="email" className="mt-5 font-semibold">
                  Your email
                </label>
                <input
                  type="email"
                  placeholder="xyz@gmail.com"
                  className="outline-none  border p-3 w-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="py-5 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                placeholder="tell usabout your travel plan"
                cols="20"
                rows="5"
                className="outline-none  border p-3 w-full resize-none"
              />
            </div>
          </div>
          <button
            onClick={submitHandler}
            type="submit"
            value="Send"
            className="text-center bg-black/90 self-start p-3 lg:py-3 lg:px-44 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-sm inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black duration-500 hover:border-white/75"
          >
            Send
          </button>
        </div>
      </form>
    </main>
  );
};

export default Contact;
