import { useState } from "react";
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

const data = [
  {
    question: "How can I contact your travel agency?",
    answer:
      "You can reach us by send us an email. We also have a contact form on our website for your convenience.",
  },
  {
    question: "Are your prices competitive?",
    answer:
      "Yes, we strive to offer competitive prices and exclusive deals to our customers. We work with various suppliers to ensure you get the best value for your money.",
  },
  {
    question: "Can I book my travel online?",
    answer:
      "Absolutely! Our website allows you to conveniently book flights, hotels, and other travel services online. You can search for options, compare prices, and make secure bookings.",
  },
  {
    question: "What are the payment options available?",
    answer:
      "We accept various payment methods, including credit cards, debit cards, and online bank transfers. The specific payment options will be presented to you during the booking process.",
  },
  {
    question: "Do you offer any travel packages or special promotions?",
    answer:
      "Yes, we frequently offer travel packages and special promotions to popular destinations. Keep an eye on our website or subscribe to our newsletter to stay updated on the latest deals and offers.",
  },
];

const Faqs = ({}) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <main
      data-aos="fade-up"
      data-aos-duration="1000"
      className="container mx-auto justify-center items-center p-16 min-h-screen"
    >
      <div className="grid items-center justify-center text-center gap-3 py-10 mb-10">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-md font-semibold"
        >
          FAQs
        </p>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="50"
          className="text-5xl font-medium uppercase text-cyan-500"
        >
          Frequantly asked qustions
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="text-lg"
        >{`Have question? we're here to help.`}</p>
      </div>
      <div className="grid items-center justify-center w-[50rem] mx-auto gap-5">
        {data.map((faq, i) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
            key={i}
            className="grid items-center justify-center border-b-2 mb-5"
          >
            <div className="flex justify-between" onClick={() => toggle(i)}>
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span>
                {selected === i ? (
                  <BiChevronUp className="text-2xl" />
                ) : (
                  <BiChevronDown className="text-2xl" />
                )}
              </span>
            </div>
            <div className="mb-5">
              <p
                className={selected === i ? "faq-content-show" : "faq-content"}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Faqs;
