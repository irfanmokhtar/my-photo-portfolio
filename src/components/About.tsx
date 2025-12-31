import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="snap-start h-screen w-full bg-stone-100 flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        <div className="relative h-[400px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-2xl">
          <Image src="https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=1000&auto=format&fit=crop" alt="Photographer" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">More than just <br/> a camera.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I believe that photography is about seeing the world in a way that others might miss. Whether it is a wedding, a fashion shoot, or a commercial project, my goal is to tell a story through light and composition.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">Editorial</h3>
              <p className="text-sm text-gray-500">High-end fashion and magazine features.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">Commercial</h3>
              <p className="text-sm text-gray-500">Product photography and brand campaigns.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
