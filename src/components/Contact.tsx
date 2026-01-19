import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="snap-start min-h-screen w-full bg-black text-white flex items-center justify-center p-6 pt-24 pb-24">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">Let&apos;s Work Together</h2>
          <p className="text-gray-400">Get in touch to discuss your photography needs and get a quote.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-stone-900 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold mb-1">RM 299</p>
            <p className="text-sm text-gray-400">Starting Price</p>
          </div>
          <div className="bg-stone-900 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold mb-1">Flexible</p>
            <p className="text-sm text-gray-400">Payment Plans</p>
          </div>
          <div className="bg-stone-900 p-4 rounded-lg text-center">
            <p className="text-2xl font-bold mb-1">All Areas</p>
            <p className="text-sm text-gray-400">Malaysia Wide</p>
          </div>
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
            <Textarea placeholder="Tell me about your event or photography needs..." className="bg-stone-900 border-stone-800 text-white placeholder:text-gray-600 min-h-[120px]" />
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
  );
}
