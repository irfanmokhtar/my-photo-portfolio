import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Twitter } from "lucide-react";

export default function Contact() {
  return (
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
  );
}
