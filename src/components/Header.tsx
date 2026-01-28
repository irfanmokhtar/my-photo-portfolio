import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Camera, Home, Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-between items-center bg-black/15 backdrop-blur-md rounded-b-3xl text-white">
            <div className="flex items-center gap-2 font-bold text-lg md:text-xl tracking-tighter">
                <Camera className="w-5 h-5 md:w-6 md:h-6" />
                <span>746 Photography.</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
                <Link href="#hero" className="hover:opacity-70 transition-opacity">
                    <Home className="w-5 h-5" />
                    <span className="sr-only">Home</span>
                </Link>
                <Link href="#gallery" className="hover:opacity-70 transition-opacity">Galeri</Link>
                <Link href="#about" className="hover:opacity-70 transition-opacity">Tentang</Link>
                <Link href="#contact" className="hover:opacity-70 transition-opacity">Hubungi Kami</Link>
            </nav>

            <div className="flex items-center gap-4">
                <Link href="#contact" className="hidden md:block">
                    <Button variant="outline" className="text-black bg-white hover:bg-gray-200 border-none rounded-full px-6">
                        Tempah Sekarang
                    </Button>
                </Link>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/20">
                            <Menu className="w-6 h-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-stone-950 border-stone-800 text-white">
                        <SheetHeader>
                            <SheetTitle className="text-white text-left flex items-center gap-2">
                                <Camera className="w-5 h-5" />
                                746 Photography.
                            </SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col gap-6 mt-8 text-lg font-medium px-6">
                            <Link href="#hero" className="hover:opacity-70 transition-opacity flex items-center gap-2">
                                <Home className="w-5 h-5" /> Home
                            </Link>
                            <Link href="#gallery" className="hover:opacity-70 transition-opacity">Galeri</Link>
                            <Link href="#about" className="hover:opacity-70 transition-opacity">Tentang</Link>
                            <Link href="#contact" className="hover:opacity-70 transition-opacity">Hubungi Kami</Link>
                            <Link href="#contact">
                                <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-full mt-4">
                                    Tempah Sekarang
                                </Button>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
