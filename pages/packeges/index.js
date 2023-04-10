import Link from "next/link";

const data = [
  {
    title: "Bandaraban's Package",
    image:
      "https://external-preview.redd.it/5JxH-BnQzbEQKpS0BYUMMiLfjYURfm4oalqu11hs5pk.jpg?width=960&crop=smart&auto=webp&s=571eaeeb0948ecdf7ea2b8894e576d052bff17c1",
    price: 5000,
    personCount: 2,
    description:
      "The top attractions to visit in Bandarban are: Boga Lake Nilgiri Mountains Nilachal Nafa-khum Sangu River See all attractions in Bandarban.",
    tags: "#bandarban #chittagong",
  },
  {
    title: "Jaflong Package",
    image:
      "https://th.bing.com/th/id/OIP.7BGMzAxq-45QFOR7q0B0wAHaE8?pid=ImgDet&w=960&h=640&rs=1",
    price: 4000,
    personCount: 3,
    description:
      "jaflong is a popular destanation in Bangladesh among the local tourists. It is located in the north-eastern part of Bangaladesh on the india-bangladesh border.",
    tags: "#jaflong #sylhet",
  },
  {
    title: "Cox's bazar Package",
    image:
      "https://touristsignal.com/wp-content/uploads/2014/12/Saint-Martin-Coxs-Bazar.jpg",
    price: 10000,
    personCount: 5,
    description:
      "Cox's Bazar is consists of miles of golden sands, towering cliffs, surfing waves, rare conch shells, colourful pagodas, Buddhist temples and tribes. The most attractive tourist Resort full of bounties of nature in",
    tags: "#cox'sbazar #chattogram",
  },
  {
    title: "Rangamti Package",
    image:
      "https://i.pinimg.com/originals/f7/06/b8/f706b845fa3a254684ea395d5d3c2c7a.jpg",
    price: 12500,
    personCount: 6,
    description:
      "Rangamati is surrounded by natural features like as mountains, rivers, lakes, and waterfalls. Rangamati is also home to several ethnic groups. ",
  },
  {
    title: "Shundorbon Package",
    image:
      "https://th.bing.com/th/id/OIP.o4xv5OEyqhWSNMbR1nimVwHaE8?pid=ImgDet&rs=1",
    price: 8000,
    personCount: 10,
    description:
      "The Sundarban (Bengali: সুন্দরবন Shundorbôn) is the largest single block of tidal halophytic mangrove forest in the world. The name Sundarban can be literally translated as “beautiful jungle” or “beautiful forest” in the Bengali language (Sundar, “beautiful” and ban, “forest” or “jungle”).",
  },
  {
    title: "Niladri Lake Package",
    image: "https://live.staticflickr.com/65535/49286529142_fe646cd21a_b.jpg",
    price: "5000",
    personCount: 6,
    description:
      "Niladri Lake resembles a drop of tear from the sky. This lake is full of scattered stones at its feet. The slopes of Meghalaya stand next to this lake of thick blue water. The breeze song with the tree leaves comes from the nearby green slopes. You can find their small hillocks in Niladri Lake.",
  },
];

const Packeges = () => {
  return (
    <div className="packeges container mx-auto justify-center items-center text-center py-10">
      <h1 className="text-4xl font-medium">Packegas</h1>
      <div className="packeges-wrpper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 items-center ">
        {data.map((packege) => (
          <div className="packege flex flex-col gap-2 shadow-md rounded-md overflow-hidden">
            <div className="img  ">
              <img
                src={packege.image}
                alt={packege.title}
                className="h-[16rem] w-full"
              />
            </div>
            <div className="texts flex flex-col gap-3 px-5 pb-3">
              <h3 className="title text-cyan-500 text-2xl font-medium text-start">
                {packege.title}
              </h3>
              <p className="desc text-start h-[7.5rem]">
                {packege.description}
              </p>
              <span className="border-t"></span>
              <span className="tags text-start text-rose-500 font-medium ">
                {packege.tags}
              </span>
              <div className="flex gap-3">
                <span className="price text-cyan-500 font-medium text-xl">
                  Price: {packege.price} BDT
                </span>
                <span className="personCount text-xl">
                  for {packege.personCount}person
                </span>
              </div>
              <Link
                href={"/"}
                className="bg-cyan-500 py-2 px-5 rounded-md border font-medium text-white hover:bg-cyan-600 duration-300 mb-3 tracking-wider"
              >
                Explore Packege
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packeges;
