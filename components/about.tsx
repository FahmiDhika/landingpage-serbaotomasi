export default function AboutUs() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between items-start mb-14 gap-6">
      {/* DESKRIPSI */}
      <div className="lg:w-4/5 py-4 px-4 flex flex-col gap-3 bg-white rounded-xl shadow-xl text-sm sm:text-base">
        <p className="text-justify">
          <span className="text-[#B2212B] font-bold text-xl sm:text-3xl">
            Serba Otomasi
          </span>{" "}
          memasarkan berbagai produk Running Text, salah satunya adalah Jam
          Digital Masjid atau Jam Sholat Digital dengan harga yang sangat
          bersaing. Tersedia juga Jam Running Text Toko dengan berbagai ukuran
          dan harga yang ekonomis.
        </p>
        <p className="text-justify">
          <span className="font-bold">
            Jam Digital Masjid / Jam Waktu Sholat (JWS)
          </span>
          : Jam dinding kaum Muslimin yang sangat cocok dipasang di rumah,
          masjid, mushola, perkantoran, guest house, sekolah Muslim, aula,
          penginapan syariah, apartemen, dan berbagai tempat lainnya.
        </p>
        <p className="text-justify">
          <span className="font-bold">Jam Running Text Toko</span>: Sangat cocok
          dipasang di pertokoan, pujasera, grosir, warung makan, untuk
          menampilkan promo produk dan pengenalan barang baru secara simpel,
          serta dapat dipindah-pindah sesuai kebutuhan.
        </p>
      </div>
    </div>
  );
}
