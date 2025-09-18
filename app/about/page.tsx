"use client";
import React, { useState } from "react";
import TimelineCarousel from "./components/TimelineCarousel";
import { kepemimpinan, KA, TU, asrama, tendik } from "./components/datatendik";

/* ===================== DATA TIMELINE ===================== */
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
      "SMK TI BAZMA menerima siswa pertama dari seluruh Indonesia dengan program SIJA.",
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
    description: "Menjadi sekolah unggulan kejuruan terdepan di Asia Tenggara.",
    image: "/carousel/gambar6.png",
  },
];

/* ===================== DATA CORE VALUE ===================== */
const coreValues = [
  {
    title: "Mudah Bergaul",
    description: "Membangun hubungan yang hangat dan saling menghargai.",
    image: "/mandiri.jpg",
  },
  {
    title: "Mandiri",
    description: "Mampu mengembangkan diri dan bertanggung jawab.",
    image: "/ustadzah.JPG",
  },
  {
    title: "Profesional",
    description: "Bekerja sesuai kompetensi dan etika.",
    image: "/best.png",
  },
  {
    title: "Gigih",
    description: "Semangat pantang menyerah.",
    image: "/server.png",
  },
];

const colors = [
  { base: "bg-blue-700", gradient: "from-blue-700/80" },
  { base: "bg-yellow-400", gradient: "from-yellow-400/80" },
  { base: "bg-red-600", gradient: "from-red-600/80" },
  { base: "bg-green-600", gradient: "from-green-600/80" },
];

/* ===================== DATA FASILITAS ===================== */
const sekolahFacilities = [
  { title: "Lab Komputer", keterangan: "Sekolah", image: "/fasilitas/sekolah/labkom.jpeg" }, 
  { title: "Ruang Rapat", keterangan: "Sekolah", image: "/fasilitas/sekolah/rapat.jpg" },
  { title: "Ruang Konsultansi", keterangan: "Sekolah", image: "/fasilitas/sekolah/konsultansi.jpg" },
  { title: "Ruang Kelas", keterangan: "Sekolah", image: "/fasilitas/sekolah/kelas.jpg" },
];

const asramaFacilities = [
  { title: "Barbershop", keterangan: "Asrama", image: "/fasilitas/asrama/barbershop.avif" },
  { title: "Kamar Tidur", keterangan: "Asrama", image: "/fasilitas/asrama/kamarsiswa.jpeg" },
  { title: "Ruang Gym", keterangan: "Asrama", image: "/fasilitas/asrama/gym.jpeg" },
  { title: "Kamar Sehat", keterangan: "Asrama", image: "/fasilitas/asrama/kamarsehat.jpeg" },
];

/* ===================== CARD GRID untuk fasilitas ===================== */
const CardGrid = ({ data }: { data: any[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data.map((item, index) => (
      <div
        key={index}
        className="relative rounded-xl overflow-hidden group cursor-pointer"
      >
        {/* Gambar */}
        <div className="relative w-full overflow-hidden">
          <img
            src={item.foto}
            alt={item.name}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay gradient → muncul saat hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Teks */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10 transition-all duration-500">
          <h3 className="text-xl font-bold text-white drop-shadow-md">
            {item.name}
          </h3>
          <p className="text-sm text-gray-200">{item.jabatan}</p>
        </div>
      </div>
    ))}
  </div>
);

/* ===================== MAIN COMPONENT ===================== */
export default function SchoolProfile() {
  const [selectedTab, setSelectedTab] = useState<"sekolah" | "asrama">(
    "sekolah"
  );
  const facilities =
    selectedTab === "sekolah" ? sekolahFacilities : asramaFacilities;

  return (
    <div className="min-h-screen">
      {/* HERO */}
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

      {/* ABOUT */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-[#005bd3] text-2xl md:text-3xl font-semibold mb-8">
            Sekilas Tentang SMK TI Bazma
          </h2>
          <p className="text-base md:text-lg text-[#000000] leading-relaxed mb-4">
            SMK TI BAZMA Islamic Boarding School adalah sekolah menengah
            kejuruan berasrama yang menghadirkan pendidikan teknologi informasi
            terpadu dengan pembinaan karakter Islami.
          </p>
          <p className="text-base md:text-lg text-[#000000] leading-relaxed">
            Pendidikan ditempuh selama 4 tahun dengan jurusan SIJA, diperkaya
            kurikulum berbasis praktik nyata dan pembinaan karakter.
          </p>
        </div>
      </div>

      {/* VISI */}
      <section className="bg-white py-5">
        <div className="container mx-auto px-6">
          <div className="bg-[#132b6d] text-white p-8 rounded-xl overflow-hidden mb-8">
            <h2 className="text-2xl font-bold mb-4 px-5">VISI</h2>
            <p className="text-lg leading-relaxed px-5">
              Menjadi lembaga pendidikan kejuruan terdepan.
            </p>
          </div>
        </div>
      </section>

      {/* MISI */}
      <section className="bg-white mb-16">
        <div className="container mx-auto px-12">
          <h2 className="text-2xl font-bold mb-6 px-5 text-[#132b6d]">MISI</h2>
          <div className="space-y-4 px-5">
            <p className="text-black py-4 font-medium">
              Menyelenggarakan Sekolah Menengah Kejuruan (SMK) yang berkualitas.
            </p>
            <p className="text-black py-4 font-medium">
              Melahirkan lulusan yang berkarakter unggul siap kerja.
            </p>
            <p className="text-black py-4 font-medium">
              Mewujudkan generasi SDM yang berdaya saing global.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUE */}
      <section className="bg-[#f2f7ff] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-4 gap-8 items-center">
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
            <div className="flex col-span-3 justify-end gap-4 flex-wrap">
              {coreValues.map((value, index) => {
                const color = colors[index % colors.length];
                return (
                  <div
                    key={index}
                    className={`group relative flex-shrink-0 ${color.base} rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-in-out w-32 hover:w-96 h-[500px]`}
                  >
                    <img
                      src={value.image}
                      alt={value.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${color.gradient} to-transparent opacity-100 transition-opacity duration-700 ease-in-out`}
                    />
                    <div className="absolute inset-0 flex justify-center items-end mb-6">
                      <span className="text-white text-3xl font-extrabold transition-opacity duration-700 group-hover:opacity-0 [writing-mode:vertical-lr] rotate-180">
                        {value.title}
                      </span>
                    </div>
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

      {/* KILAS BALIK */}
      <div className="bg-[#fffdfd] w-full flex justify-center items-center py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-semibold text-[#132b6d] text-[32px]">
                Kilas Balik SMK TI BAZMA
              </h2>
              <p className="font-medium text-black text-lg mt-4 leading-relaxed text-justify">
                SMK TI BAZMA merupakan sekolah unggulan berasrama yang bebas
                biaya.
              </p>
            </div>
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

      {/* TIMELINE */}
      <TimelineCarousel items={timelineItems} />

      {/* FASILITAS */}
      <section className="bg-white py-16 w-full">
        <h2 className="container mx-auto px-6 text-3xl font-bold text-[#132b6d] mb-5 text-left">
          Fasilitas
        </h2>
        <div className="container mx-auto px-6 mb-8">
          <div className="relative w-[300px] mx-0 rounded-full border-2 border-[#132b6d] p-1 flex">
            <div
              className="absolute top-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.5rem)] bg-[#132b6d] rounded-full transition-all duration-500 ease-in-out"
              style={{
                left:
                  selectedTab === "sekolah" ? "0.25rem" : "calc(50% + 0.25rem)",
              }}
            />
            <button
              onClick={() => setSelectedTab("sekolah")}
              className={`relative z-10 flex-1 py-2 text-lg font-medium rounded-full transition-colors duration-500 ${
                selectedTab === "sekolah" ? "text-white" : "text-[#132b6d]"
              }`}
            >
              Sekolah
            </button>
            <button
              onClick={() => setSelectedTab("asrama")}
              className={`relative z-10 flex-1 py-2 text-lg font-medium rounded-full transition-colors duration-500 ${
                selectedTab === "asrama" ? "text-white" : "text-[#132b6d]"
              }`}
            >
              Asrama
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-0">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="relative overflow-hidden group w-full h-100" // ✅ Tinggikan card
            >
              {/* Gambar */}
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div
                className="
          absolute inset-0 
          bg-gradient-to-t from-black via-black/40 to-white/10 
          opacity-70 group-hover:opacity-90 
          transition-opacity duration-700
        "
              ></div>

              {/* Teks di dalam gambar */}
              <div className="absolute bottom-3 left-0 right-0 p-6 z-10">
                {/* ✅ Tambahkan keterangan kecil di atas title */}
                {facility.keterangan && (
                  <span className="text-xs text-gray-200 opacity-70 tracking-wide uppercase block mb-1">
                    {facility.keterangan}
                  </span>
                )}

                <p className="text-2xl font-bold text-white drop-shadow-md">
                  {facility.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STRUKTUR ORGANISASI */}
      <section className="bg-[#ffffff] py-16">
        {/* Kepemimpinan */}
        <h2 className="container mx-auto px-6 text-3xl font-bold text-[#132b6d] mb-10 text-left">
          Kepemimpinan
        </h2>
        <div className="container mx-auto px-6 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {kepemimpinan.map((item, index) => (
            <div
              key={index}
              className="
          rounded-xl 
          overflow-hidden 
          shadow-lg 
          hover:shadow-2xl 
          transition-all duration-500 
          relative
          hover:-translate-y-1
          h-[500px]  /* ✅ Tinggi card dinaikkan */
        "
            >
              {/* Foto */}
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-white/10"></div>
              </div>

              {/* Teks di dalam gambar */}
              <div className="p-4 absolute bottom-0 left-0 right-0 z-10">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-sm text-gray-200">{item.jabatan}</p>
              </div>
            </div>
          ))}
        </div>

        {/* KA */}
        <h2 className="container mx-auto px-6 text-3xl font-bold text-[#132b6d] mb-10 text-left">
          Kepala A
        </h2>
        <div className="container mx-auto px-6 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {KA.map((item, index) => (
            <div
              key={index}
              className="
          rounded-xl 
          overflow-hidden 
          shadow-lg 
          hover:shadow-2xl 
          transition-all duration-500 
          relative
          hover:-translate-y-1
          h-100
        "
            >
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-white/10"></div>
              </div>
              <div className="p-4 absolute bottom-0 left-0 right-0 z-10">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-sm text-gray-200">{item.jabatan}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TU */}
        <h2 className="container mx-auto px-6 text-3xl font-bold text-[#132b6d] mb-10 text-left">
          Tata Usaha
        </h2>
        <div className="container mx-auto px-6 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TU.map((item, index) => (
            <div
              key={index}
              className="
          rounded-xl 
          overflow-hidden 
          shadow-lg 
          hover:shadow-2xl 
          transition-all duration-500 
          relative
          hover:-translate-y-1
          h-100
        "
            >
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-white/10"></div>
              </div>
              <div className="p-4 absolute bottom-0 left-0 right-0 z-10">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-sm text-gray-200">{item.jabatan}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Asrama */}
        <h2 className="container mx-auto px-6 text-3xl font-bold text-[#132b6d] mb-10 text-left">
          Asrama
        </h2>
        <div className="container mx-auto px-6 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {asrama.map((item, index) => (
            <div
              key={index}
              className="
          rounded-xl 
          overflow-hidden 
          shadow-lg 
          hover:shadow-2xl 
          transition-all duration-500 
          relative
          hover:-translate-y-1
          h-100
        "
            >
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-white/10"></div>
              </div>
              <div className="p-4 absolute bottom-0 left-0 right-0 z-10">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-sm text-gray-200">{item.jabatan}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tendik */}
        <h2 className="container mx-auto px-6 text-3xl font-bold text-[#132b6d] mb-10 text-left">
          Tenaga Pendidikan
        </h2>
        <div className="container mx-auto px-6 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tendik.map((item, index) => (
            <div
              key={index}
              className="
          rounded-xl 
          overflow-hidden 
          shadow-lg 
          hover:shadow-2xl 
          transition-all duration-500 
          relative
          hover:-translate-y-1
          h-100
        "
            >
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-white/10"></div>
              </div>
              <div className="p-4 absolute bottom-0 left-0 right-0 z-10">
                <h3 className="text-lg font-bold text-white">{item.name}</h3>
                <p className="text-sm text-gray-200">{item.jabatan}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
