import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_if0iwzm",
        "template_dmvn117",
        e.target,
        "zAYDEBmwVwVQJJTGy"
      )
      .then(() => {
        setStatus("SUCCESS");
        setLoading(false);
        e.target.reset();
        setTimeout(() => {
        setStatus("");
        }, 5000);
      })
      .catch(() => {
        setStatus("ERROR");
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="300"
      className="min-h-screen flex items-center justify-center p-6 mt-10 relative"
    >
      <article className="flex flex-col md:flex-row max-w-5xl w-full relative bg-[#0a101e] rounded-2xl overflow-hidden shadow-2xl">
        
        {/* LEFT SIDE */}
        <aside className="w-full md:w-1/2 relative flex items-center justify-center p-10">
          <div className="absolute z-0 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-br from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] shadow-[0_0_60px_rgba(182,0,182,0.6)]"></div>
          
          <img
            src="programmer.svg"
            alt="Programmer"
            className="w-full max-w-[380px] relative z-10 drop-shadow-2xl"
          />
        </aside>

        {/* RIGHT SIDE */}
        <section className="p-8 sm:p-12 w-full md:w-1/2 bg-[#050816] flex flex-col justify-center">
          <header className="mb-8">
            <h2 className="text-4xl font-bold text-white">Contact Me</h2>
          </header>

          <form className="space-y-5" onSubmit={sendEmail}>
            
            {/* Name */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Name</label>
              <input 
                type="text" 
                name="user_name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 text-white bg-[#111928] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Email</label>
              <input 
                type="email" 
                name="user_email"
                required
                placeholder="Your email"
                className="w-full px-4 py-3 text-white bg-[#111928] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 font-medium mb-2">Message</label>
              <textarea 
                name="message"
                rows="4"
                required
                placeholder="Your message"
                className="w-full px-4 py-3 text-white bg-[#111928] border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full mt-4 text-white border-2 border-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status Messages */}
            {status === "SUCCESS" && (
              <p className="text-green-400 text-center mt-2">
                Message sent successfully!
              </p>
            )}
            {status === "ERROR" && (
              <p className="text-red-400 text-center mt-2">
                Failed to send message. Try again.
              </p>
            )}

          </form>
        </section>

      </article>
    </section>
  );
}