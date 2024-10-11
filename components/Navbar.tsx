import Link from "next/link";
import { ShoppingCart, User, Search, Heart } from "lucide-react";

function Navbar() {
  return (
    <nav className={`flex justify-between px-[40px] py-[20px] items-center`}>
      <p className={`font-bold text-xl`}>Pixelmart</p>
      <ul className={`flex items-center space-x-6`}>
        <Link
          role={"listitem"}
          href={`/`}
          className={`text-[14px] font-semibold`}
        >
          Home
        </Link>
        <Link
          role={"listitem"}
          href={`/`}
          className={`text-[14px] font-semibold`}
        >
          Shop
        </Link>
        <Link
          role={"listitem"}
          href={`/`}
          className={`text-[14px] font-semibold`}
        >
          About
        </Link>
        <Link
          role={"listitem"}
          href={`/`}
          className={`text-[14px] font-semibold`}
        >
          Contact
        </Link>
      </ul>
      <div className={`flex space-x-6 items-center`}>
        <User size={20} />
        <Search size={20} />
        <Heart size={20} />
        <ShoppingCart size={20} />
      </div>
    </nav>
  );
}

export default Navbar;
