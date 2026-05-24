export default function ServicesSection() {
  const services = [
    "Murder Investigation",
    "Ammunition Detection",
    "Theft Control",
    "Kidnapping Recovery",
    "Drug Detection",
    "Tracking Operations",
    "Explosive Detection",
    "Bomb Disposal Unit",
    "Attack Response",
    "Search & Rescue",
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#737d97] via-[#4d6291] to-[#1b3370] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-extrabold">
            Our <span className="text-orange-400">Services</span>
          </h2>

          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-7">
            Army Dog Center provides highly trained K9 units for investigation,
            detection, rescue and security operations across Pakistan.
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE TEXT */}
          <div className="space-y-6">

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Trusted K9 Security Solutions
            </h3>

            <p className="text-gray-300 leading-7 text-sm md:text-base">
              We have been serving for over a decade with highly trained dogs and
              professional handlers. Our mission is to ensure safety, investigation
              support, and emergency response services across all provinces of Pakistan.
            </p>

            {/* Highlight Box */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-orange-400 font-semibold mb-2">
                Why Choose Us?
              </p>
              <p className="text-gray-300 text-sm leading-6">
                Experienced handlers, advanced training system, and rapid response units
                make us a top-tier dog service center.
              </p>
            </div>

          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {services.map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-[1.03] transition duration-300 shadow-lg"
              >

                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-400 font-bold group-hover:bg-orange-500 group-hover:text-white transition">
                  ✓
                </div>

                {/* TEXT */}
                <span className="text-gray-200 font-medium group-hover:text-white transition">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}