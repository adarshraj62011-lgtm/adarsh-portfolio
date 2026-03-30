import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="w-full py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4">
        
        <div data-aos="fade-up" className="text-center mb-16">
          <div className="animate-float">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-sans">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="lg:w-5/12 flex flex-col gap-8" data-aos="fade-right">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-lightText text-lg leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <a href="mailto:adarshraj62011@gmail.com" className="flex items-center gap-6 glass p-5 rounded-2xl border border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <FaEnvelope size={22} />
                </div>
                <div>
                  <h4 className="text-lightText text-sm font-medium mb-1 uppercase tracking-wider">Email</h4>
                  <p className="text-white font-semibold text-lg">adarshraj62011@gmail.com</p>
                </div>
              </a>

              {/* Phone Card */}
              <a href="tel:+916201148908" className="flex items-center gap-6 glass p-5 rounded-2xl border border-white/5 hover:border-secondary/50 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <FaPhoneAlt size={22} />
                </div>
                <div>
                  <h4 className="text-lightText text-sm font-medium mb-1 uppercase tracking-wider">Phone</h4>
                  <p className="text-white font-semibold text-lg">+91 6201148908</p>
                </div>
              </a>

              {/* Location Card */}
              <a href="https://maps.google.com/?q=Parul+University+Vadodara+Gujarat" target="_blank" rel="noreferrer" className="flex items-center gap-6 glass p-5 rounded-2xl border border-white/5 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <FaMapMarkerAlt size={22} />
                </div>
                <div>
                  <h4 className="text-lightText text-sm font-medium mb-1 uppercase tracking-wider">Location</h4>
                  <p className="text-white font-semibold text-lg">Vadodara, Gujarat</p>
                </div>
              </a>
            </div>

            {/* Social Links under Contact Info */}
            <div className="mt-4">
              <p className="text-lightText font-medium mb-4 uppercase tracking-wider text-sm">Follow Me</p>
              <div className="flex gap-4">
                <a href="https://github.com/adarshraj62011-lgtm" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1">
                  <FaGithub size={22} />
                </a>
                <a href="https://www.linkedin.com/in/adarsh-raj-876a63308" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300 hover:-translate-y-1">
                  <FaLinkedin size={22} />
                </a>
                <a href="https://www.instagram.com/adarsh__singh_rajput/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center text-white hover:bg-[#e1306c] hover:border-[#e1306c] transition-all duration-300 hover:-translate-y-1">
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 glass p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden" data-aos="fade-left">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send Me A Message</h3>
            
            <form 
              action="https://formsubmit.co/adarshraj62011@gmail.com" 
              method="POST" 
              className="flex flex-col gap-6 relative z-10"
              onSubmit={() => setLoading(true)}
            >
              <input type="hidden" name="_subject" value="New submission from your Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full relative group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    className="w-full bg-card/60 backdrop-blur-sm border border-white/5 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder-lightText/70 transition-all"
                  />
                </div>
                <div className="w-full relative group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    className="w-full bg-card/60 backdrop-blur-sm border border-white/5 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder-lightText/70 transition-all"
                  />
                </div>
              </div>
              
              <div className="w-full relative group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  className="w-full bg-card/60 backdrop-blur-sm border border-white/5 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder-lightText/70 transition-all"
                />
              </div>
              
              <div className="w-full relative group">
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Your Message..." 
                  required 
                  className="w-full bg-card/60 backdrop-blur-sm border border-white/5 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder-lightText/70 resize-none transition-all"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full mt-2 bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold tracking-wider hover:opacity-90 hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] flex justify-center items-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
