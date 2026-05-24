
import statee from "../assets/statee.jpg"; // apni image ka correct naam yahan likho

export default function StateSection() {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-[#0b1120]">
      
      {/* Better Premium Background */}
      <div className="absolute inset-0">
        <img
          src={statee}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Smooth Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120]/95 via-[#111827]/90 to-[#1e1b4b]/90"></div>

        {/* Soft Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      {/* Elegant Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-16 md:h-24"
        >
          <path
            fill="#ffffff"
            d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left Image Section */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-orange-400/20 blur-2xl rounded-3xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

          <img
            src={statee}
            alt="Army Dog"
            className="relative rounded-3xl shadow-2xl w-full h-[280px] sm:h-[350px] md:h-[450px] object-cover border border-white/10 group-hover:scale-[1.02] transition duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="text-white">
          <p className="text-orange-400 font-semibold uppercase tracking-[3px] text-sm md:text-base mb-3">
            Trusted Security Partner
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
            Why Choose{" "}
            <span className="text-orange-400">
              Army Dogs?
            </span>
          </h2>

          <p className="text-gray-300 leading-7 md:leading-8 text-sm sm:text-base md:text-lg mb-10">
            Army dogs are highly trained for criminal tracking, explosive
            detection, rescue missions, and advanced security patrols.
            Their intelligence, discipline, and loyalty make them a vital
            force for national protection and public safety.
          </p>

          {/* Premium Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-5 text-center hover:scale-105 transition duration-300 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
                249+
              </h3>
              <p className="text-xs md:text-sm mt-2">
                Projects Done
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-5 text-center hover:scale-105 transition duration-300 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
                15+
              </h3>
              <p className="text-xs md:text-sm mt-2">
                Handling Projects
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-5 text-center hover:scale-105 transition duration-300 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
                7+
              </h3>
              <p className="text-xs md:text-sm mt-2">
                Annual Awards
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-5 text-center hover:scale-105 transition duration-300 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-400">
                100%
              </h3>
              <p className="text-xs md:text-sm mt-2">
                Client Satisfaction
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}