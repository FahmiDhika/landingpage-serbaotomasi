import Image from "next/image";
import Link from "next/link";

import fotoUtama from "@/public/assets/jws/jst32 plus.jpeg";
import fotoKedua from "@/public/assets/jws/jrt40.webp";
import whatsapp from "@/public/assets/whatsapp.png";
import jws from "@/public/assets/jws1.jpeg";
import permasalahan from "@/public/assets/Permasalahan.png";

import Footer from "@/components/footer";
import FAQSection from "@/components/faq";
import TestimoniJWS from "@/components/testimoniJws";
import Header from "@/components/header";
import ProdukCarousel from "@/components/produkJws";
import TombolWA from "@/components/tombolWa";

export default function Page() {
  const produk = [
    {
      nama: "Jam Dinding Digital Islami - JST32 PLUS",
      hargaBiasa: 600000,
      hargaAuto: 750000,
      foto: "/assets/jws/jst32 plus.jpeg",
    },
    {
      nama: "Jam Dinding Digital Islami - JRT40",
      hargaBiasa: 750000,
      hargaAuto: 900000,
      foto: "/assets/jws/jrt40.webp",
    },
    {
      nama: "Jam Dinding Digital Islami - JS32A",
      hargaBiasa: 350000,
      hargaAuto: 600000,
      foto: "/assets/jws/js32a.jpeg",
    },
    {
      nama: "Jam Dinding Digital Islami - JS32 PLUS",
      hargaBiasa: 450000,
      hargaAuto: 700000,
      foto: "/assets/jws/js32 plus.jpeg",
    },
    {
      nama: "Jam Dinding Digital Islami - JS475A",
      hargaBiasa: 450000,
      hargaAuto: 750000,
      foto: "/assets/jws/js475a.jpeg",
    },
    {
      nama: "Jam Dinding Digital Islami - JS475 PLUS",
      hargaBiasa: 550000,
      hargaAuto: 750000,
      foto: "/assets/jws/js475 plus.jpeg",
    },
    {
      nama: "Jam Dinding Digital Islami - JR40",
      hargaBiasa: 600000,
      hargaAuto: 775000,
      foto: "/assets/jws/jr40.jpeg",
    },
    {
      nama: "Jam Dinding Digital Islami - JS70A",
      hargaBiasa: 700000,
      hargaAuto: 900000,
      foto: "/assets/jws/js70a.jpeg",
    },
    {
      nama: "Jam Digital Masjid - JR70 SQ",
      hargaBiasa: 1000000,
      hargaAuto: 1200000,
      foto: "/assets/jws/jr70.webp",
    },
    {
      nama: "Jam Digital Masjid - JS100",
      hargaBiasa: 900000,
      hargaAuto: 1200000,
      foto: "/assets/jws/js100.jpeg",
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
            {/* Hero Section */}
            <div className="space-y-6">
              <h1 className="capitalize text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-gray-900 drop-shadow-md">
                Inilah akibat dari seseorang yang lalai terhadap anak dan
                keluarga nya!
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700">
                sering dianggap{" "}
                <span className="underline font-semibold">remeh</span>, tapi
                dampaknya{" "}
                <span className="text-red-500 font-semibold text-3xl">
                  LUAR BIASA!!
                </span>
              </p>
            </div>

            {/* Masalah Section */}
            <div className="w-full text-center border-t border-b py-12">
              {/* ⬇️ Tambahin gambar permasalahan disini */}
              <Image
                src={permasalahan}
                alt="Permasalahan"
                className="mx-auto mb-8 w-full max-w-4xl rounded-xl shadow-lg"
              />

              <h2 className="text-2xl glow-animate sm:text-3xl font-bold mb-8 text-red-700 drop-shadow-md">
                PERNAHKAH ANDA MENGALAMI HAL INI? 🤔
              </h2>
              {/* Kotak Background Putih */}
              <div className="bg-gray-200 shadow-xl rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
                <ul className="space-y-4 text-base sm:text-lg font-medium text-gray-800">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">❌</span>
                    <span>
                      Berapa kali anda harus <b>mengingatkan anak sholat</b>{" "}
                      dalam sehari?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">❌</span>
                    <span>
                      Sulitkah mengingatkan <b>anak-anak dan keluarga</b> agar
                      sholat tepat waktu?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 text-xl">❌</span>
                    <span>
                      Anak boleh pintar, tapi kalau{" "}
                      <b>tidak sholat… apa artinya?</b> 😔
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-10 bg-red-500 text-white px-6 py-6 rounded-2xl shadow-2xl max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl font-extrabold leading-relaxed text-center tracking-wide ">
                  ⚠️ Ingatlah,{" "}
                  <span className="underline decoration-yellow-300">
                    orang tua{" "}
                  </span>
                  yang tidak mengingatkan keluarganya sholat <br />
                  bisa ikut{" "}
                  <span className="text-yellow-300">menanggung dosanya</span>.
                </p>
              </div>

              <h3 className="mt-10 text-xl sm:text-2xl font-bold text-green-700">
                Solusi:{" "}
                <span className="underline decoration-green-500">
                  Jam Sholat Rumahan
                </span>{" "}
                ⏰
              </h3>
              <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-gray-700 mb-10">
                Dengan fitur{" "}
                <span className="font-bold text-green-800">Auto Tartil</span>,
                bukan hanya mengingatkan waktu sholat, tapi juga menghadirkan
                lantunan Al Qur’an yang menyejukkan hati 🌿
              </p>

              <Image
                src={fotoUtama}
                alt="jws"
                width={500}
                height={500}
                className="w-full max-w-xs sm:max-w-md md:max-w-lg aspect-square rounded-2xl shadow-2xl object-cover mx-auto hover:scale-105 transition-transform duration-500"
              />

              {/* Tombol Pesan */}
              <div className="flex justify-center mt-10">
                <TombolWA
                  phone="6285336664466"
                  label="Pesan Sekarang"
                  floating={false}
                />
              </div>
            </div>

            {/* Manfaat Section */}
            <div className="w-full text-center border-b pb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
                Jam Ini Bukan Sekedar Jam Digital Biasa
              </h2>
              <Image
                src={jws}
                alt="jws"
                className="aspect-square rounded-2xl shadow-lg mb-6 mx-auto w-full max-w-md"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
                Manfaat yang akan dirasakan:
              </h3>
              <ul className="w-fit text-start mx-auto space-y-3 text-base sm:text-lg text-gray-700">
                <li>✅ Rumah lebih sejuk & penuh keberkahan</li>
                <li>✅ Shalat tepat waktu</li>
                <li>✅ Mengusir gangguan setan dengan ayat suci</li>
                <li>✅ Anak terbiasa & mudah hafal ayat Al Qur`an</li>
              </ul>
            </div>

            {/* Auto Tartil Section */}
            <div className="w-full text-center border-b pb-12 bg-gradient-to-r from-green-50 via-white to-green-100 rounded-3xl shadow-inner p-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-green-800 drop-shadow-md">
                ✨ Kenapa Pilih Fitur{" "}
                <span className="text-red-600">Auto Tartil</span>?
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Fitur{" "}
                <span className="font-bold text-green-700">Auto Tartil</span>{" "}
                bukan sekadar alarm sholat biasa. Saat waktu sholat tiba,
                lantunan ayat suci Al Qur’an akan diperdengarkan secara
                otomatis. Inilah manfaat luar biasa yang akan dirasakan keluarga
                Anda:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500">
                  <h3 className="text-lg font-bold text-green-700 mb-2">
                    🌿 Hati Lebih Tenang
                  </h3>
                  <p className="text-gray-700">
                    Lantunan Al Qur’an menenangkan suasana rumah dan membuat
                    hati lebih damai.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500">
                  <h3 className="text-lg font-bold text-green-700 mb-2">
                    👨‍👩‍👧 Anak Lebih Mudah Diingatkan
                  </h3>
                  <p className="text-gray-700">
                    Tanpa marah-marah, anak akan terbiasa sholat karena selalu
                    mendengar tartil Al Qur’an.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500">
                  <h3 className="text-lg font-bold text-green-700 mb-2">
                    📖 Membantu Hafalan
                  </h3>
                  <p className="text-gray-700">
                    Dengan sering mendengar ayat suci, anak-anak lebih mudah
                    menghafal Al Qur’an.
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500">
                  <h3 className="text-lg font-bold text-green-700 mb-2">
                    🕌 Rumah Penuh Berkah
                  </h3>
                  <p className="text-gray-700">
                    Rumah selalu dipenuhi dengan bacaan ayat suci, mengundang
                    keberkahan & menjauhkan gangguan jin/setan.
                  </p>
                </div>
              </div>

              <p className="mt-10 text-lg sm:text-xl font-semibold text-green-800 max-w-2xl mx-auto">
                Dengan{" "}
                <span className="text-red-600 font-bold">Auto Tartil</span>,
                rumah Anda bukan hanya diingatkan sholat, tapi juga selalu
                dipenuhi{" "}
                <span className="underline decoration-green-500">
                  lantunan Al Qur’an
                </span>{" "}
                ✨
              </p>
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
              <ProdukCarousel produk={produk} />
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
                  src={fotoKedua}
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

            {/* Poster Cinderamata Section */}
            <div className="w-full text-center border-b-4 pb-10">
              <h2 className="font-extrabold text-2xl sm:text-3xl text-gray-900 mb-6">
                MENYEDIAKAN CENDERAMATA EKSKLUSIF
              </h2>

              <Image
                src="/assets/cinderamata.png"
                alt="Poster Cinderamata"
                width={800}
                height={100}
                className="mx-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />

              <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
                Cinderamata premium yang dapat menjadi pilihan tepat untuk
                perusahaan, acara khusus, maupun hadiah pribadi.
              </p>

              {/* Highlight Points */}
              <div className="mt-6 flex flex-col items-center gap-3">
                <p className="bg-red-100 text-red-700 font-semibold px-4 py-2 rounded-full shadow-md w-fit text-xl">
                  🎁 Cocok untuk hadiah perusahaan & relasi bisnis
                </p>
                <p className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-full shadow-md w-fit text-xl">
                  ✨ Pilihan terbaik untuk acara pernikahan & momen spesial
                </p>
                <p className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full shadow-md w-fit text-xl">
                  🌍 Dapat dijadikan koleksi pribadi maupun kenang-kenangan
                  eksklusif
                </p>
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
                src="/assets/promo 2.png"
                alt="promo"
                width={400}
                height={300}
                className="mx-auto w-64 sm:w-[400px] md:w-[700px] rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />

              {/* Promo Highlight Points */}
              <div className="mt-8 grid gap-4 sm:grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 bg-green-100 text-green-800 font-semibold p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl">📦</span>
                  <p>Kirim dulu, barang sampai, baru bayar di tempat</p>
                </div>

                <div className="flex items-center gap-3 bg-yellow-100 text-yellow-800 font-semibold p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl">🛡️</span>
                  <p>Packing aman, garansi 100%</p>
                </div>

                <div className="flex items-center gap-3 bg-blue-100 text-blue-800 font-semibold p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl">🚚</span>
                  <p>Menerima pengiriman dari seluruh Indonesia</p>
                </div>
              </div>

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
              <div className="mt-8 sm:mt-10 w-full flex justify-center">
                <TombolWA
                  phone="6285336664466"
                  label="Pesan Sekarang & Nikmati Promonya!"
                />
              </div>
            </div>
          </div>
        </div>

        <TombolWA phone="6285336664466" label="WhatsApp" floating />
      </section>

      {/* testimoni */}
      <TestimoniJWS />

      {/* faq */}
      <FAQSection />

      {/* footer */}
      <Footer />
    </>
  );
}
