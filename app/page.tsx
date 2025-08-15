import Image from "next/image";
import logo from "../public/assets/logo panjang.png";
import Link from "next/link";
import whatsapp from "../public/assets/whatsapp.png";
import Footer from "../components/footer";
import Testimoni from "../components/testimoni";
import Cta from "../components/cta";
import FAQSection from "../components/faq";
import Hero from "../components/hero";

export default function Page() {
  const produk = [
    {
      foto: "/assets/jwstv.jpg",
      nama: "Jam Shalat Waktu TV",
      harga: 1950000,
      deskripsi:
        "Jam Waktu Shalat yang bisa di tampilkan di TV. Merupakan alat android portable yang bisa dibawa kemana mana dan fleksibel ditaruh dimana saja.",
    },
    {
      foto: "/assets/mesinautotartil.jpg",
      nama: "Mesin Auto Tartil",
      harga: 850000,
      deskripsi:
        "Player TARTIL/TARHIM otomatis menjelang waktu sholat, terintegrasi dengan system audio masjid sehingga amplifier bisa auto on/off sesuai program atau waktu yang ditentukan.",
    },
    {
      foto: "/assets/papanskor.jpeg",
      nama: "Papan Skor",
      harga: 1350000,
      deskripsi:
        "Papan skor berukuran 20x70cm. Menampilkan skor kedua tim cocok untuk dipasang pada pertandingan speak bola, voli, dan lainnya. Selain itu juga menampilkan timer untuk waktu permainan, dan juga nama tim di tiap sisi.",
    },
    {
      foto: "/assets/jws1.jpeg",
      nama: "Jam Dinding Digital Islami",
      harga: 450000,
      deskripsi:
        "Jam dinding yang memiliki desain unik dan ukuran yang relatif kecil. Tersedia dalam 2 jenis, dengan mesan auto tartil dan tidak dengan mesin auto tartil.",
    },
    {
      foto: "/assets/jws2.jpeg",
      nama: "Jam Dinding Digital Islami Full Colour",
      harga: 600000,
      deskripsi:
        "Jam dinding dengan desain simple minimalis dan full colour. Berukuran 20x40cm, cocok untuk dipasang di ruang keluarga. Tersedia dalam 2 jenis, dengan mesan auto tartil dan tidak dengan mesin auto tartil.",
    },
    {
      foto: "/assets/runningtext2.jpeg",
      nama: "Running Text",
      harga: 900000,
      deskripsi:
        "Running text dengan versi yang lebih simple dan tersedia dalam 1 warna saja. Cocok dipasang pada restaurant, masjid, toko, warung pinggir jalan. Bisa berfungsi untuk menampilkan promo, produk, dan lainnya.",
    },
    {
      foto: "/assets/runningtext1.jpeg",
      nama: "Running Text Full Colour",
      harga: 1500000,
      deskripsi:
        "Running text dengan full colour yang sangat cocok dipasang ketika event atau sekedar untuk memperkaya fasilitas.",
    },
  ];

  return (
    <>
      {/* landing page */}
      <section className="w-full min-h-dvh h-fit px-4 sm:px-8 lg:px-32 pt-6 pb-14 font-sans landingpage-bg">
        {/* HEADER */}
        <header className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={200}
            className="w-40 sm:w-52 h-auto"
          />
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide px-2 border-b-2 text-center sm:text-left">
            Your Digital Solution.
          </h1>
        </header>

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
              className="bg-white rounded-xl shadow-xl hover:border border-[#B2212B] w-[90%] sm:w-[450px]"
            >
              <Image
                src={produk.foto}
                alt="foto"
                width={500}
                height={500}
                className="rounded-t-xl object-cover w-full aspect-square shadow-xl"
              />
              <div className="p-4 flex flex-col gap-2">
                <h1 className="font-bold text-lg sm:text-xl break-words">
                  {produk.nama}
                </h1>
                <div className="flex flex-col mb-2">
                  <p className="text-red-500 text-sm sm:text-lg line-through">
                    Rp. {(produk.harga * 1.5).toLocaleString()}
                  </p>
                  <p className="text-zinc-800 font-semibold text-lg sm:text-xl">
                    Rp. {produk.harga.toLocaleString()}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-justify">
                  {produk.deskripsi}
                </p>
              </div>

              <a
                href="https://wa.me/6285336664466"
                className="flex justify-end"
              >
                <button className="bg-[#B2212B] cursor-pointer text-white rounded-lg mx-4 mb-4 px-4 py-2 hover:bg-red-900 ease-in-out duration-300">
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
