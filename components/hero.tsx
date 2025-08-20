import Image from "next/image";

import produk from "@/public/assets/jws1.jpeg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full text-center border-b-4 pb-16 mb-10 px-4">
      <h2 className="text-5xl font-bold mb-6 text-center">
        🤔 APAKAH INI PERMASALAHANMU?
      </h2>

      <div className="w-full flex justify-center mb-10">
        <ul className="space-y-4 text-start text-xl font-semibold">
          <li className="bg-red-100 text-red-600 px-6 py-3 rounded-2xl shadow-md">
            ❌ Rumah terasa terlalu{" "}
            <span className="font-bold">sunyi & hampa</span>
          </li>
          <li className="bg-yellow-100 text-yellow-600 px-6 py-3 rounded-2xl shadow-md">
            ❌ Papan iklan masih{" "}
            <span className="font-bold">manual pakai kertas</span>
          </li>
          <li className="bg-blue-100 text-blue-600 px-6 py-3 rounded-2xl shadow-md">
            ❌ Pertandingan sering{" "}
            <span className="font-bold">ribut karena skor salah</span>
          </li>
          <li className="bg-green-100 text-green-600 px-6 py-3 rounded-2xl shadow-md">
            ❌ Countdown lomba{" "}
            <span className="font-bold">berantakan & bikin kacau</span>
          </li>
        </ul>
      </div>

      <p className="font-semibold text-2xl mb-4">
        kami punya semua solusi untuk semua permasalahanmu!!
      </p>

      <div className="flex justify-center mb-15">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-25"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </div>

      <h2 className="font-extrabold text-3xl sm:text-5xl mb-4 leading-tight text-gray-900">
        Ingin <span className="text-[#B2212B]">Papan Digital</span> yang{" "}
        <span className="underline decoration-[#B2212B]">Modern</span> &
        Bermanfaat?
      </h2>

      {/* Subheadline */}
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Dari{" "}
        <span className="font-semibold">Masjid, Musholla, Gedung Indoor</span>{" "}
        hingga rumah – produk kami bikin ibadah & aktivitasmu jadi lebih teratur
        dan nyaman ✨
      </p>

      {/* Kategori */}
      <div className="w-full flex flex-wrap justify-center gap-4 mb-10">
        <p className="bg-red-500 py-3 px-6 font-semibold text-white text-lg rounded-xl shadow-lg hover:scale-110 hover:shadow-red-400/60 transition">
          Jam Digital
        </p>
        <p className="bg-green-500 py-3 px-6 font-semibold text-white text-lg rounded-xl shadow-lg hover:scale-110 hover:shadow-green-400/60 transition">
          Running Text
        </p>
        <p className="bg-blue-500 py-3 px-6 font-semibold text-white text-lg rounded-xl shadow-lg hover:scale-110 hover:shadow-blue-400/60 transition">
          Alat Digital
        </p>
      </div>

      {/* Gambar Produk */}
      <div className="flex justify-center mb-8">
        <Image
          src={produk}
          alt="produk"
          width={400}
          height={400}
          className="rounded-2xl shadow-2xl hover:scale-105 hover:shadow-[#B2212B]/50 transition-transform duration-500"
        />
      </div>

      {/* Value Proposition */}
      <div className="max-w-2xl mx-auto space-y-3 text-sm sm:text-base text-gray-700 mb-10">
        <p>
          Tidak hanya sekedar jam biasa, produk kami hadir dengan fitur{" "}
          <span className="font-bold text-[#B2212B]">Auto Tartil</span> untuk
          menciptakan suasana lebih khusyuk & tenang.
        </p>
        <p>
          Bikin aktivitas ibadah lebih teratur dengan teknologi
          <span className="font-bold"> digital terbaik</span> kami.
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <Link
          href={"#produk"}
          className="bg-[#B2212B] text-white font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition"
        >
          🚀 Lihat Produk Sekarang
        </Link>
      </div>
    </section>
  );
}
