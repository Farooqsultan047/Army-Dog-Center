
import React from "react";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";

function  Footer(){
    return(

<footer className="relative mt-20 bg-gradient-to-b from-[#0b1120] via-[#111827] to-[#0b1120] text-white pt-16 pb-10 px-6 rounded-3xl overflow-hidden">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-orange-500/10 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full"></div>

  <div className="relative grid md:grid-cols-4 gap-10">

    {/* Brand */}
    <div>
      <h1 className="text-2xl font-bold text-orange-400 mb-3">
        Army Dog Centre
      </h1>

      <p className="text-gray-300 text-sm leading-7">
        Professional dog training, rescue operations and security services across Pakistan.
      </p>

      {/* Social Icons (FIXED LINKS) */}
      <div className="flex gap-3 mt-5">

        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="p-2 bg-white/10 rounded-full hover:bg-blue-600 hover:scale-110 transition"
        >
          <FaFacebook size={18} />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="p-2 bg-white/10 rounded-full hover:bg-pink-500 hover:scale-110 transition"
        >
          <FaInstagram size={18} />
        </a>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          className="p-2 bg-white/10 rounded-full hover:bg-red-500 hover:scale-110 transition"
        >
          <FaYoutube size={18} />
        </a>

      </div>
    </div>

    {/* Links */}
    <div>
      <h2 className="font-semibold mb-3 text-white">Quick Links</h2>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li className="hover:text-orange-400 cursor-pointer transition">Home</li>
        <li className="hover:text-orange-400 cursor-pointer transition">About</li>
        <li className="hover:text-orange-400 cursor-pointer transition">Services</li>
        <li className="hover:text-orange-400 cursor-pointer transition">Blog</li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h2 className="font-semibold mb-3 text-white">Contact</h2>

      <div className="space-y-2 text-gray-300 text-sm">
        <p className="flex gap-2 items-center hover:text-orange-400 transition">
          <Phone size={14} /> 0333-5698052
        </p>
        <p className="flex gap-2 items-center hover:text-orange-400 transition">
          <Phone size={14} /> 0301-4171118
        </p>
        <p className="flex gap-2 items-center hover:text-orange-400 transition">
          <Phone size={14} /> 012-4760111
        </p>
        <p className="flex gap-2 items-center hover:text-orange-400 transition">
          <Mail size={14} /> info@armydogcentre.com
        </p>
      </div>
    </div>

    {/* Location */}
    <div>
      <h2 className="font-semibold mb-3 text-white">Location</h2>

      <p className="text-gray-300 text-sm flex gap-2">
        <MapPin size={16} className="text-orange-400" />
        Defence Road, Multan, Pakistan
      </p>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-white/10 mt-10 pt-5 text-center text-gray-400 text-sm">
    © 2026 Army Dog Centre. All rights reserved.
  </div>

</footer>
    )
}
export default Footer;
