import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="snap-start h-screen w-full bg-white flex flex-col pt-24 px-4 md:px-12">
      <div className="mb-8">
        <h2 className="text-4xl font-bold tracking-tight text-black">My Portfolio</h2>
        <p className="text-gray-500">A collection of recent work capturing special moments.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 pb-12 overflow-hidden">
        <div className="relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group">
          <Image src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" alt="Family portrait outdoors" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full">Family Portrait</span>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden group">
          <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" alt="Portrait of a woman" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>

        <div className="relative rounded-2xl overflow-hidden group">
          <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" alt="Male portrait" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      </div>
    </section>
  );
}
