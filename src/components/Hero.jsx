import heropages from "../assets/heropages.jpg";

function Hero() {
  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center px-4 md:px-0"
      style={{ backgroundImage: `url(${heropages})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-white text-center max-w-3xl mt-2 ">

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Army Dog Center  03014171118
        </h1>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 text-gray-200 px-2">
          The Army Dog center Pakistan helps you in case of any emergency,
          robbery, murder, kidnapping, or any incidents that happen. Our
          purpose is to help you out with trained dogs to find evidence and
          clues. You can trust us because your protection is our priority and
          we are available 24/7 anywhere, anytime.
        </p>

        <button className="bg-green-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 transition duration-300 shadow-lg">
          Click Here
        </button>

      </div>
    </div>
  );
}

export default Hero;