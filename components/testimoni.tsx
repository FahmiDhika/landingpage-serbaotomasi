import Image from "next/image";

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

  const fotoTestimoni = [
    "/assets/testimoni/fototestimoni1.webp",
    "/assets/testimoni/fototestimoni2.webp",
    "/assets/testimoni/fototestimoni3.png",
    "/assets/testimoni/fototestimoni4.webp",
    "/assets/testimoni/fototestimoni5.jpg",
    "/assets/testimoni/fototestimoni6.webp",
    "/assets/testimoni/fototestimoni7.webp",
  ];

  return (
    <section className="w-full h-fit px-4 sm:px-8 lg:px-32 pt-9 pb-14 bg-zinc-100 font-sans">
      <h1 className="text-center text-2xl sm:text-4xl font-bold mb-14">
        Kata Mereka
      </h1>

      {/* List Testimoni */}
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

      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
        {fotoTestimoni.map((src, index) => (
          <div
            key={index}
            className="min-w-[180px] sm:min-w-[220px] lg:min-w-[250px] aspect-square relative flex-shrink-0"
          >
            <Image
              src={src}
              alt={`foto testi ${index + 1}`}
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
