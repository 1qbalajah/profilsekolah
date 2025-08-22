"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"
import Timeline from "./timeline/Timeline";
import { motion } from "framer-motion"


export default function Home() {
  return (
    <main>
      <SchoolProfileHero />
      <CoreValuePage />
      <Timeline/>
    </main>
  )
}


function SchoolProfileHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image dari folder public */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/gedungsekolah.png')"}}
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
  )
}

function CoreValuePage() {
  const coreValues = [
    {
      title: "Mudah Bergaul",
      desc: "Membangun hubungan yang hangat dan saling menghargai, sehingga mudah berkolaborasi dengan siapa pun."
    },
    {
      title: "Gigih",
      desc: "Terus berusaha dengan semangat pantang menyerah demi meraih tujuan."
    },
    {
      title: "Mandiri",
      desc: "Mampu bertanggung jawab dan menyelesaikan masalah secara mandiri."
    },
    {
      title: "Profesional",
      desc: "Menjaga integritas, disiplin, serta hasil kerja berkualitas."
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex items-center justify-center bg-white-100 p-6">
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

              {/* Dropdown dengan animasi smooth */}
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden px-6"
              >
                <p className="text-black text-base py-3">
                  {value.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
