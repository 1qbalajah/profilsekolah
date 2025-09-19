"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type CtaItem = {
  href: string;
  img: string;
  title: string;
};

export default function CtaCards({
  items,
  prevPage = "/",
  nextPage = "/",
}: {
  items: CtaItem[];
  prevPage?: string;
  nextPage?: string;
}) {
  const router = useRouter();
  if (!items || items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-0 border -mb-4">
      {items.map((cta, index) => {
        // pilih tombol berdasarkan index
        const isLeft = index === 0;
        const goTo = isLeft ? prevPage : nextPage;
        const btnText = isLeft ? "← Sebelumnya" : "Selengkapnya →";

        return (
          <div
            key={index}
            className="relative group h-[300px] w-full overflow-hidden shadow-lg bg-black"
          >
            {/* Gambar */}
            <a href={cta.href} className="block h-full w-full">
              <Image
                src={cta.img}
                alt={cta.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500 opacity-70"
              />

              {/* teks + tombol */}
              <div className="absolute inset-0 flex flex-col items-start justify-center left-36">
                <h2 className="text-white text-4xl font-bold drop-shadow-lg">
                  {cta.title}
                </h2>

                {/* Tombol muncul hanya saat hover */}
                <div
                  className="
                    mt-4
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    pointer-events-none group-hover:pointer-events-auto
                  "
                >
                  <button
                    onClick={() => router.push(goTo)}
                    className="
                    border border-white text-white px-6 py-2 rounded-full
                    bg-transparent
                    hover:bg-[#132B6D] hover:border-[#132B6D] hover:text-white
                    transition-all duration-300
                    "
                  >
                    {btnText}
                  </button>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
