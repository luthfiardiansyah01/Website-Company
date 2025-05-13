import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, GanttChartSquare, Users, BarChart3, HeartHandshake } from 'lucide-react';
import NavLink from '../ui/NavLink';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0a0a1f]/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://media-hosting.imagekit.io/ba98f068dc654cf3/Startup%20MoedaTrace.png?Expires=1841749016&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0LWTtm0IRkxcKs6H09-fO0TAbfA5-7JALzeoqZx7D5XkBw1MtOgnRyeiyZ3fxqLlXbcVB~Ny~tWVn9fT2qm8jQvWV9xiEazleZYtI6Zar266Zj0XhnJECFSzhlkif5Gh7UdAVCXAeWsyelxemTFyrVX3PHfpARRX6V3X6R1kDmdhcA0H1bHW9mlNpH3GBoKTXDB1wPhrXOzeTcEafMoZkHMwcrVHnt2gQD8p1UiiBj2Su~6as5wv5bpuyD5dmWtUaED8dgM1rm6sU3K2WferiqiAFsSMyfMUO0AEiaqHKPiNAeHEyOUNn7wYa3~nFTGHPzsCtNHAAxPEhzVu8sAZOg__.png" alt="Flowers in Chania">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#ff00c8] text-transparent bg-clip-text">
              MoedaTrace
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink href="#" icon={<Users size={18} />} text="About" />
            <NavLink href="#programs" icon={<GanttChartSquare size={18} />} text="Programs" />
            <NavLink href="#financials" icon={<BarChart3 size={18} />} text="Financials" />
            <NavLink href="#sponsors" icon={<HeartHandshake size={18} />} text="Sponsors" />
            <button className="ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff00c8] to-[#9c27b0] text-white font-medium flex items-center space-x-2 group hover:shadow-[0_0_15px_rgba(255,0,200,0.5)] transition-all duration-300">
              <span>Connect</span>
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav 
        className={`md:hidden absolute w-full bg-[#0a0a1f]/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[300px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          <NavLink href="#" icon={<Users size={18} />} text="About" mobile />
          <NavLink href="#programs" icon={<GanttChartSquare size={18} />} text="Programs" mobile />
          <NavLink href="#financials" icon={<BarChart3 size={18} />} text="Financials" mobile />
          <NavLink href="#sponsors" icon={<HeartHandshake size={18} />} text="Sponsors" mobile />
          <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff00c8] to-[#9c27b0] text-white font-medium flex items-center justify-center space-x-2 group hover:shadow-[0_0_15px_rgba(255,0,200,0.5)] transition-all duration-300 w-full">
            <span>Connect</span>
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;