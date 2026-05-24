import image from "../assets/image.png";
import defne from "../assets/dafne.jpg";
import pex from "../assets/pex.jpg";
import valle from "../assets/valle.jpg";

export default function CityService() {

  const renderCities = (cities) =>
    cities.map((city, i) => (
      <li
        key={i}
        className="hover:text-orange-400 transition duration-300 hover:translate-x-1"
      >
        {city}
      </li>
    ));

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#610969] via-[#111827] to-[#4b546d] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="text-center mb-14 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Cities We <span className="text-orange-400">Serve</span>
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto mt-4 leading-7 text-sm md:text-base">
            We serve all provinces of Pakistan with 24/7 availability. Our Army Dog Centers
            are active in multiple cities to ensure fast emergency response and support.
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">

          {[image, defne, valle, pex].map((img, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl shadow-xl"
            >
              <img
                src={img}
                alt="dog"
                className="h-40 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
            </div>
          ))}

        </div>

        {/* GRID SECTIONS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* PUNJAB */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-[1.02] transition duration-300">

            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3">
              Punjab
            </h2>

            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Army Dog Centers are available in major cities across Punjab for emergency response.
            </p>

            <ul className="grid grid-cols-2 gap-2 text-gray-200 list-disc pl-5">
              {renderCities([
               "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Sialkot",
  "Gujranwala",
  "Sargodha",
  "Bahawalpur",
  "Sheikhupura",
  "Gujrat",
  "Dera Ghazi Khan",
  "Rahim Yar Khan",
  "Sahiwal",
  "Okara",
  "Kasur",
  "Jhelum",
  "Mandi Bahauddin",
  "Hafizabad",
  "Vehari",
  "Khanewal",
  "Pakpattan",
  "Chiniot",
  "Toba Tek Singh",
  "Bhakkar",
  "Layyah",
  "Narowal",
  "Attock",
  "Chakwal",
  "Bahawalnagar",
  "Rajanpur",
  "Talagang"
              ])}
            </ul>

          </div>

          {/* SINDH */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-[1.02] transition duration-300">

            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3">
              Sindh
            </h2>
            

            <ul className="grid grid-cols-2 gap-2 text-gray-200 list-disc pl-5">
              {renderCities([
  "Karachi",
  "Hyderabad",
  "Sukkur",
  "Larkana",
  "Mirpur Khas",
  "Nawabshah",
  "Jacobabad",
  "Shikarpur",
  "Thatta",
  "Badin",
  "Khairpur",
  "Dadu",
  "Tando Adam",
  "Tando Allahyar",
  "Umerkot",
  "Ghotki",
  "Sanghar",
  "Jamshoro",
  "Matiari",
  "Kashmore",
  "Tharparkar",
  "Naushahro Feroze",
   "Shahdadkot",
  "Sehwan Sharif",
  "Kotri",
  "Mehar",
  "Rohri",
  "Mirpur Bathoro",
  "Sujawal",
  "Hala",
  "Digri",
  "Tando Muhammad Khan",
  "Kandhkot",
  "Dokri",
  "Warah",
  "Jati"
              ])}
            </ul>

          </div>

          {/* KPK */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-[1.02] transition duration-300">

            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3">
              KPK
            </h2>

            <ul className="grid grid-cols-2 gap-2 text-gray-200 list-disc pl-5">
              {renderCities([
               "Peshawar",
  "Abbottabad",
  "Mardan",
  "Swat",
  "Mingora",
  "Kohat",
  "Dera Ismail Khan",
  "Bannu",
  "Charsadda",
  "Nowshera",
  "Swabi",
  "Mansehra",
  "Haripur",
  "Malakand",
  "Upper Dir",
  "Lower Dir",
  "Tank",
  "Lakki Marwat",
  "Battagram",
  "Shangla",
  "Hangu",
  "Karak",
  "Buner",
   "Peshawar",
  "Dera Ghazi Khan",
  "Upper Kohistan",
  "Lower Kohistan",
  "Kolai-Palas",
  "Torghar",
  "Orakzai",
  "Kurram",
  "North Waziristan",
  "South Waziristan",
  "Shangla Top",
  "Alpuri",
  "Jamrud"
              ])}
            </ul>

          </div>

          {/* BALOCHISTAN */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-[1.02] transition duration-300">

            <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-3">
              Balochistan
            </h2>

            <ul className="grid grid-cols-2 gap-2 text-gray-200 list-disc pl-5">
              {renderCities([
               "Quetta",
  "Gwadar",
  "Turbat",
  "Khuzdar",
  "Sibi",
  "Loralai",
  "Zhob",
  "Chaman",
  "Dera Murad Jamali",
  "Mastung",
  "Lasbela",
  "Uthal",
  "Panjgur",
  "Nushki",
  "Kalat",
  "Kharan",
  "Washuk",
  "Barkhan",
  "Jaffarabad",
  "Kohlu",
  "Awaran",
  "Pasni",
  "Hub",
  "Dalbandin",
  "Ormara",
  "Bela",
  "Dhadar",
  "Sui",
  "Sorab",
  "Harnai",
  "Ziarat",
  "Musakhel",
  "Killa Abdullah",
  "Killa Saifullah",
  "Gadani",
  "Surab"
              ])}
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}