import React from "react";
import ContactSection from "../components/ContactSection";

import pex from "../assets/pex.jpg";
import feher from "../assets/feher.jpg";
import pexe from "../assets/pexe.jpg";
import joz from "../assets/joz.jpg";
import Footer from "../components/Footer";
import MapSection from "../components/MapSection";
const blogPosts = [
  {
    id: 1,
    title: "Professional Sniffer Dog Training",
    date: "April 18, 2026",
    category: "Training",
    image: pex,
    description:
      "Learn how professional sniffer dogs are trained for explosive detection, rescue missions, and high-security operations.",
  },
  {
    id: 2,
    title: "Security Patrol Dogs in Modern Defence",
    date: "April 15, 2026",
    category: "Security",
    image: feher,
    description:
      "Discover how patrol dogs improve security systems in defence areas, airports, and sensitive locations.",
  },
  {
    id: 3,
    title: "Rescue Operations with Army Dogs",
    date: "April 10, 2026",
    category: "Rescue",
    image: pexe,
    description:
      "Army dogs play a major role in rescue operations during disasters, missing person searches, and emergency situations.",
  },
  {
    id: 4,
    title: "Advanced K9 Protection Units",
    date: "April 08, 2026",
    category: "Defence",
    image: joz,
    description:
      "Highly trained K9 units provide protection, patrol support, and critical defence services in high-risk zones.",
  },
];

export default function Blog() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-16 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-emerald-400 uppercase tracking-[5px] text-xs md:text-sm font-semibold">
            Insights & Updates
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
            Latest Blog & News
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-sm sm:text-base leading-7">
            Explore expert insights about dog training, defence operations,
            rescue missions, and advanced security systems used in real-world operations.
          </p>
        </div>

        {/* FEATURED POST */}
        <div className="grid lg:grid-cols-2 bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl mb-14">

          <div className="overflow-hidden">
            <img 
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-[250px] sm:h-[350px] lg:h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">

            <span className="text-emerald-400 uppercase tracking-[4px] text-xs font-semibold">
              Featured Article
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 leading-tight">
              {blogPosts[0].title}
            </h2>

            <p className="text-gray-400 leading-7 mt-6 text-sm sm:text-base">
              {blogPosts[0].description}
            </p>

            <button className="mt-8 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-semibold w-fit transition hover:scale-105">
              Read More
            </button>

          </div>
        </div>

        {/* GRID POSTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 sm:h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5 sm:p-6">

                <div className="flex justify-between items-center text-xs text-gray-400 mb-3 gap-2 flex-wrap">
                  <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full">
                    {post.category}
                  </span>

                  <span>{post.date}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-4">
                  {post.description}
                </p>

                <button className="text-emerald-400 font-semibold hover:underline">
                  Read Article →
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* CONTACT */}
      <div className="mt-20">
       
        <ContactSection />
      </div>
      <MapSection city="Okara"/>
      
   <Footer />
    </section>
  );
}