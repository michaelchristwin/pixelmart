"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { Card } from "./ui/card";

interface CardProps {
  name: string;
  description: string;
  price: number;
  image: StaticImageData | string;
  slug: string;
}

function ProductCard({ name, description, price, image, slug }: CardProps) {
  const router = useRouter();
  return (
    <Card
      className={`h-[300px] hover:cursor-pointer rounded-lg border-0 shadow-lg flex flex-col justify-between`}
      onClick={() => router.push(`/${slug}`)}
    >
      <div className={`h-[60%] rounded-[10px] relative w-[97%] mx-auto`}>
        <Image
          src={image}
          fill
          alt="product"
          className={`absolute rounded-[10px] top-0 left-0 object-contain`}
        />
      </div>
      <div className={`h-[37%] w-full bg-[#f4f5f7] p-2 space-y-[6px]`}>
        <p className={`font-semibold`}>{name}</p>
        <div className={`w-full h-[calc(1em*2)]`}>
          <p className={`text-[12px] leading-[1.5em] text-[#a9a9aa]`}>
            {description}
          </p>
        </div>
        <p className={`text-[14px]`}>${price}</p>
      </div>
    </Card>
  );
}

export default ProductCard;
