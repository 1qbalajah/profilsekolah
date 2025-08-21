"use client";
import { motion } from "framer-motion";

const timelineData = [
  { year: "2014 – 2018", text: "Gagasan Didirikan", desc: "Pencanangan sebuah wadah ..." },
  { year: "2021", text: "Persiapan Lahan dan Sarana", desc: "Persiapan dilakukan untuk ..." },
  { year: "2022", text: "Babak Baru dan Pembelajaran Perdana", desc: "SMK TI BAZMA mulai ..." },
  { year: "2023", text: "Proses KBM di Gedung Baru", desc: "Pembelajaran secara penuh ..." },
  { year: "2023 – 2024", text: "Harapan yang mulai terwujud", desc: "Mengawali dengan harapan ..." },
  { year: "2025", text: "Launching Gedung Asrama dan Sekolah", desc: "Diresmikan untuk mendukung ..." },
];

export default function Timeline() {
  const leftItems = timelineData.slice(0, 3);
  const rightItems = timelineData.slice(3);

  return (
    <section className="relative bg-white py-16 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-12 text-center">
        Sejarah SMK TI Bazma
      </h2>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Garis Kiri */}
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-600"></div>
          <div className="space-y-16 pl-12">
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Titik */}
                <div className="absolute left-[-28px] top-5 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>

                {/* Box Konten */}
                <div className="bg-white shadow-md rounded-xl p-5 border border-blue-200 text-left">
                  <h3 className="text-blue-600 font-bold text-lg">{item.year}</h3>
                  <h4 className="text-gray-800 font-semibold">{item.text}</h4>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Garis Kanan */}
        <div className="relative">
          <div className="absolute right-4 top-0 bottom-0 w-1 bg-blue-600"></div>
          <div className="space-y-16 pr-12">
            {rightItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Titik */}
                <div className="absolute right-[-28px] top-5 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>

                {/* Box Konten */}
                <div className="bg-white shadow-md rounded-xl p-5 border border-blue-200 text-right">
                  <h3 className="text-blue-600 font-bold text-lg">{item.year}</h3>
                  <h4 className="text-gray-800 font-semibold">{item.text}</h4>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-blue-600 text-center mt-10 text-sm font-semibold">
        *SMK TI BAZMA bukan sekadar sekolah, tapi wadah mencetak generasi Islami yang unggul di bidang teknologi dan berjiwa sosial tinggi.*
      </p>
    </section>
  );
}
