import Image from "next/image";
import Link from "next/link";
import whatsapp from "../public/assets/whatsapp.png";
import Footer from "../components/footer";
import Testimoni from "../components/testimoni";
import Cta from "../components/cta";
import FAQSection from "../components/faq";
import Hero from "../components/hero";
import Header from "@/components/header";

export default function Page() {
  const produk = [
    {
      foto: "/assets/jws1.jpeg",
      nama: "Jam Dinding Digital Islami",
      harga: 450000,
      tag: "Produk Terjangkau",
      terjual: 150,
      deskripsi:
        "Jam dinding yang memiliki desain unik dan ukuran yang relatif kecil.",
    },
    {
      foto: "/assets/jws2.jpeg",
      nama: "Jam Dinding Digital Islami Full Colour",
      harga: 600000,
      tag: "Produk Terbaik",
      terjual: 125,
      deskripsi:
        "Jam dinding dengan desain simple minimalis dan full colour, berukuran 20x40cm",
    },
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
    <>
      {/* landing page */}
      <section className="w-full min-h-dvh h-fit px-4 sm:px-8 lg:px-32 pt-6 pb-14 font-sans landingpage-bg">
        {/* Header */}
        <Header />

        {/* DESKRIPSI + SIDEBAR */}
        <Hero />

        {/* TITLE */}
        <h1 className="text-2xl sm:text-4xl font-bold text-center">
          Beberapa Produk Kami
        </h1>
        <p className="text-center mb-10">
          informasi selengkapnya hubungi whatsapp
        </p>

        {/* PRODUK */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {produk.map((produk, i) => (
            <div
              key={`index-${i}`}
              className="bg-white rounded-xl shadow-lg hover:border border-[#B2212B] w-[85%] sm:w-[350px]" // lebih kecil
            >
              <div className="relative">
                <Image
                  src={produk.foto}
                  alt="foto"
                  width={400}
                  height={400}
                  className="rounded-t-xl object-cover w-full aspect-square shadow-md"
                />
                {/* Tag Badge */}
                <span
                  className="absolute top-4 left-4 bg-[#B2212B] text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-lg shadow-md"
                  style={{
                    textShadow:
                      "0 0 5px #fff, 0 0 10px #ff4d6d, 0 0 20px #ff1e56, 0 0 20px #ff1e56",
                    boxShadow:
                      "0 0 10px #ff4d6d, 0 0 20px #ff1e56, 0 0 20px #ff1e56",
                  }}
                >
                  {produk.tag}
                </span>
              </div>
              <div className="p-3 flex flex-col gap-2">
                <h1 className="font-bold text-base sm:text-lg break-words">
                  {produk.nama}
                </h1>

                {/* Harga */}
                <div className="flex flex-col mb-1">
                  <p className="text-red-500 text-xs sm:text-sm line-through">
                    Rp. {(produk.harga * 1.5).toLocaleString()}
                  </p>
                  <p className="text-zinc-800 font-semibold text-base sm:text-lg">
                    Rp. {produk.harga.toLocaleString()}
                  </p>
                </div>

                {/* Deskripsi */}
                <p className="text-xs sm:text-sm text-justify line-clamp-3">
                  {produk.deskripsi}
                </p>

                {/* Terjual */}
                <p className="text-lg font-bold text-gray-500 mt-1">
                  Terjual:{" "}
                  <span className="font-medium">{produk.terjual}+</span>
                </p>
              </div>

              {/* Tombol Pesan */}
              <a
                href="https://wa.me/6285336664466"
                className="flex justify-end"
              >
                <button className="bg-[#B2212B] cursor-pointer text-white rounded-lg mx-3 mb-3 px-3 py-1.5 hover:bg-red-900 ease-in-out duration-300 text-sm sm:text-base">
                  Pesan
                </button>
              </a>
            </div>
          ))}
        </div>

        {/* WHATSAPP BUTTON */}
        <Link
          href="https://wa.me/6285336664466"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="fixed flex items-center justify-center gap-3 sm:gap-4 right-4 sm:right-10 bottom-4 sm:bottom-10 bg-[#25D366] text-lg sm:text-2xl px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-xl z-10">
            <Image
              src={whatsapp}
              alt="wa"
              width={32}
              height={32}
              className="sm:w-12 sm:h-12"
            />
            <h1 className="font-bold text-white drop-shadow-xl">WhatsApp</h1>
          </div>
        </Link>
      </section>

      {/* testimoni */}
      <Testimoni />

      {/* cta */}
      <Cta />

      {/* faq */}
      <FAQSection />

      {/* footer */}
      <Footer />
    </>
  );
}
