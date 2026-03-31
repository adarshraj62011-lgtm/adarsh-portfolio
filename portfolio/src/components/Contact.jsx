import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="w-full py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div data-aos="fade-up" className="text-center mb-16">
          <div className="animate-float flex flex-col items-center">
            <p className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-3">Say Hello</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-text mb-4">
              Get In <span className="italic text-gradient">Touch</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* Left Side: Contact Info */}
          <div className="lg:w-5/12 flex flex-col gap-8" data-aos="fade-right">
            <div>
              <h3 className="font-serif text-3xl font-bold text-text mb-4">Let's Connect</h3>
              <p className="text-lightText text-lg leading-relaxed font-medium">
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a href="mailto:adarshraj62011@gmail.com" className="flex items-center gap-5 bg-card border border-border p-5 hover:border-primary hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h4 className="text-lightText text-xs font-bold mb-1 uppercase tracking-[0.2em]">Email</h4>
                  <p className="text-text font-bold text-base">adarshraj62011@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+916201148908" className="flex items-center gap-5 bg-card border border-border p-5 hover:border-primary hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:border-secondary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <h4 className="text-lightText text-xs font-medium mb-1 uppercase tracking-[0.2em]">Phone</h4>
                  <p className="text-text font-bold text-base">+91 6201148908</p>
                </div>
              </a>

              {/* Location */}
              <a href="https://maps.google.com/?q=Parul+University+Vadodara+Gujarat" target="_blank" rel="noreferrer"
                className="flex items-center gap-5 bg-card border border-border p-5 hover:border-primary hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                <div className="w-12 h-12 bg-background border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h4 className="text-lightText text-xs font-medium mb-1 uppercase tracking-[0.2em]">Location</h4>
                  <p className="text-text font-bold text-base">Vadodara, Gujarat</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-2">
              <p className="text-lightText font-bold mb-4 uppercase tracking-[0.25em] text-sm">Follow Me</p>
              <div className="flex gap-3">
                <a href="https://github.com/adarshraj62011-lgtm" target="_blank" rel="noreferrer"
                  className="w-10 h-10 border border-border flex items-center justify-center text-text hover:bg-text hover:border-text hover:text-background transition-all duration-300">
                  <FaGithub size={18} />
                </a>
                <a href="https://www.linkedin.com/in/adarsh-raj-876a63308" target="_blank" rel="noreferrer"
                  className="w-10 h-10 border border-border flex items-center justify-center text-text hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://www.instagram.com/adarsh__singh_rajput/" target="_blank" rel="noreferrer"
                  className="w-10 h-10 border border-border flex items-center justify-center text-text hover:bg-[#e1306c] hover:border-[#e1306c] hover:text-white transition-all duration-300">
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 bg-card border border-border p-8 sm:p-10 relative overflow-hidden" data-aos="fade-left">
            <div className="absolute top-0 left-0 w-16 h-[3px] bg-primary" />

            <h3 className="font-serif text-2xl font-bold text-text mb-8">Send Me A Message</h3>

            <form
              action="https://formsubmit.co/adarshraj62011@gmail.com"
              method="POST"
              className="flex flex-col gap-5"
              onSubmit={() => setLoading(true)}
            >
              <input type="hidden" name="_subject" value="New submission from your Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="flex flex-col sm:flex-row gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-background border border-border p-4 text-base text-text placeholder-lightText/80 focus:outline-none focus:border-primary transition-colors font-medium"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-background border border-border p-4 text-base text-text placeholder-lightText/80 focus:outline-none focus:border-primary transition-colors font-medium"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full bg-background border border-border p-4 text-base text-text placeholder-lightText/80 focus:outline-none focus:border-primary transition-colors font-medium"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message..."
                required
                className="w-full bg-background border border-border p-4 text-base text-text placeholder-lightText/80 resize-none focus:outline-none focus:border-primary transition-colors font-medium"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 bg-text text-background py-4 font-medium text-sm tracking-[0.15em] uppercase hover:bg-primary transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
