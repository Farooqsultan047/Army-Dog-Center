import React from "react";
function MapSection({city}){
    return (
        <section>
 <div className="mt-14 md:mt-16">

          <h3 className="text-xl md:text-3xl font-bold text-center text-[#1f1f3a] mb-6 md:mb-8">
            Our Location
          </h3>

          <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border">
            <iframe
              title="Google Map"
              src= {`https://www.google.com/maps?q=${city},Pakistan&output=embed`}
              width="100%"
              height="450"
              className="w-full"
              loading="lazy"
            />
            </div>
            </div>
            </section>
    )
} 
export default MapSection ;