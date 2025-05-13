import React from 'react';
import { GanttChartSquare, Twitter, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GanttChartSquare className="h-7 w-7 text-[#00f0ff]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#ff00c8] text-transparent bg-clip-text">
                FutureFlow
              </span>
            </div>
            <p className="text-white/70 mb-6">
              Reshaping the future of startup acceleration with innovative programs and sustainable growth strategies.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
              <SocialIcon icon={<Github size={18} />} />
              <SocialIcon icon={<Mail size={18} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink text="About Us" />
              <FooterLink text="Programs" />
              <FooterLink text="Financial Reports" />
              <FooterLink text="Become a Sponsor" />
              <FooterLink text="Join Our Network" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Stay updated with our latest news and programs.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
              />
              <button className="bg-gradient-to-r from-[#00f0ff] to-[#00f0ff]/70 text-[#0a0a1f] font-medium px-4 rounded-r-lg flex items-center hover:shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2025 FutureFlow. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-white/50 text-sm hover:text-white/80 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-white/50 text-sm hover:text-white/80 transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a 
    href="#" 
    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-[#00f0ff] transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
  >
    {icon}
  </a>
);

const FooterLink = ({ text }: { text: string }) => (
  <li>
    <a href="#" className="text-white/70 hover:text-[#00f0ff] transition-colors flex items-center gap-1 group">
      <span>{text}</span>
      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
    </a>
  </li>
);

export default Footer;