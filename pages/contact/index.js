import Link from "next/link";

const Contact = () => {
  return (
    <div className="container mx-auto px-5 p-48 w-1/2 justify-center  text-start ">
      <div className="grid justify- ">
        <h2 className="text-4xl  font-semibold text-start">
          Love to hear from you,
        </h2>
        <h2 className="text-4xl  font-semibold text-start">Get in touch 👋🏻</h2>
      </div>
      <div className="py-10 mt-10 mx-auto justify-center ">
        <div className="flex  gap-5 ">
          <div className="grid gap-3 w-full">
            <label htmlFor="name" className="mt-5 font-semibold">
              Your name
            </label>
            <input
              type="text"
              placeholder="James vince"
              className="outline-none border p-3 w-full"
            />
          </div>
          <div className="grid gap-3 w-full">
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
      <Link
        href={"/"}
        className="text-center bg-black/90 self-start p-3 lg:py-3 lg:px-44 text-white uppercase tracking-widest font-semibold border border-white/50 rounded-sm inset-2 appearance-none backdrop-blur-md shadow-lg bg-blend-color-dodge hover:bg-black duration-500 hover:border-white/75"
      >
        Send
      </Link>
    </div>
  );
};

export default Contact;
