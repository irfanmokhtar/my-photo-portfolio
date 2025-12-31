import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Instagram, Mail, Twitter } from "lucide-react";

export default function PhotographyPortfolio() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      
      {/* --- FLOATING HEADER --- */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <Camera className="w-6 h-6" />
          <span>LENSCRAFT</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#hero" className="hover:opacity-70 transition-opacity">Home</Link>
          <Link href="#gallery" className="hover:opacity-70 transition-opacity">Work</Link>
          <Link href="#about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link href="#contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </nav>
        <Button variant="outline" className="text-black bg-white hover:bg-gray-200 border-none rounded-full px-6">
          Book Now
        </Button>
      </header>

      {/* --- SECTION 1: HERO --- */}
      <section id="hero" className="snap-start h-screen w-full relative flex items-center justify-center bg-black">
        {/* Background Image Placeholder */}
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

      {/* --- SECTION 2: GALLERY --- */}
      <section id="gallery" className="snap-start h-screen w-full bg-white flex flex-col pt-24 px-4 md:px-12">
        <div className="mb-8">
            <h2 className="text-4xl font-bold tracking-tight text-black">Selected Works</h2>
            <p className="text-gray-500">A curated selection of my recent favorites.</p>
        </div>
        
        {/* Grid Layout */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 pb-12 overflow-hidden">
            {/* Image 1 (Large) */}
            <div className="relative md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" alt="Work 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full">Portrait</span>
                </div>
            </div>
            
            {/* Image 2 */}
            <div className="relative rounded-2xl overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop" alt="Work 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            
            {/* Image 3 */}
            <div className="relative rounded-2xl overflow-hidden group">
                <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop" alt="Work 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
        </div>
      </section>

      {/* --- SECTION 3: SERVICES / ABOUT --- */}
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

      {/* --- SECTION 4: CONTACT --- */}
      <section id="contact" className="snap-start h-screen w-full bg-black text-white flex items-center justify-center p-6">
        <div className="max-w-xl w-full space-y-8">
            <div className="text-center space-y-2">
                <h2 className="text-4xl font-bold">Let's Work Together</h2>
                <p className="text-gray-400">Fill out the form below to discuss your project.</p>
            </div>

            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input placeholder="John" className="bg-stone-900 border-stone-800 text-white placeholder:text-gray-600" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input placeholder="Doe" className="bg-stone-900 border-stone-800 text-white placeholder:text-gray-600" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-stone-900 border-stone-800 text-white placeholder:text-gray-600" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="Tell me about your project..." className="bg-stone-900 border-stone-800 text-white placeholder:text-gray-600 min-h-[120px]" />
                </div>
                <Button className="w-full bg-white text-black hover:bg-gray-200 h-12 text-lg font-medium">
                    Send Message
                </Button>
            </form>

            <div className="flex justify-center gap-6 pt-8 text-gray-400">
                <Instagram className="hover:text-white cursor-pointer transition-colors" />
                <Twitter className="hover:text-white cursor-pointer transition-colors" />
                <Mail className="hover:text-white cursor-pointer transition-colors" />
            </div>
            <p className="text-center text-xs text-stone-600 pt-8">
                © 2025 Lenscraft Photography. All rights reserved.
            </p>
        </div>
      </section>

    </main>
  );
}