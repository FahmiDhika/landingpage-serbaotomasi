// pages/kebijakan-privasi.tsx
import Footer from "@/components/footer";
import React from "react";

export default function KebijakanPrivasi() {
  return (
    <>
      <section className="flex justify-center">
        <main className="w-2/3 min-h-screen bg-white text-gray-800 px-4 sm:px-8 lg:px-32 py-16 font-sans">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8">
            Kebijakan Privasi
          </h1>

          <div className="space-y-6 leading-relaxed text-justify">
            <p>
              Adanya Kebijakan Privasi ini adalah komitmen nyata dari Serba
              Otomasi untuk menghargai dan melindungi setiap data atau informasi
              pribadi Pengguna situs www.serbaotomasi.com, situs-situs
              turunannya, serta aplikasi gawai Serba Otomasi (JWS Wifi A Serba
              Otomasi,dan JWS Wifi B Serba Otomasi).
            </p>
            <p>
              Kebijakan Privasi ini (beserta syarat-syarat penggunaan dari situs
              Serba Otomasi sebagaimana tercantum dalam Syarat & Ketentuan serta
              informasi lain yang tercantum di Situs) menetapkan dasar atas
              perolehan, pengumpulan, pengolahan, penganalisisan, penampilan,
              pengiriman, pembukaan, penyimpanan, perubahan, penghapusan dan
              segala bentuk pengelolaan yang terkait dengan data maupun
              informasi yang mengidentifikasikan atau dapat digunakan untuk
              mengidentifikasi Pengguna yang Pengguna berikan kepada Serba
              Otomasi yang kumpulkan dari Pengguna maupun pihak ketiga
              (selanjutnya disebut sebagai “Data Pribadi”).
            </p>

            {/* A */}
            <section>
              <h2 className="font-semibold mb-2">
                A. Perolehan dan Pengumpulan Data Pribadi Pengguna
              </h2>
              <p>
                Serba Otomasi mengumpulkan Data Pribadi Pengguna dengan tujuan
                untuk memproses lokasi Pengguna, mengelola dan memperlancar
                proses penggunaan Perangkat keras milik kami, serta tujuan
                lainnya selama diizinkan oleh peraturan perundang-undangan yang
                berlaku.
              </p>
              <p className="mt-2">
                1. Data yang terekam pada saat Pengguna mempergunakan Situs,
                termasuk namun tidak terbatas pada:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  data lokasi yang akurat atau perkiraan seperti lokasi Wi-Fi
                  dan geo-location.
                </li>
                <li>
                  data perangkat, diantaranya jenis perangkat yang digunakan
                  untuk mengakses Situs, termasuk model perangkat keras, sistem
                  operasi dan versinya, perangkat lunak, nomor IMEI, nama file
                  dan versinya, pilihan bahasa, pengenal perangkat unik,
                  pengenal iklan, nomor seri, informasi gerakan perangkat,
                  dan/atau informasi jaringan seluler.
                </li>
                <li>
                  data catatan (log), diantaranya catatan pada server yang
                  menerima data seperti alamat IP perangkat, tanggal dan waktu
                  akses, fitur aplikasi atau laman yang dilihat, proses kerja
                  aplikasi dan aktivitas sistem lainnya, jenis peramban
                  (browser), dan/atau situs atau layanan pihak ketiga yang
                  Pengguna gunakan sebelum berinteraksi dengan Situs.
                </li>
              </ul>
            </section>

            {/* B */}
            <section>
              <h2 className="font-semibold mb-2">B. Penggunaan Data Pribadi</h2>
              <p>
                Serba Otomasi dapat menggunakan Data Pribadi yang diperoleh dan
                dikumpulkan dari Pengguna sebagaimana disebutkan hanya untuk
                pengaturan lokasi jam masjid dan penentuan lokasi zona waktu.
              </p>
            </section>

            {/* C */}
            <section>
              <h2 className="font-semibold mb-2">
                C. Pengungkapan Data Pribadi Pengguna
              </h2>
              <p>
                Data pengguna hanya sebatas Lokasi saja dan hanya pengguna saja
                yang mengetahui data pribadi tersebut.
              </p>
            </section>

            {/* D */}
            <section>
              <h2 className="font-semibold mb-2">D. Cookies</h2>
              <div className="flex flex-col gap-10">
                <p>
                  Cookies adalah file kecil yang secara otomatis akan mengambil
                  tempat di dalam perangkat Pengguna yang menjalankan fungsi
                  dalam menyimpan preferensi maupun konfigurasi Pengguna selama
                  mengunjungi suatu situs.
                </p>

                <p>
                  Cookies tersebut tidak diperuntukkan untuk digunakan pada saat
                  melakukan akses data lain yang Pengguna miliki di perangkat
                  komputer Pengguna, selain dari yang telah Pengguna setujui
                  untuk disampaikan.
                </p>

                <p>
                  Walaupun secara otomatis perangkat komputer Pengguna akan
                  menerima cookies, Pengguna dapat menentukan pilihan untuk
                  melakukan modifikasi melalui pengaturan browser Pengguna yaitu
                  dengan memilih untuk menolak cookies (pilihan ini dapat
                  menghambat tersedianya layanan Serba Otomasi secara optimal
                  pada saat Pengguna mengakses Situs).
                </p>

                <p>
                  Serba Otomasi menggunakan fitur Google Analytics Demographics
                  and Interest. Data yang Serba Otomasi peroleh dari fitur
                  tersebut, seperti umur, jenis kelamin, minat Pengguna dan
                  informasi lainnya yang dapat mengidentifikasi Pengguna, akan
                  Serba Otomasi gunakan untuk pengembangan fitur, fasilitas, dan
                  konten yang terdapat pada Situs Serba Otomasi.
                </p>

                <p>
                  Serba Otomasi dapat menggunakan fitur-fitur yang disediakan
                  oleh pihak ketiga dalam rangka meningkatkan layanan dan konten
                  Serba Otomasi, termasuk penilaian, penyesuaian, dan penyajian
                  iklan kepada setiap Pengguna berdasarkan minat atau riwayat
                  kunjungan. Jika Pengguna tidak ingin iklan ditampilkan
                  berdasarkan penyesuaian tersebut, maka Pengguna dapat
                  mengaturnya melalui browser.
                </p>
              </div>
            </section>

            {/* E */}
            <section>
              <h2 className="font-semibold mb-2">
                E. Pilihan Pengguna dan Transparansi
              </h2>
              <div className="flex flex-col gap-10">
                <p>
                  Perangkat seluler pada umumnya (iOS dan Android) memiliki
                  pengaturan sehingga aplikasi Serba Otomasi tidak dapat
                  mengakses data tertentu tanpa persetujuan dari Pengguna.
                  Perangkat iOS akan memberikan pemberitahuan kepada Pengguna
                  saat aplikasi Serba Otomasi pertama kali meminta akses
                  terhadap data tersebut, sedangkan perangkat Android akan
                  memberikan pemberitahuan kepada Pengguna saat aplikasi.
                </p>
                <p>
                  Pengguna dapat mengakses dan mengubah informasi berupa alamat
                  email, nomor telepon, tanggal lahir, jenis kelamin, daftar
                  alamat, metode pembayaran, dan rekening bank melalui fitur
                  pengaturan (settings) pada Situs.
                </p>
                <p>
                  Pengguna dapat menarik diri (opt-out) dari informasi atau
                  notifikasi berupa buletin, ulasan, diskusi produk, pesan
                  pribadi, atau pesan pribadi dari Admin yang dikirimkan oleh
                  Serba Otomasi melalui fitur pengaturan pada Situs. Serba
                  Otomasi tetap dapat mengirimkan pesan atau email berupa
                  keterangan transaksi atau informasi terkait akun Pengguna.
                </p>
              </div>
            </section>

            {/* F */}
            <section>
              <h2 className="font-semibold mb-2">
                F. Keamanan, Penyimpanan dan Penghapusan Data Pribadi Pengguna
              </h2>
              <p>
                Serba Otomasi tidak melindungi setiap Data Pribadi Pengguna yang
                disimpan dalam sistemnya, data yang terekam di sistem tidak bisa
                diambil dan tidak disebarluaskan ke pengguna lainnya.
              </p>
            </section>

            {/* G */}
            <section>
              <h2 className="font-semibold mb-2">
                G. Akses dan Perbaikan Data Pribadi Pengguna atau Penarikan
                Kembali Persetujuan
              </h2>
              <p>
                Serba Otomasi mengambil data lokasi untuk menentukan waktu
                diperangkat keras dan guna kelancaran aplikasi. adapun data
                pribadi seperti nama dan lainnya tidak diambil, juga bukan
                tanggung jawab kami masalah data nama pengguna dan sebagainya.
              </p>
            </section>

            {/* H */}
            <section>
              <h2 className="font-semibold mb-2">
                H. Pengaduan terkait Perlindungan Data Pengguna
              </h2>
              <div className="flex flex-col gap-10">
                <p>
                  Jika Pengguna memiliki kekhawatiran tentang penanganan atau
                  perlakuan Serba Otomasi terhadap Data Pribadi Pengguna atau
                  jika Pengguna yakin bahwa privasinya telah dilanggar, Pengguna
                  dapat menghubungi Serba Otomasi melalui layanan pelanggan
                  Serba Otomasi pada kontak Serba Otomasi yang tercantum dalam
                  halaman ini dengan menjelaskan identitas dan sifat keluhan
                  Pengguna.
                </p>
                <p>
                  Serba Otomasi akan menyelidiki keluhan Pengguna dan berupaya
                  untuk memberikan tanggapan terhadap keluhan tersebut dalam
                  kurun waktu yang wajar setelah menerima keluhan yang
                  disampaikan oleh Pengguna.
                </p>
              </div>
            </section>

            {/* I */}
            <section>
              <h2 className="font-semibold mb-2">I. Hubungi Kami</h2>
              <p>
                Dalam hal Pengguna memiliki pertanyaan, komentar, keluhan, atau
                klaim mengenai Kebijakan Privasi ini atau Pengguna ingin
                mendapatkan akses dan melakukan koreksi terhadap Data Pribadi
                miliknya, silakan hubungi layanan pelanggan Serba Otomasi
                melalui laman https://www.serbaotomasi.com/help.
              </p>
            </section>

            {/* J */}
            <section>
              <h2 className="font-semibold mb-2">
                J. Penyimpanan, Permohonan Subjek Data dan Penghapusan Informasi
              </h2>
              <ul className="list-disc pl-6 mt-2">
                <li>Serba Otomasi tidak menyimpan informasi akun Pengguna.</li>
                <li>
                  Pengguna memiliki hak untuk mengajukan permohonan subjek data
                  kepada Serba Otomasi.
                </li>
                <li>
                  Pengguna tidak dapat melakukan permohonan penghapusan
                  informasi Pengguna melalui aplikasi Serba Otomasi dan Serba
                  Otomasi mobile karena kami tidak memintanya.
                </li>
                <li>
                  Serba Otomasi tidak akan memproses permohonan subjek data.
                </li>
              </ul>
            </section>

            {/* K */}
            <section>
              <h2 className="font-semibold mb-2">
                K. Pembaruan Kebijakan Privasi
              </h2>
              <p>
                Serba Otomasi dapat sewaktu-waktu melakukan perubahan atau
                pembaruan terhadap Kebijakan Privasi ini sebagai bagian dari
                kepatuhan terhadap peraturan perundang-undangan dan kebijakan
                internal perusahaan. Serba Otomasi akan memberikan notifikasi
                kepada Pengguna dalam adanya perubahan dan/atau pembaruan dalam
                Kebijakan Privasi ini.
              </p>
            </section>
          </div>
        </main>
      </section>
      <Footer />
    </>
  );
}
