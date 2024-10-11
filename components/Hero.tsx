import { Button } from "@/components/ui/button";

function Hero() {
  return (
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
  );
}

export default Hero;
