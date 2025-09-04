"use client";

import Image from "next/image";

export default function ProdukBelowTesti() {
  const produk = [
    {
      foto: "/assets/runningtext1.jpeg",
      nama: "Running Text Full Colour",
      harga: 1500000,
      tag: "Produk Terbaik",
      terjual: 17,
      deskripsi:
        "Running text dengan full colour yang sangat cocok dipasang ketika event atau sekedar untuk memperkaya fasilitas.",
    },
    {
      foto: "/assets/jwstv.jpg",
      nama: "Jam Shalat Waktu TV",
      harga: 1950000,
      tag: "Produk Paling Unik",
      terjual: 17,
      deskripsi: "Jam Waktu Shalat yang bisa di tampilkan di TV.",
    },
    {
      foto: "/assets/runningtext2.jpeg",
      nama: "Running Text",
      harga: 900000,
      tag: "Produk Terbaik",
      terjual: 10,
      deskripsi:
        "Running text dengan versi yang lebih simple dan tersedia dalam 1 warna saja.",
    },
    {
      foto: "/assets/papanskor.jpeg",
      nama: "Papan Skor",
      harga: 1350000,
      tag: "Produk Terbaik",
      terjual: 7,
      deskripsi: "Papan skor berukuran 20x70cm, Menampilkan skor kedua tim.",
    },
    {
      foto: "/assets/mesinautotartil.jpg",
      nama: "Mesin Auto Tartil",
      harga: 850000,
      tag: "Produk Bagus",
      terjual: 2,
      deskripsi:
        "Player TARTIL/TARHIM otomatis menjelang waktu sholat, bisa terintegrasi dengan system audio masjid.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-32 py-12 bg-zinc-100">
      <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#B2212B] mb-8">
        Kami Juga Menjual Berbagai Produk Lain!!
      </h2>

      {/* Scrollable Produk */}
      <div className="flex gap-6 justify-start sm:justify-center overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
        {produk.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 min-w-[220px] sm:min-w-[260px] max-w-[260px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Foto */}
            <div className="relative w-full aspect-square">
              <Image
                src={p.foto}
                alt={p.nama}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>

            {/* Nama Produk */}
            <div className="p-4 text-center">
              <h3 className="text-base sm:text-lg font-semibold text-gray-700 line-clamp-2">
                {p.nama}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
