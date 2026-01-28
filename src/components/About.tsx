import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="snap-start min-h-screen md:h-screen w-full bg-stone-100 flex items-center justify-center px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        <div className="relative h-[400px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-2xl">
          <Image src="/ConvoAsiah-163.jpg" alt="Asiah Convo" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Bukan hanya sekadar <br /> gambar.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Fotografi bukan hanya sekadar gambar, tetapi juga penceritaan tentang emosi dan peristiwa pada hari istimewa anda. Tak kira majlis perkahwinan, pertunangan, hari lahir, mahupun perayaan lain-lain, sepenuh jiwa 746 berjanji akan memberi pengalaman terbaik kepada anda.
          </p>
          <div className="grid gap-4 pt-4">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="font-bold text-xl mb-2">Siapa 746 Photography?</h3>
              <p className="text-sm text-gray-500">📍 Bertapak di Penang & Kuala Lumpur, servis meliputi seluruh Semenanjung Malaysia.</p>
              <p className="text-sm text-gray-500 pt-2">📸 Bermula dari minat terhadap kamera dari bangku sekolah, kini berpengalaman dalam fotografi rasmi selama 5 tahun.</p>
            </div>
          </div>
          <div className="pt-2">
            <p className="text-base text-gray-700 font-medium">
              {/* <span className="text-2xl font-bold text-black">Jangan segan silu</span> untuk hubungi kami untuk sebarang persoalan! */}
              Jangan segan silu untuk hubungi kami untuk sebarang persoalan!
            </p>
            <p className="text-sm text-gray-500 mt-1">Sebarang permintaan dan expectation sehabis baik akan kami penuhi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
