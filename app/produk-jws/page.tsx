import Image from "next/image";
import Link from "next/link";

import fotoUtama from "@/public/assets/jws2.jpeg";
import whatsapp from "@/public/assets/whatsapp.png";
import jws from "@/public/assets/jws1.jpeg";

import Footer from "@/components/footer";
import FAQSection from "@/components/faq";
import Testimoni from "@/components/testimoni";
import Header from "@/components/header";

export default function Page() {
  const produk = [
    {
      nama: "Jam Waktu Shalat - JS32A",
      hargaBiasa: 350000,
      hargaAuto: 600000,
      foto: "/assets/jws/js32a.jpeg",
    },
    {
      nama: "Jam Waktu Shalat - JS32 PLUS",
      hargaBiasa: 450000,
      hargaAuto: 700000,
      foto: "/assets/jws/js32 plus.jpeg",
    },
    {
      nama: "Jam Waktu Shalat - JS475A",
      hargaBiasa: 450000,
      hargaAuto: 750000,
      foto: "/assets/jws/js475a.jpeg",
    },
    {
      nama: "Jam Waktu Shalat - JS475 PLUS",
      hargaBiasa: 550000,
      hargaAuto: 750000,
      foto: "/assets/jws/js475 plus.jpeg",
    },
    {
      nama: "Jam Waktu Shalat - JR40",
      hargaBiasa: 600000,
      hargaAuto: 775000,
      foto: "/assets/jws/jr40.jpeg",
    },
    {
      nama: "Jam Waktu Shalat - JS70A",
      hargaBiasa: 700000,
      hargaAuto: 900000,
      foto: "/assets/jws/js70a.jpeg",
    },
    {
      nama: "Jam Waktu Shalat - JS100",
      hargaBiasa: 900000,
      hargaAuto: 1200000,
      foto: "/assets/jws/js100.jpeg",
    },
    {
      nama: "Mesin Auto Tartil",
      hargaBiasa: 750000,
      foto: "/assets/jws/mesin auto tartil.jpeg",
    },
  ];

  return (
    <>
      <section className="w-full min-h-dvh h-fit px-4 sm:px-8 lg:px-32 pt-6 pb-14 font-sans landingpage-bg">
        {/* Header */}
        <Header />

        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl flex flex-col items-center text-center gap-12">
            {/* Hero Section */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
                HADIRKAN KETENANGAN DI RUMAH ANDA
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6">
                dengan adanya lantunan{" "}
                <span className="font-semibold text-green-800 underline">
                  Al Qur`an
                </span>{" "}
                di rumah.
              </p>
              <Image
                src={fotoUtama}
                alt="jws"
                width={500}
                height={500}
                className="w-full max-w-xs sm:max-w-md md:max-w-lg aspect-square rounded-xl shadow-xl object-cover mx-auto"
              />
            </div>

            {/* Masalah Section */}
            <div className="w-full text-center border-b-4 pb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
                Apakah ini masalah yang sering dijumpai di rumah anda?
              </h2>
              <ul className="w-fit text-start mx-auto space-y-3 text-base sm:text-lg">
                <li>❌ Sering terlambat shalat.</li>
                <li>❌ Rumah terasa sepi.</li>
                <li>❌ Anak tidak ingin menghafal Al Qur`an.</li>
              </ul>
              <p className="mt-6 text-base sm:text-lg font-medium">
                Jangan biarkan semua masalah ini terus berlanjut hingga anda tua
                nanti!!
              </p>
              <Link href="https://wa.me/6285336664466">
                <button className="mt-6 bg-[#B2212B] hover:bg-red-700 transition text-white text-xl sm:text-2xl font-bold px-6 py-3 rounded-xl shadow-xl">
                  Klik Disini Untuk Info Pemesanan!
                </button>
              </Link>
            </div>

            {/* Manfaat Section */}
            <div className="w-full text-center border-b-4 pb-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Buat Rumahmu Menjadi Sejuk Dengan Lantunan Ayat Al Qur`an
              </h2>
              <Image
                src={jws}
                alt="jws"
                className="aspect-square rounded-xl shadow-xl mb-6 mx-auto w-full max-w-md"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Apa sih manfaatnya?
              </h3>
              <ul className="w-fit text-start mx-auto space-y-3 text-base sm:text-lg">
                <li>✅ Rumah terasa lebih sejuk karna lantunan Al Qur`an</li>
                <li>✅ Shalat bisa tepat waktu</li>
                <li>✅ Mengusir setan jahat dengan ayat suci Al Qur`an</li>
                <li>✅ Anak mudah menghafal ayat Al Qur`an</li>
              </ul>
            </div>

            {/* Produk Section */}
            <div className="w-full text-center border-b-4 pb-10">
              <h2 className="font-bold text-2xl sm:text-3xl mb-8">
                Jenis Produk JAM WAKTU SHALAT
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="w-full h-full bg-yellow-200 py-6 px-4 rounded-xl shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Non Tartil
                  </h3>
                  <p className="text-sm sm:text-base">
                    Jam yang menunjukkan waktu shalat{" "}
                    <span className="font-bold">biasa</span>.
                  </p>
                </div>
                <div className="w-full h-full bg-blue-200 py-6 px-4 rounded-xl shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    Auto Tartil
                  </h3>
                  <p className="text-sm sm:text-base">
                    Jam waktu shalat yang dilengkapi dengan{" "}
                    <span className="font-bold">mesin auto tartil</span>.
                  </p>
                </div>
              </div>

              {/* Daftar Produk */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {produk.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-lg hover:shadow-red-600 transition"
                  >
                    <Image
                      src={item.foto}
                      alt={item.nama}
                      width={300}
                      height={300}
                      className="rounded-lg shadow-sm mb-4 w-full h-64 object-cover"
                    />

                    {/* Nama Produk */}
                    <h3 className="text-lg font-bold mb-3 text-center">
                      {item.nama}
                    </h3>

                    {/* Harga Coret */}
                    <div className="mb-2 text-center">
                      <p className="text-sm text-red-500 line-through">
                        Rp {(item.hargaBiasa * 1.5).toLocaleString("id-ID")}
                      </p>
                      {item.hargaAuto && (
                        <p className="text-sm text-red-500 line-through">
                          Rp {(item.hargaAuto * 1.5).toLocaleString("id-ID")}
                        </p>
                      )}
                    </div>

                    {/* Harga Normal */}
                    <div className="text-center">
                      <p className="text-sm text-gray-700">
                        Harga:{" "}
                        <span className="font-bold text-green-700 text-lg">
                          Rp {item.hargaBiasa.toLocaleString("id-ID")}
                        </span>
                      </p>
                      {item.hargaAuto && (
                        <p className="text-sm text-gray-700">
                          Harga Auto Tartil:{" "}
                          <span className="font-bold text-green-700 text-lg">
                            Rp {item.hargaAuto.toLocaleString("id-ID")}
                          </span>
                        </p>
                      )}
                    </div>

                    {/* Tombol Pesan */}
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
                ))}
              </div>
            </div>

            {/* Hadiah Section */}
            <div className="w-full text-center border-b-4 pb-10">
              {/* Title */}
              <h2 className="font-extrabold text-2xl sm:text-3xl text-red-600 drop-shadow-xl mb-10">
                🎁 PRODUK COCOK UNTUK DIJADIKAN HADIAH 🎁
              </h2>

              {/* Product Image */}
              <div className="w-full flex justify-center mb-10">
                <Image
                  src={fotoUtama}
                  alt="produk"
                  width={500}
                  height={350}
                  className="rounded-xl shadow-2xl shadow-red-200 hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left max-w-5xl mx-auto">
                {/* Left Text */}
                <div className="space-y-4">
                  <p className="text-lg sm:text-xl font-medium leading-relaxed">
                    Produk paling cocok untuk dijadikan hadiah keluarga, teman,
                    maupun kerabat tercinta. Dengan desain elegan dan fitur
                    unggulan, hadiah ini pasti berkesan ❤️
                  </p>

                  {/* List Features */}
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl">✅</span>
                      <span>Desain minimalis dan kekinian</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl">✅</span>
                      <span>
                        Terdapat fitur auto tartil untuk menenangkan suasana
                        rumah
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl">✅</span>
                      <span>Berkualitas tinggi & awet digunakan</span>
                    </li>
                  </ul>
                </div>

                {/* Right Side Extra Image / Highlight */}
                <div className="flex justify-center">
                  <Image
                    src="/assets/givebox3.svg"
                    alt="gift"
                    width={300}
                    height={250}
                    className="rounded-lg hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Promo Section */}
            <div className="w-full text-center py-10 sm:py-14 px-4 bg-gradient-to-r from-red-100 via-white to-red-100 rounded-xl shadow-lg">
              {/* Title */}
              <h2 className="font-extrabold text-2xl sm:text-4xl md:text-5xl text-red-600 drop-shadow-2xl animate-bounce mb-6 leading-snug">
                STOK TERBATAS!!
                <br className="sm:hidden" /> PROMO KHUSUS HARI INI
              </h2>

              {/* Promo Image */}
              <Image
                src="/assets/promo.png"
                alt="promo"
                width={400}
                height={300}
                className="mx-auto w-64 sm:w-[400px] md:w-[700px] rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />

              {/* Icons */}
              <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-10 h-10 sm:w-14 sm:h-14 text-red-600 hover:text-red-800 transition-all duration-300 hover:scale-125"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-10 h-10 sm:w-14 sm:h-14 text-green-600 hover:text-green-800 transition-all duration-300 hover:scale-125"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-10 h-10 sm:w-14 sm:h-14 text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-125"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25"
                  />
                </svg>
              </div>

              {/* CTA Button */}
              <div className="mt-8 sm:mt-10">
                <Link href="https://wa.me/6285336664466">
                  <button className="bg-gradient-to-r from-red-500 to-red-700 text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                    🎁 Pesan Sekarang & Nikmati Promonya!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Floating WA Button */}
        <Link
          href="https://wa.me/6285336664466"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="fixed flex items-center justify-center gap-3 right-4 sm:right-10 bottom-4 sm:bottom-10 bg-[#25D366] text-base sm:text-lg md:text-xl px-4 sm:px-6 py-3 rounded-full shadow-xl z-10">
            <Image
              src={whatsapp}
              alt="wa"
              width={28}
              height={28}
              className="sm:w-10 sm:h-10"
            />
            <span className="font-bold text-white drop-shadow-xl">
              WhatsApp
            </span>
          </div>
        </Link>
      </section>

      {/* testimoni */}
      <Testimoni />

      {/* faq */}
      <FAQSection />

      {/* footer */}
      <Footer />
    </>
  );
}
