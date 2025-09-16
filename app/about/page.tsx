"use client";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import TimelineCarousel from "./components/TimelineCarousel";

// Data timeline
const timelineItems = [
  {
    year: "2014",
    title: "Gagasan Didirikan",
    description:
      "Penyerahan tanah wakaf seluas ±5.370 m² oleh Bapak Arif Budiman (Direktur Keuangan Pertamina periode 2014–2018) kepada Yayasan BAZMA.",
    image: "/carousel/gambar1.png",
  },
  {
    year: "2021",
    title: "Pembangunan Awal",
    description:
      "Mulai pembangunan gedung utama dan fasilitas asrama. Fokus pada infrastruktur dasar dan sistem pendidikan berbasis teknologi informasi.",
    image: "/carousel/gambar2.png",
  },
  {
    year: "2022",
    title: "Penerimaan Siswa Pertama",
    description:
      "SMK TI BAZMA menerima siswa pertama dari seluruh Indonesia dengan program SIJA (Sistem Informatika, Jaringan & Aplikasi).",
    image: "/carousel/gambar3.png",
  },
  {
    year: "2023",
    title: "Perluasan Fasilitas",
    description:
      "Dibuka laboratorium jaringan, server, dan ruang kelas digital. Integrasi pembelajaran berbasis proyek dan kolaborasi industri.",
    image: "/carousel/gambar4.png",
  },
  {
    year: "2024",
    title: "Program Internasional",
    description:
      "Kerja sama dengan lembaga teknologi internasional, siswa mendapat kesempatan magang bersertifikasi global.",
    image: "/carousel/gambar5.png",
  },
  {
    year: "2025",
    title: "Visi Masa Depan",
    description:
      "Menjadi sekolah unggulan kejuruan terdepan di Asia Tenggara, menghasilkan lulusan siap kerja, inovatif, dan berjiwa entrepreneur.",
    image: "/carousel/gambar6.png",
  },
];

// Data core values
const coreValues = [
  {
    title: "Mudah Bergaul",
    description:
      "Membangun hubungan yang hangat dan saling menghargai, sehingga mudah berkolaborasi dengan siapa pun.",
    image: "/mandiri.jpg",
  },
  {
    title: "Mandiri",
    description:
      "Mampu mengembangkan diri dan bertanggung jawab secara mandiri.",
    image: "/ustadzah.JPG",
  },
  {
    title: "Profesional",
    description: "Bekerja secara profesional sesuai kompetensi dan etika.",
    image: "/best.png",
  },
  {
    title: "Gigih",
    description: "Memiliki semangat pantang menyerah dalam mencapai tujuan.",
    image: "/server.png",
  },
];

const colors = [
  { base: "bg-blue-700", gradient: "from-blue-700/80" },
  { base: "bg-yellow-400", gradient: "from-yellow-400/80" },
  { base: "bg-red-600", gradient: "from-red-600/80" },
  { base: "bg-green-600", gradient: "from-green-600/80" },
];

export default function SchoolProfile() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-end"
        style={{
          backgroundImage: `url('/fasilitas/sekolah/gedungsekolah.png')`,
        }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-white md:text-6xl text-4xl font-bold tracking-wide mb-12">
            Profil Sekolah
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-[#005bd3] text-2xl md:text-3xl font-semibold mb-8">
            Sekilas Tentang SMK TI Bazma
          </h2>
          <div className="space-y-6 text-[#000000] leading-relaxed">
            <p className="text-base md:text-lg">
              SMK TI BAZMA Islamic Boarding School adalah sekolah menengah
              kejuruan berasrama yang menghadirkan pendidikan teknologi
              informasi terpadu dengan pembinaan karakter Islami. Diperuntukkan
              bagi anak-anak dhuafa dari seluruh Indonesia, sekolah ini berdiri
              melalui dukungan wakaf dan dana sosial kemanusiaan yang dikelola
              Yayasan BAZMA.
            </p>
            <p className="text-base md:text-lg">
              Pendidikan ditempuh selama 4 tahun dengan jurusan SIJA (Sistem
              Informatika, Jaringan & Aplikasi), diperkaya kurikulum berbasis
              praktik nyata dan pembinaan karakter. Tahun terakhir diisi dengan
              magang eksklusif di perusahaan mitra, termasuk anak perusahaan
              Pertamina, sehingga siswa tidak hanya belajar di kelas, tetapi
              juga merasakan langsung dinamika industri teknologi.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <section className="bg-white py-5">
        <div className="container mx-auto px-6">
          <div className="bg-[#132b6d] text-white p-8 rounded-xl overflow-hidden mb-8">
            <h2 className="text-2xl font-bold mb-4 px-5">VISI</h2>
            <p className="text-lg leading-relaxed px-5">
              Menjadi lembaga pendidikan kejuruan terdepan yang menghasilkan
              lulusan berkompeten, berkarakter, dan siap menghadapi tantangan
              global.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white mb-16">
        <div className="container mx-auto px-12">
          <h2
            className="text-2xl font-bold mb-6 px-5"
            style={{ color: "#132b6d" }}
          >
            MISI
          </h2>
          <div className="space-y-4 px-5">
            <p className="text-black py-4 border-b-1 border-black font-medium">
              Menyelenggarakan Sekolah Menengah Kejuruan (SMK) yang berkualitas.
            </p>
            <p className="text-black py-4 border-b-1 border-black font-medium">
              Melahirkan lulusan yang berkarakter unggul siap kerja.
            </p>
            <p className="text-black py-4 border-b-1 border-black font-medium">
              Mewujudkan generasi SDM yang berdaya saing global.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#f2f7ff] py-16">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-4 gap-8 items-center">
            {/* Kiri */}
            <div className="flex flex-col items-center lg:items-start justify-center col-span-1">
              <h1 className="text-[#132b6d] text-4xl font-bold text-center lg:text-left mb-[120px]">
                Core Value
              </h1>
              <div className="relative w-80 h-80 rounded-3xl overflow-visible mb-6 bg-[#132b6d] flex justify-center items-center">
                <div className="absolute bottom-[-30px] right-[-30px] w-24 h-24 bg-[#1c53de] rounded-full z-0"></div>
                <img
                  src="/sarip.png"
                  alt="Sarip"
                  className="absolute bottom-0 left-10 w-50 h-auto object-contain z-5"
                />
              </div>
            </div>

            {/* Kanan */}
            <div className="flex col-span-3 justify-end gap-4 flex-wrap">
              {coreValues.map((value, index) => {
                const color = colors[index % colors.length];
                return (
                  <div
                    key={index}
                    className={`group relative flex-shrink-0 ${color.base} rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-in-out w-32 hover:w-96 h-[500px]`}
                  >
                    {/* Gambar */}
                    <img
                      src={value.image}
                      alt={value.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${color.gradient} to-transparent opacity-100 transition-opacity duration-700 ease-in-out`}
                    />

                    {/* === TEKS VERTIKAL SEBELUM HOVER (POSISI BAWAH) === */}
                    <div className="absolute inset-0 flex justify-center items-end mb-6">
                      <span
                        className="
                    text-white text-3xl font-extrabold
                    transition-opacity duration-700
                    group-hover:opacity-0
                    [writing-mode:vertical-lr] rotate-180  /* teks dari bawah ke atas */
                  "
                      >
                        {value.title}
                      </span>
                    </div>

                    {/* Teks Hover */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
                      <h2 className="text-white text-xl font-bold mb-2">
                        {value.title}
                      </h2>
                      <p className="text-white text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Kilas Balik */}
      <div className="bg-[#fffdfd] w-full flex justify-center items-center py-20">
        <div className="container mx-auto px-12">
          {/* Grid 2 kolom agar kiri & kanan sejajar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Kolom Kiri: Teks */}
            <div>
              <h2 className="font-semibold text-[#132b6d] text-[32px]">
                Kilas Balik SMK TI BAZMA
              </h2>
              <p className="font-medium text-black text-lg mt-4 leading-relaxed text-justify">
                Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                BAZMA) merupakan sekolah unggulan berasrama yang bebas biaya dan
                diperuntukan untuk anak-anak tidak mampu.
              </p>
            </div>

            {/* Kolom Kanan: Video */}
            <div className="w-full max-w-[560px] ml-auto mr-0 rounded-[20px] overflow-hidden shadow-lg">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tM8rFu3mwCY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="w-full h-[315px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Carousel */}
      <TimelineCarousel items={timelineItems} />
    </div>
  );
}
