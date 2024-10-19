import Image from "next/image";

interface CardProps {
  name: string;
  description: string;
  price: number;
}

function ProductCard({ name, description, price }: CardProps) {
  return (
    <div
      className={`h-[300px] rounded-lg shadow flex flex-col justify-between`}
    >
      <div className={`h-[60%] relative w-[70%] mx-auto`}>
        <Image
          src={`https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg`}
          fill
          alt="product"
          className={`absolute top-0 left-0 object-contain`}
        />
      </div>
      <div className={`h-[30%] w-full bg-[#f4f5f7] p-2 space-y-[6px]`}>
        <p className={`font-semibold`}>{name}</p>
        <p className={`text-[12px] text-[#a9a9aa]`}>{description}</p>
        <p className={`text-[14px]`}>{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
