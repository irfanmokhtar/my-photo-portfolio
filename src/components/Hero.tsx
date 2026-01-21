import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="snap-start h-screen w-full relative flex items-center justify-center bg-black">
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/IrfanFarhahCreativePhoto-77.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 text-center text-white space-y-6 max-w-3xl px-4">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          Cipta Kenangan <br /> Abadi
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto">
          Hasil fotografi premium pada harga mampu milik untuk hari bahagia dan majlis istimewa anda.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-6">
          <Link href="#gallery">
            <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-white text-black hover:bg-gray-200">
              Ke Galeri
            </Button>
          </Link>
          <Link href="#calculator">
            <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-white text-black hover:bg-gray-200">
              Anggaran Harga
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
