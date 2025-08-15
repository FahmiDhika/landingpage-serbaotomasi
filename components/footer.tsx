import Link from "next/link";
import Image from "next/image";

import logo from "@/public/assets/logo panjang.png";

export default function Footer() {
  return (
    <section className="w-full h-fit px-4 sm:px-8 lg:px-32 pt-16 pb-14 bg-white font-sans">
      {/* Logo */}
      <Image src={logo} alt="logo" width={160} className="mb-4 sm:mb-6" />

      {/* Deskripsi */}
      <p className="text-base sm:text-lg mb-12 sm:mb-24 max-w-md">
        SerbaOtomasi - Toko Jam Digital Masjid & Running Text Murah Terpercaya
      </p>

      {/* Judul Lokasi */}
      <p className="font-semibold text-lg sm:text-xl mb-2">
        Workshop Serba Otomasi
      </p>

      {/* Alamat */}
      <div className="flex items-start sm:items-center mb-4 gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        <p className="text-sm sm:text-lg leading-relaxed">
          Jl. Papa Kuning 2 No.25, Tulusrejo, Kec. Lowokwaru, Kota Malang, Jawa
          Timur 65141
        </p>
      </div>

      {/* Link Maps */}
      <Link
        href="https://maps.app.goo.gl/hhTyjSXRsw5krkMf6"
        target="_blank"
        rel="noopener noreferrer"
        className="pl-0 sm:pl-6 text-blue-600 hover:underline"
      >
        Lihat di Maps →
      </Link>

      {/* Footer */}
      <div className="border-t pt-6 mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <Link
          href="/kebijakan"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kebijakan Privasi
        </Link>
        <p className="text-sm">© 2024 | Cendana2000</p>
      </div>
    </section>
  );
}
