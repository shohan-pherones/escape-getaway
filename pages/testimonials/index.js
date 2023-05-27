import Testimonial from "@/components/Testimonial";

const data = [
  {
    ratings: "⭐⭐⭐⭐⭐",
    para: "I had an amazing experience with Escape-getaway Travel Agency during my trip to Bandarban. Their attention to detail and excellent customer service made my trip stress-free and enjoyable.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Sarah Lee",
    designation: "travel expert",
  },
  {
    ratings: "⭐⭐⭐⭐",
    para: "Thanks to Escape-getaway Travel Agency, my family and I were able to enjoy the beautiful sights and sounds of cox's bazar without any hassle. Their expert knowledge of the city and personalized recommendations truly made the trip unforgettable.",
    img: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "John Diago",
    designation: "artist",
  },
  {
    ratings: "⭐⭐⭐",
    para: "I recently booked a trip to Rangamati with Escape-getaway Travel Agency, and it was one of the best decisions I've made. Their team took care of all the logistics, and I was able to fully immerse myself in the breathtaking scenery and culture.",
    img: "https://randomuser.me/api/portraits/women/87.jpg",
    name: "Laura Michelle",
    designation: "food vloger",
  },
  {
    ratings: "⭐⭐⭐⭐",
    para: "I had an incredible time on my safari in Niladri, thanks to the amazing team at Escape-getaway Travel Agency. They arranged everything from transportation to accommodations, and their knowledge of the wildlife and landscapes made the experience unforgettable.",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Mark Richard",
    designation: "youtuber",
  },
  {
    ratings: "⭐⭐⭐⭐⭐",
    para: "If you're looking for a travel agency that can create a one-of-a-kind trip, look no further than Escape-getaway Travel Agency. They planned a personalized tour of Shundorbon for me, and every moment was filled with unique experiences and incredible scenery.",
    img: "https://randomuser.me/api/portraits/women/42.jpg",
    name: "Emily Smith",
    designation: "photographer",
  },
  {
    ratings: "⭐⭐⭐⭐",
    para: "I had always dreamed of visiting the Saint martin Islands, and thanks to Escape-getaway Travel Agency, I was able to make that dream a reality. Their team helped me choose the perfect itinerary and made sure every detail was taken care of",
    img: "https://randomuser.me/api/portraits/women/26.jpg",
    name: "Amy Andrea",
    designation: "fashion designer",
  },
  {
    ratings: "⭐⭐⭐⭐⭐",
    para: "I can't recommend Escape-getaway Travel Agency enough. They helped me plan a trip to jaflong, and it was a truly unforgettable experience. Their team was always available to answer questions and provide recommendations, making the trip stress-free and enjoyable.",
    img: "https://randomuser.me/api/portraits/men/24.jpg",
    name: "Thomas Wilson",
    designation: "business expert",
  },
  {
    ratings: "⭐⭐⭐",
    para: "If you're looking for a travel agency that can plan a luxury trip, look no further than Escape-getaway Travel Agency. They arranged a breathtaking trip to the Saint Martin for me, and every aspect of the trip was truly top-notch.",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "David Henry",
    designation: "content creator",
  },
];

const Tenstimonials = () => {
  return (
    <div className="packeges container mx-auto px-5 md:px-0 justify-center items-center py-10">
      <h1
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl font-semibold text-center"
      >
        Testimonials
      </h1>

      <div className="testimonials-wrapper grid py-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((testimonial) => (
          <Testimonial key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Tenstimonials;
