import { useParams, Link } from "react-router-dom";
import { services } from "../data/ServicesData";
import { useState } from "react";
import {
  Search,
  MapPin,
  Phone,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

function Services() {
  const { province, district } = useParams();
  const [search, setSearch] = useState("");

  const provinceData = services?.[province] || {};

  // Breadcrumb
  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/service/punjab" },
    province && {
      name: province.toUpperCase(),
      path: `/service/${province}`,
    },
    district && {
      name: district.toUpperCase(),
      path: `/service/${province}/${district}`,
    },
  ].filter(Boolean);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] px-4 sm:px-6 md:px-10 lg:px-16 py-10">

      {/* Top Header */}
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6">
          {breadcrumb.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Link
                to={item.path}
                className="hover:text-orange-500 transition font-medium"
              >
                {item.name}
              </Link>

              {i < breadcrumb.length - 1 && (
                <ChevronRight size={16} />
              )}
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#111827] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl mb-10 relative overflow-hidden">

          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

          <div className="relative z-10">
            <p className="text-orange-400 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3">
              Army Dog Security Network
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {district
                ? district.toUpperCase()
                : province?.toUpperCase() || "ALL SERVICES"}
            </h1>

            <p className="text-gray-300 max-w-3xl leading-7 text-sm sm:text-base">
              Explore our professional army dog services including security,
              rescue operations, explosive detection, patrol support, and
              specialized K9 handling units across multiple districts.
            </p>
          </div>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-5 mb-10">

          <div className="flex items-center gap-3">
            <div className="bg-orange-100 p-3 rounded-xl">
              <Search className="text-orange-500" size={20} />
            </div>

            <input
              type="text"
              placeholder="Search city..."
              className="w-full outline-none text-sm sm:text-base"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">

          {Object.keys(provinceData).length > 0 ? (
            Object.keys(provinceData).map((dist, i) => {
              if (district && dist !== district) return null;

              const cityList = provinceData?.[dist] || [];

              return (
                <div
                  key={i}
                  className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition duration-300"
                >

                  {/* District Header */}
                  {!district && (
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-5">
                      <Link
                        to={`/service/${province}/${dist}`}
                        className="text-white font-bold text-xl block"
                      >
                        {dist.toUpperCase()}
                      </Link>
                    </div>
                  )}

                  {/* City Data */}
                  <div className="p-6 space-y-5">

                    {cityList
                      .filter((item) =>
                        item.city
                          .toLowerCase()
                          .includes(search.toLowerCase())
                      )
                      .map((item, idx) => (
                        <div
                          key={idx}
                          className="border border-gray-100 rounded-2xl p-5 hover:border-orange-200 hover:shadow-md transition"
                        >

                          <div className="flex items-start justify-between gap-4 flex-wrap">

                            <div className="space-y-3">

                              <div className="flex items-center gap-2">
                                <MapPin
                                  size={18}
                                  className="text-orange-500"
                                />
                                <p className="font-bold text-[#1f1f3a] text-lg">
                                  {item.city}
                                </p>
                              </div>

                              <div className="flex items-center gap-2">
                                <Phone
                                  size={16}
                                  className="text-green-600"
                                />
                                <p className="text-sm text-gray-700">
                                  {item.phone}
                                </p>
                              </div>

                              <p className="text-sm text-gray-500 leading-6">
                                {item.info}
                              </p>
                            </div>

                            <div className="bg-orange-50 p-3 rounded-xl">
                              <ShieldCheck
                                className="text-orange-500"
                                size={22}
                              />
                            </div>

                          </div>
                        </div>
                      ))}

                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
              <p className="text-red-500 font-semibold text-lg">
                No Data Found
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;