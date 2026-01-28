import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="snap-start min-h-screen md:h-screen w-full bg-white flex flex-col pt-24 px-6 md:px-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold tracking-tight text-black">Galeri.</h2>
        <p className="text-gray-500">Koleksi gambar yang akan menjadi memori sehingga kehari tua.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 pb-12">
        <div className="relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group">
          <Image src="/HaziqHanisNikah-149.jpg" alt="Haziq Hanis Nikah pelamin" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full">Wedding Album</span>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden group">
          <Image src="/DSC01844.jpg" alt="Convo group photo" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>

        <div className="relative rounded-2xl overflow-hidden group">
          <Image src="/DSC06439.jpg" alt="Abu Aishatul Outdoor" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      </div>
    </section>
  );
}
