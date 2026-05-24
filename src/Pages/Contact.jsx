import React from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import MapSection from "../components/MapSection";

export default function Contact() {
  return (
    <section className="bg-[#f8f8f8] py-16 md:py-20 px-4 md:px-8 lg:px-16">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-14">
          <p className="text-sm font-semibold tracking-[4px] text-orange-500 uppercase">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1f1f3a] mt-3">
            Get In Touch With Us
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            We are always ready to help you. Contact Army Dog Centre for training, security services, rescue support, and professional dog handling services.
          </p>
        </div>

        {/* CONTACT SECTION */}
        <ContactSection />
          <MapSection  city="khushab"/>
      
            < Footer/>
          </div>
      
  
    </section>
  );
}