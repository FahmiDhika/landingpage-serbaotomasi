"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

export default function Testimoni() {
  const testimoni = [
    {
      nama: "D***y",
      Rating: "⭐⭐⭐⭐⭐",
      Produk: "Jam Digital Masjid JR100",
      Komentar:
        "Alhamdulillah jam digital nya sudah Sampek, Alhamdulillah berfungsi dgn baik ,aman GK ada yg lecet atau rusak👍🏻",
    },
    {
      nama: "T***S",
      Rating: "⭐⭐⭐⭐⭐",
      Produk: "Jam Digital Masjid JR100",
      Komentar:
        "Alhamdulillah barang telah sampai dengan aman, kualitas sangat baik pengiriman cepat, Ajiiib pokonya",
    },
    {
      nama: "E***q",
      Rating: "⭐⭐⭐⭐⭐",
      Produk: "Jam Digital Masjid JR135",
      Komentar:
        "Alhamdulillah barangnya sesuai pesanan pengiriman tepat waktu. Dan sampai dengan selamat terimakasih JWS Mantapp terbaik👍",
    },
    {
      nama: "J***y",
      Rating: "⭐⭐⭐⭐⭐",
      Produk: "JWS TV LED Android",
      Komentar:
        "Barang aman, berjalan dgn baik dan tampilan bisa di edit, dan tdk kalah pentingnya penjual melayani dgn sangat baik 👍👍",
    },
    {
      nama: "D****",
      Rating: "⭐⭐⭐⭐⭐",
      Produk: "Running Text RGB Full Color",
      Komentar:
        "Mantap jos gandos masbro jangan ragu belanja di toko ini amanah dan terpercaya barang sampai dalam kondisi baik",
    },
  ];

  const fotoTestimoni = useMemo(
    () => [
      "/assets/testimoni/fototestimoni11.png",
      "/assets/testimoni/fototestimoni1.webp",
      "/assets/testimoni/fototestimoni2.webp",
      "/assets/testimoni/fototestimoni3.png",
      "/assets/testimoni/fototestimoni4.webp",
      "/assets/testimoni/fototestimoni9.jpeg",
      "/assets/testimoni/fototestimoni5.png",
      "/assets/testimoni/fototestimoni10.jpeg",
      "/assets/testimoni/fototestimoni6.png",
      "/assets/testimoni/fototestimoni7.webp",
      "/assets/testimoni/fototestimoni12.png",
      "/assets/testimoni/fototestimoni8.jpeg",
    ],
    []
  );

  // === INFINITE LOOP LOGIC (mirip ProdukCarousel) ===
  const carouselRef = useRef<HTMLDivElement>(null);

  const extendedFoto = useMemo(() => {
    if (fotoTestimoni.length === 0) return [];
    return [...fotoTestimoni, ...fotoTestimoni, ...fotoTestimoni]; // duplikat 3x
  }, [fotoTestimoni]);

  // posisikan scroll di "set tengah"
  useEffect(() => {
    const el = carouselRef.current;
    if (!el || fotoTestimoni.length === 0) return;
    const oneSetWidth = el.scrollWidth / 3;
    el.scrollTo({ left: oneSetWidth, behavior: "instant" });
  }, [fotoTestimoni]);

  // handle looping
  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const oneSetWidth = el.scrollWidth / 3;
    const buffer = 1;

    if (el.scrollLeft >= oneSetWidth * 2 - buffer) {
      el.scrollTo({ left: el.scrollLeft - oneSetWidth, behavior: "instant" });
    }
    if (el.scrollLeft <= buffer) {
      el.scrollTo({ left: el.scrollLeft + oneSetWidth, behavior: "instant" });
    }
  };

  // navigasi manual
  const scroll = (dir: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const delta = dir === "left" ? -el.clientWidth : el.clientWidth;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="w-full h-fit px-4 sm:px-8 lg:px-32 pt-9 pb-14 bg-zinc-100 font-sans">
      <h1 className="text-center text-2xl sm:text-4xl font-bold mb-14">
        Kata Mereka
      </h1>

      {/* List Testimoni (teks) */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 mb-14">
        {testimoni.map((t, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-[300px] bg-white p-6 rounded-xl shadow-lg flex-shrink-0"
          >
            <p className="text-yellow-500 text-lg mb-2">{t.Rating}</p>
            <h3 className="font-bold">{t.Produk}</h3>
            <p className="text-gray-600 italic text-sm mt-1">{t.Komentar}</p>
            <p className="mt-3 font-semibold text-[#B2212B]">- {t.nama}</p>
          </div>
        ))}
      </div>

      {/* Judul Foto */}
      <h1 className="text-2xl text-center font-bold mb-4">
        Beberapa Contoh Pemasangan Produk
      </h1>

      {/* FOTO CAROUSEL */}
      <div className="relative w-full">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto scroll-smooth no-scrollbar gap-4"
        >
          {extendedFoto.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 min-w-[200px] sm:min-w-[250px] lg:min-w-[280px] aspect-square relative"
            >
              <Image
                src={src}
                alt={`foto testi ${i}`}
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Tombol navigasi */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
