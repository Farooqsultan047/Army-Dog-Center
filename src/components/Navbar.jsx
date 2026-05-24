import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import React, { useState } from "react";
import { services } from "../data/ServicesData";
function Navbar() {
  const [open, setOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
  return (
     <nav className="bg-[#1f1f3a] text-white px-4 md:px-10 py-3 shadow-md sticky top-0 z-50 font-extrabold h-20 md:h-24 flex items-center">
      <div className="flex items-center justify-between max-w-6xl mx-auto w-full gap-2">

        {/* Logo */}
        <div className="flex items-center gap-3 ml-0 md:ml-6 ">
          <img src={logo} alt="logo" className="w-16 h-16 object-cover rounded-full" />

          <div className="leading-tight">
            <h1 className="text-sm font-bold text-orange-400">
              ARMY DOG
            </h1>
            <p className="text-xs text-white">
              CENTRE
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
       <div className="hidden md:flex gap-8 items-center flex-1 justify-end mr-6">

          <Link to="/" className="hover:text-green-400 transition">Home</Link>
          <Link to="/about" className="hover:text-green-400 transition">About Us</Link>
   <div className="relative">

  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className="hover:text-green-400 transition flex items-center gap-1"
  >
    Our Services ▼
  </button>

  {/* DROPDOWN */}
  {servicesOpen && (
    <div className="absolute top-10 left-0 bg-[#d89b16] text-white w-[250px] rounded-md shadow-lg p-3 z-50">

      {Object.keys(services).map((province, index) => (
        <Link
          key={index}
          to={`/service/${province}`}
          className="block py-2 hover:text-black"
          onClick={() => setServicesOpen(false)}
        >
          {province.toUpperCase()}
        </Link>
      ))}

    </div>
  )}

</div>
  
          <Link to="/blog" className="hover:text-green-400 transition">Blog</Link>
            <Link to="/contact" className="hover:text-green-400 transition">Contact Us</Link>

        </div>

        {/* Call Button */}
        <div className="hidden md:flex">
          <button className="bg-green-500 px-5 py-2 rounded-full font-semibold hover:bg-orange-500 transition duration-300 mr-4">
            Call Now: 0301-4171118
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
       <div className="fixed top-0 right-0 rounded-l-2xl w-64 bg-[#1f1f3a] flex flex-col items-start gap-4 p-6 shadow-lg z-50 md:hidden overflow-y-auto">
            <Link 
  to="/" 
  className="hover:text-green-400 transition"
  onClick={() => setOpen(false)}
>
  Home
</Link>
         <Link 
  to="/about" 
  className="hover:text-green-400 transition"
  onClick={() => setOpen(false)}
> 
  About Us
</Link>
<div>
  
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className="text-white"
  >
    Our Services ▼
  </button>

  {servicesOpen && (
    <div className="flex flex-col mt-2 gap-2">

      <Link to="/service/punjab" onClick={() => setOpen(false)}>
        Punjab
      </Link>

      <Link to="/service/sindh" onClick={() => setOpen(false)}>
        Sindh
      </Link>

      <Link to="/service/kpk" onClick={() => setOpen(false)}>
        KPK
      </Link>

      <Link to="/service/balochistan" onClick={() => setOpen(false)}>
        Balochistan
      </Link>

    </div>
  )}
</div>
        <Link 
  to="/blog" 
  className="hover:text-green-400 transition"
  onClick={() => setOpen(false)}
>
  Blog
</Link>
       <Link 
  to="/contact" 
  className="hover:text-green-400 transition"
  onClick={() => setOpen(false)}
>
  Contact Us
</Link>

          <button className="bg-green-500 px-4 py-2 rounded-full font-semibold">
            Call Now: 03124760111
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;