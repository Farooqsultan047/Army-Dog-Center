import jozef from "../assets/jozef.jpg";
import joz from "../assets/joz.jpg";

function AboutSection() {
  return (
    <div className="bg-gradient-to-b from-[#0b0f1a] via-[#111827] to-[#0b0f1a] text-white py-20 px-4 md:px-12 space-y-24">

      {/* ABOUT SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* TEXT */}
        <div className="flex-1 text-center md:text-left space-y-4 animate-fadeInLeft">

          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-400">
            About Us
          </h2>

          <div className="h-1 w-20 bg-orange-400 mx-auto md:mx-0 rounded-full"></div>

          <p className="text-gray-300 leading-8 text-sm md:text-base">
            The Army Dog center Pakistan is aimed to serve you in case of any emergency,
            robbery, murder, kidnapping, or any of the incidents that happen. Our purpose
            is to help you out with our trained Dogs to find evidence and clues. We ensure
            to support you when someone has been captured, some theft has occurred or some
            murder has happened. You could trust us because your protection is our priority
            and we make sure to stay accessible every minute of every day anyplace and
            whenever you want. Your fulfillment is our need and for this, we have various
            individuals that are working to help you. Our group incorporates an enormous
            number of trained staff who are accessible nonstop for your benefit, help, and
            fulfillment. We operate with a strong commitment to public safety and rapid response
            in critical situations.
          </p>

        </div>

        {/* IMAGE */}
        <div className="flex-1 relative group animate-fadeInRight">

          <div className="absolute -inset-2 bg-orange-400/20 blur-2xl rounded-2xl opacity-60 group-hover:opacity-100 transition"></div>

          <img
            src={jozef}
            alt="about"
            className="relative w-full h-[260px] md:h-[420px] object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:scale-105 transition duration-500"
          />
        </div>

      </div>

      {/* MISSION SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">

        {/* TEXT */}
        <div className="flex-1 text-center md:text-left space-y-4 animate-fadeInRight">

          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-400">
            Our Mission
          </h2>

          <div className="h-1 w-20 bg-orange-400 mx-auto md:mx-0 rounded-full"></div>

          <p className="text-gray-300 leading-8 text-sm md:text-base">
            Our mission is to support advanced investigation, accurate detection, and effective
            crime control operations. We are committed to maintaining peace and stability in society
            by assisting in the collection of reliable evidence and ensuring the swift identification
            and apprehension of offenders. We work with dedication and discipline to strengthen public
            safety through professional canine support units. Our continuous efforts aim to build trust,
            security, and confidence within the community. We are committed to responding swiftly to critical
            situations with precision and reliability.
          </p>

        </div>

        {/* IMAGE */}
        <div className="flex-1 relative group animate-fadeInLeft">

          <div className="absolute -inset-2 bg-orange-400/20 blur-2xl rounded-2xl opacity-60 group-hover:opacity-100 transition"></div>

          <img
            src={joz}
            alt="mission"
            className="relative w-full h-[260px] md:h-[420px] object-cover rounded-2xl shadow-2xl border border-white/10 group-hover:scale-105 transition duration-500"
          />
        </div>

      </div>

    </div>
  );
}

export default AboutSection;