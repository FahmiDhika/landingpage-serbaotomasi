"use client";

import { useRef, useLayoutEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TombolWA from "./tombolWa";

type ProdukItem = {
  foto: string;
  nama: string;
  hargaBiasa: number;
  hargaAuto?: number;
};

export default function ProdukCarousel({ produk }: { produk: ProdukItem[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  // Ref to prevent the jump logic from running while a programmatic scroll is happening
  const isTransitioning = useRef(false);

  // STEP 1: Create a longer array for the infinite loop illusion.
  // We place a copy of the products before and after the original set.
  // Example: [c, d, a, b, c, d, a, b]
  const extendedProduk = useMemo(() => {
    if (produk.length === 0) return [];
    // To make it robust, especially with fewer items, we duplicate the list.
    return [...produk, ...produk, ...produk];
  }, [produk]);

  // useLayoutEffect runs synchronously after the DOM is updated, preventing any visual flicker.
  useLayoutEffect(() => {
    const el = carouselRef.current;
    if (!el || produk.length === 0) return;

    // STEP 2: Set the initial scroll position to the start of the *middle* set of items.
    // This is the "real" list, and the user starts here.
    const initialScrollLeft = el.scrollWidth / 3;
    el.scrollTo({ left: initialScrollLeft, behavior: "instant" });
  }, [produk]);

  const scroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el || isTransitioning.current) return;

    const delta = direction === "left" ? -el.clientWidth : el.clientWidth;
    el.scrollTo({
      left: el.scrollLeft + delta,
      behavior: "smooth",
    });
  };

  // STEP 3: Handle the "jump" when the user scrolls to the cloned sections.
  const handleScroll = () => {
    const el = carouselRef.current;
    if (!el || produk.length === 0) return;

    // We use a small buffer to prevent precision errors
    const buffer = 1;
    const oneSetWidth = el.scrollWidth / 3;

    // If scrolled to the end (the right-side clone)
    if (el.scrollLeft >= oneSetWidth * 2 - buffer) {
      // Jump back to the start of the middle set without animation
      el.scrollTo({ left: el.scrollLeft - oneSetWidth, behavior: "instant" });
    }

    // If scrolled to the beginning (the left-side clone)
    if (el.scrollLeft <= buffer) {
      // Jump forward to the end of the middle set without animation
      el.scrollTo({ left: el.scrollLeft + oneSetWidth, behavior: "instant" });
    }
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
        // STEP 4: Add the onScroll event listener to trigger the jump logic.
        onScroll={handleScroll}
        className="flex overflow-x-auto scroll-smooth no-scrollbar gap-6 px-2"
      >
        {/* STEP 5: Map over the new, extended array */}
        {extendedProduk.map((item, index) => (
          // Use a more unique key since item names could repeat
          <div
            key={`${item.nama}-${index}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
          >
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

              <div className="flex justify-end mx-3 mb-3">
                <TombolWA phone="6285336664466" label="Pesan" />
              </div>
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
