import PackageItem from "@/components/PackageItem";
import { data } from "@/data/data";

const Packeges = () => {
  return (
    <div className="packeges container mx-auto justify-center items-center text-center py-10">
      <h1 className="text-4xl font-medium">Packegas</h1>
      <div className="packeges-wrpper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 items-center ">
        {data.map((packege, i) => (
          <PackageItem key={i} packege={packege} />
        ))}
      </div>
    </div>
  );
};

export default Packeges;
