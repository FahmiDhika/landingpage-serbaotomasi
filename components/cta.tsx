import Image from "next/image";
import Link from "next/link";

import whatsapp from "@/public/assets/whatsapp.png";

export default function Cta() {
  return (
    <section className="w-full h-fit px-4 sm:px-8 lg:px-32 pt-16 pb-14 bg-zinc-100 font-sans flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-14 w-full max-w-5xl">
        {/* Produk Berkualitas */}
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-20 h-20 border-2 rounded-3xl p-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>
          <p className="text-xl font-bold">Produk Berkualitas</p>
          <p className="text-gray-600 text-sm">
            Produk digital dengan bahan dan teknologi terbaik untuk hasil
            maksimal.
          </p>
        </div>

        {/* Harga Bersaing */}
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-20 h-20 border-2 rounded-3xl p-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>

          <p className="text-xl font-bold">Harga Bersaing</p>
          <p className="text-gray-600 text-sm">
            Penawaran harga terbaik tanpa mengurangi kualitas produk.
          </p>
        </div>

        {/* Layanan After-Sales */}
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-20 h-20 border-2 rounded-3xl p-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
            />
          </svg>

          <p className="text-xl font-bold">Layanan After-Sales</p>
          <p className="text-gray-600 text-sm">
            Bantuan teknis dan perawatan produk kapan pun Anda butuh.
          </p>
        </div>
      </div>

      <h1 className="text-[#FF0000] font-bold text-3xl sm:text-5xl drop-shadow-2xl text-center">
        HUBUNGI SEKARANG UNTUK HARGA KHUSUS!!!
      </h1>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="red"
        className="w-12 h-12 sm:w-20 sm:h-20 mb-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>

      <Link
        href="https://wa.me/6285336664466"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center justify-center gap-3 bg-[#25D366] text-lg sm:text-2xl px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl">
          <Image
            src={whatsapp}
            alt="wa"
            width={32}
            height={32}
            className="sm:w-12 sm:h-12"
          />
          <h1 className="font-bold text-white drop-shadow-xl">
            0853-3666-4466
          </h1>
        </div>
      </Link>
    </section>
  );
}
