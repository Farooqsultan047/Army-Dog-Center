import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          message:
            data.message ||
            "Message sent successfully. Admin will receive email notification.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send message",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Server error. Please try again later.",
      });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-slate-950 text-white px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-20 blur-3xl pointer-events-none" />

      {/* GRID RESPONSIVE FIX */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6 sm:space-y-8">

          <div>
            <p className="text-emerald-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2 sm:mb-3">
              Contact Information
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Get In Touch
              <span className="block text-emerald-400 text-xl sm:text-2xl md:text-3xl mt-2">
                Army Dog Centre
              </span>
            </h2>

            <p className="text-slate-400 mt-3 text-xs sm:text-sm md:text-base">
              Professional training, security and rescue services available 24/7.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">

            <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-emerald-400 text-lg sm:text-xl">📞</div>
              <div>
                <p className="text-slate-400 text-xs sm:text-sm">Phone</p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  0312-4760111
                </p>
                <p className="text-white font-semibold text-sm sm:text-base">
                  0333-5698052
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-emerald-400 text-lg sm:text-xl">✉️</div>
              <div>
                <p className="text-slate-400 text-xs sm:text-sm">Email</p>
                <p className="text-emerald-400 text-sm sm:text-base">
                  snifferdog@armydogcentre.com
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-emerald-400 text-lg sm:text-xl">📍</div>
              <div>
                <p className="text-slate-400 text-xs sm:text-sm">Address</p>
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  Defence Road, Rawalpindi, Pakistan 🇵🇰
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-emerald-400 text-lg sm:text-xl">⏰</div>
              <div>
                <p className="text-slate-400 text-xs sm:text-sm">Working Hours</p>
                <p className="text-white text-sm sm:text-base">
                  Mon - Sun | 9:00 AM - 8:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl">

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400 mb-5 sm:mb-6">
            Send Message
          </h3>

          {status.message && (
            <div className="mb-5 rounded-xl px-4 py-3 text-sm bg-emerald-500/20 border border-emerald-400 text-emerald-300">
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

            <input
              className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-slate-900 border border-slate-700 text-sm sm:text-base"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

            <input
              className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-slate-900 border border-slate-700 text-sm sm:text-base"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

            <input
              className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-slate-900 border border-slate-700 text-sm sm:text-base"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="text-red-400 text-sm">{errors.subject}</p>}

            <textarea
              rows="5"
              className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-slate-900 border border-slate-700 text-sm sm:text-base resize-none"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl py-3 sm:py-4 font-semibold text-base sm:text-lg bg-emerald-500 hover:bg-emerald-600 transition"
            >
              {loading ? "Sending..." : "SEND MESSAGE"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
