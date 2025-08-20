import Image from "next/image";
import logo from "@/public/assets/logo panjang.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4 px-4 border-b-2 pb-4">
      {/* Logo */}
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          width={200}
          height={200}
          className="w-40 sm:w-52 h-auto"
        />
      </Link>

      {/* Slogan */}
      <h1 className="text-xl sm:text-2xl font-bold tracking-wide px-3 py-1 border-b-2 text-center sm:text-left">
        Your Digital Solution.
      </h1>

      {/* Navigation */}
      <nav className="flex gap-4">
        <Link
          href={"/produk-jws"}
          className="relative text-lg font-medium px-4 py-2 rounded-lg transition duration-300 
                     hover:text-white hover:bg-gradient-to-r from-[#B2212B] to-red-600 
                     shadow-md hover:shadow-lg"
        >
          Jam Waktu Shalat
        </Link>

        <Link
          href={"/produk-running-text"}
          className="relative text-lg font-medium px-4 py-2 rounded-lg transition duration-300 
                     hover:text-white hover:bg-gradient-to-r from-[#B2212B] to-red-600 
                     shadow-md hover:shadow-lg"
        >
          Running Text
        </Link>
      </nav>
    </header>
  );
}
