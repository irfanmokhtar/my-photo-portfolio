import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="hero" className="snap-start h-screen w-full relative flex items-center justify-center bg-black">
      <div className="absolute inset-0 opacity-60">
        <Image 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop" 
          alt="Hero Background" 
          fill 
          className="object-cover"
          priority
        />
      </div>
      
      <div className="relative z-10 text-center text-white space-y-6 max-w-3xl px-4">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">
          Capturing <br/> The Moment
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto">
          Professional photography for events, portraits, and editorial work. 
          Based in New York City.
        </p>
        <div className="pt-4">
          <Link href="#gallery">
            <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-white text-black hover:bg-gray-200">
              View Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
