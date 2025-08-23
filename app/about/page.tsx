"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import Timeline from "./timeline/Timeline";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <SchoolProfileHero />
      <CoreValuePage />
      <Timeline />
      <SchoolFacilities />
    </main>
  );
}

function SchoolProfileHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/gedungsekolah.png')" }}
      />

      {/* Overlay hitam */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Konten */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 tracking-wide">
          PROFIL SEKOLAH
        </h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA)
          merupakan sekolah unggulan berasrama yang bebas biaya...
        </p>
      </div>
    </section>
  );
}

function CoreValuePage() {
  const coreValues = [
    {
      title: "Mudah Bergaul",
      desc: "Membangun hubungan yang hangat dan saling menghargai, sehingga mudah berkolaborasi dengan siapa pun.",
    },
    {
      title: "Gigih",
      desc: "Terus berusaha dengan semangat pantang menyerah demi meraih tujuan.",
    },
    {
      title: "Mandiri",
      desc: "Mampu bertanggung jawab dan menyelesaikan masalah secara mandiri.",
    },
    {
      title: "Profesional",
      desc: "Menjaga integritas, disiplin, serta hasil kerja berkualitas.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex items-center justify-center bg-white-50 py-10">
      <div className="bg-[#005bd3] rounded-3xl shadow-lg w-full max-w-7xl px-[60px] py-[40px] transition-all duration-300">
        <h1 className="text-white text-4xl font-bold text-center tracking-wider mb-8">
          CORE VALUE
        </h1>

        <div className="space-y-4">
          {coreValues.map((value, index) => (
            <div key={index} className="text-center bg-white rounded-[7px] overflow-hidden">
              {/* Tombol utama */}
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full px-6 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-black text-lg font-medium text-center flex-1">
                  {value.title}
                </span>
                {openIndex === index ? (
                  <ChevronDown className="w-6 h-6 text-black ml-4" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-black ml-4" />
                )}
              </button>

              {/* Dropdown animasi */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden px-6"
              >
                <p className="text-black text-base py-3">{value.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SchoolFacilities() {
  const facilities = [
    { title: "Lab Komputer", image: "/fasilitas/sekolah/labkom.jpeg", jumlah: 2 },
    { title: "Ruang Gym", image: "/fasilitas/sekolah/rapat.jpg", jumlah: 1 },
    { title: "Ruang Konsultansi", image: "/fasilitas/sekolah/konsultansi.jpg", jumlah: 1 },
    { title: "Ruang Kelas", image: "/fasilitas/sekolah/kelas.jpg", jumlah: 4 },
  ];

  return (
    <section className="min-h-screen bg-[#ffffff] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-[#005bd3] text-4xl font-bold mb-10 text-left">
          Fasilitas Sekolah
        </h1>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
            >
              {/* Image Container with Border Animation */}
              <div className="relative rounded-2xl overflow-hidden transition-all duration-500 border-4 border-transparent group-hover:border-white group-hover:scale-105">
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl" />
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center transition-all duration-500 group-hover:translate-y-[-15px]">
                <h3 className="text-white text-xl font-semibold drop-shadow-lg">
                  {facility.title}
                </h3>
                <p className="text-white text-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Jumlah: {facility.jumlah}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

