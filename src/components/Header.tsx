import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function Header() {
  return (
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
  );
}
