import React from "react";
import MapSection from "../components/MapSection"
import {
  Shield,
  Target,
  Award,
  Users,
  Star,
  Zap,
  CheckCircle,
} from "lucide-react";

import pex from "../assets/pex.jpg";
import Footer from "../components/Footer";

export default function About() {
  return (
    <section className="relative bg-gradient-to-b from-[#0f1020] via-[#1f1f3a] to-[#f8f8f8] py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/20 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/20 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <p className="text-orange-400 tracking-[4px] sm:tracking-[6px] uppercase text-xs sm:text-sm font-semibold">
            Who We Are
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
            Elite Army Dog Training & Security Force
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto mt-5 sm:mt-6 leading-7 sm:leading-8 text-sm sm:text-base">
            We deliver world-class trained dogs for security, detection, rescue,
            and tactical operations. Our mission is safety, discipline, and precision.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-16">
          {[
            { label: "Years Experience", value: "10+", icon: Star },
            { label: "Trained Dogs", value: "500+", icon: Shield },
            { label: "Operations", value: "1200+", icon: Zap },
            { label: "Experts Team", value: "50+", icon: Users },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg p-4 sm:p-6 rounded-2xl text-center border border-white/10 hover:scale-105 transition"
            >
              <item.icon
                className="mx-auto text-orange-400"
                size={26}
              />

              <h3 className="text-xl sm:text-2xl font-bold text-white mt-3">
                {item.value}
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Image */}
          <div className="relative">
            <img
              src={pex}
              alt="Army Dog"
              className="rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover"
            />

            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/90 backdrop-blur-lg p-4 sm:p-5 rounded-2xl shadow-xl">
              <p className="text-2xl sm:text-3xl font-bold text-[#1f1f3a]">
                100%
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Mission Success Rate
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Why Choose Army Dog Centre?
            </h3>

            <p className="text-gray-300 leading-7 sm:leading-8 mb-8 text-sm sm:text-base">
              We combine modern training techniques with military-grade discipline.
              Our dogs are trained for real-world missions including security, patrol,
              and explosive detection.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">

              <div className="bg-white/10 p-5 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                <Shield className="text-orange-400" />
                <h4 className="font-bold mt-3 text-white">
                  Security Training
                </h4>
                <p className="text-gray-300 text-sm">
                  Military grade protection training.
                </p>
              </div>

              <div className="bg-white/10 p-5 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                <Target className="text-orange-400" />
                <h4 className="font-bold mt-3 text-white">
                  Precision Detection
                </h4>
                <p className="text-gray-300 text-sm">
                  Explosives & narcotics detection.
                </p>
              </div>

              <div className="bg-white/10 p-5 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                <Award className="text-orange-400" />
                <h4 className="font-bold mt-3 text-white">
                  Certified Experts
                </h4>
                <p className="text-gray-300 text-sm">
                  Professional certified trainers.
                </p>
              </div>

              <div className="bg-white/10 p-5 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition">
                <Users className="text-orange-400" />
                <h4 className="font-bold mt-3 text-white">
                  Team Support
                </h4>
                <p className="text-gray-300 text-sm">
                  24/7 operational support team.
                </p>
              </div>

            </div>

            {/* Checklist */}
            <div className="mt-8 space-y-3 text-gray-300 text-sm sm:text-base">
              <p className="flex items-center gap-2">
                <CheckCircle size={18} className="text-orange-400" />
                Real Field Training
              </p>

              <p className="flex items-center gap-2">
                <CheckCircle size={18} className="text-orange-400" />
                Tactical Operations Ready
              </p>

              <p className="flex items-center gap-2">
                <CheckCircle size={18} className="text-orange-400" />
                Highly Disciplined Dogs
              </p>
            </div>

            <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition">
              Explore More
            </button>
          </div>
        </div>
      </div>
      <MapSection city="Mainwali" />
       <Footer />
    </section>
  );
}