"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProdukItem = {
  foto: string;
  nama: string;
  hargaBiasa: number;
  hargaAuto?: number;
};

export default function ProdukCarousel({ produk }: { produk: ProdukItem[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const delta = direction === "left" ? -el.clientWidth : el.clientWidth;
    el.scrollTo({
      left: el.scrollLeft + delta,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Panah kiri */}
      <button
        onClick={() => scroll("left")}
        aria-label="Geser kiri"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Track */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar gap-6 px-2"
      >
        {produk.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg hover:shadow-red-600 transition h-full">
              <Image
                src={item.foto}
                alt={item.nama}
                width={300}
                height={300}
                className="rounded-lg shadow-sm mb-4 w-full h-64 object-cover"
              />

              <h3 className="text-lg font-bold mb-3 text-center">
                {item.nama}
              </h3>

              {/* Harga coret */}
              <div className="mb-2 text-center">
                <p className="text-sm text-red-500 line-through">
                  Rp {(item.hargaBiasa * 1.5).toLocaleString("id-ID")}
                </p>
                {item.hargaAuto !== undefined && (
                  <p className="text-sm text-red-500 line-through">
                    Rp {(item.hargaAuto * 1.5).toLocaleString("id-ID")}
                  </p>
                )}
              </div>

              {/* Harga normal */}
              <div className="text-center">
                <p className="text-sm text-gray-700">
                  Harga:{" "}
                  <span className="font-bold text-green-700 text-lg">
                    Rp {item.hargaBiasa.toLocaleString("id-ID")}
                  </span>
                </p>
                {item.hargaAuto !== undefined && (
                  <p className="text-sm text-gray-700">
                    Harga Auto Tartil:{" "}
                    <span className="font-bold text-green-700 text-lg">
                      Rp {item.hargaAuto.toLocaleString("id-ID")}
                    </span>
                  </p>
                )}
              </div>

              <Link
                href={`https://wa.me/6285336664466?text=Halo, saya mau pesan ${item.nama}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 bg-[#B2212B] hover:bg-red-700 transition text-white text-sm font-bold px-6 py-2 rounded-lg shadow cursor-pointer">
                  Pesan Sekarang
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Panah kanan */}
      <button
        onClick={() => scroll("right")}
        aria-label="Geser kanan"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
}
