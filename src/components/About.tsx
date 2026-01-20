import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="snap-start h-screen w-full bg-stone-100 flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        <div className="relative h-[400px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-2xl">
          <Image src="/ConvoAsiah-163.jpg" alt="Asiah Convo" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">More than just <br /> a camera.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I believe that photography is about capturing your precious moments in a way that you&apos;ll treasure forever. Whether it&apos;s a family gathering, graduation, birthday celebration, or special event, my goal is to tell your story through beautiful, natural photos at prices that work for you.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">Family & Events</h3>
              <p className="text-sm text-gray-500">Family portraits, birthdays, and celebrations.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">Graduations</h3>
              <p className="text-sm text-gray-500">Graduation photos and milestone moments.</p>
            </div>
          </div>
          <div className="pt-2">
            <p className="text-base text-gray-700 font-medium">
              Packages starting from <span className="text-2xl font-bold text-black">RM 299</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">Flexible packages to fit your budget</p>
          </div>
        </div>
      </div>
    </section>
  );
}
