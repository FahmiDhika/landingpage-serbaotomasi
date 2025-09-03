import Link from "next/link";
import Image from "next/image";

import logo from "@/public/assets/logo panjang.png";
import tiktok from "@/public/assets/tiktok.png";
import shopee from "@/public/assets/shopee 2.png";
import tokopedia from "@/public/assets/tokopedia.png";

export default function Footer() {
  return (
    <section className="w-full h-fit px-4 sm:px-8 lg:px-32 pt-16 pb-14 bg-white font-sans">
      {/* Logo */}
      <Image src={logo} alt="logo" width={160} className="mb-4 sm:mb-6" />

      {/* Deskripsi */}
      <p className="text-base sm:text-lg max-w-md">
        SerbaOtomasi - Toko Jam Digital Masjid & Running Text Murah Terpercaya
      </p>

      {/* SIDEBAR TOKO */}
      <div className="lg:w-1/5 flex flex-col gap-3 w-full my-10">
        <Link
          href="https://tiktok.com/@serbaotomasi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full flex bg-black items-center gap-4 px-4 py-2 rounded-xl shadow-xl">
            <Image src={tiktok} alt="tiktok" width={40} />
            <p className="text-white font-bold text-lg sm:text-xl">TikTok</p>
          </div>
        </Link>
        <Link
          href="https://www.tokopedia.com/serbaotomasi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full flex bg-[#00AA5B] items-center gap-4 px-4 py-2 rounded-xl shadow-xl">
            <Image src={tokopedia} alt="tokopedia" width={40} />
            <p className="text-white font-bold text-lg sm:text-xl">Tokopedia</p>
          </div>
        </Link>
        <Link
          href="https://shopee.co.id/serbaotomasi1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full flex bg-[#FC5A31] items-center gap-4 px-4 py-2 rounded-xl shadow-xl">
            <Image src={shopee} alt="shopee" width={40} />
            <p className="text-white font-bold text-lg sm:text-xl">Shopee</p>
          </div>
        </Link>
      </div>

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

      {/* Google Maps Embed */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.5611076925597!2d112.62157048394111!3d-7.940820358663748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629e991f19ca9%3A0x91e8c6f27cd5d74b!2sWorkshop%20SerbaOtomasi!5e0!3m2!1sid!2sid!4v1756440691248!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

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
