import Dinning from "@/assets/dinning.jpg";
import LivingRoom from "@/assets/living-room.jpg";
import Bedroom from "@/assets/bedroom.jpg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { ProductData } from "@/lib/mockdata";

export default function Home() {
  const RangeImageSrcs = [
    { name: "Dinning", image: Dinning },
    { name: "Living Room", image: LivingRoom },
    { name: "Bedroom", image: Bedroom },
  ];
  return (
    <main>
      <div
        className={`flex flex-row-reverse items-center w-full h-[600px] bg-[url("../assets/store-hero.jpg")] bg-cover bg-center p-[50px]`}
      >
        <div
          className={`h-[400px] w-[550px] bg-[#fff3e3] rounded-lg pt-[60px] px-[30px]`}
        >
          <div className={`w-full h-full space-y-3`}>
            <p className={`font-bold text-[19px] leading-3 text-[#75706C]`}>
              New Arrival
            </p>
            <h1 className={`text-[#b88d2e] text-6xl font-extrabold`}>
              Discover Our New Collection
            </h1>
            <p className={`text-[#75706C]`}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              explicabo architecto quis accusantium! Nulla placeat ad
            </p>
            <Button
              className={`bg-[#B88D2E] !mt-[30px] block text-white w-[150px] h-[60px]`}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
      <div className={`w-full h-[500px] p-[40px]`}>
        <p className={`text-center font-bold text-[30px]`}>Browse The Range</p>
        <p className={`text-center text-[#75706C]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div
          className={`grid grid-cols-3 w-[100%] gap-[40px] px-[80px] mt-3 h-[400px]`}
        >
          {RangeImageSrcs.map((src, index) => (
            <div className={`w-full rounded-[10px]`} key={index}>
              <Image
                src={src.image}
                alt="Phones"
                className={`h-[300px] rounded-[10px]`}
              />
              <p className={`text-center font-semibold`}>{src.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`w-full p-[40px] h-[500px]`}>
        <p className={`text-center font-bold text-[30px]`}>Our Products</p>
        <div
          className={`grid grid-cols-4 gap-[20px] w-[80%] mx-auto mt-[20px]`}
        >
          <ProductCard {...ProductData[0]} />
          <ProductCard {...ProductData[1]} />
          <ProductCard {...ProductData[2]} />
          <ProductCard {...ProductData[3]} />
        </div>
      </div>
    </main>
  );
}
