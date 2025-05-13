import React from 'react';

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon, text, mobile }) => {
  return (
    <a
      href={href}
      className={`group flex items-center px-4 py-2 rounded-full text-white/80 hover:text-white transition-all duration-300 ${
        mobile ? 'w-full' : 'relative overflow-hidden'
      }`}
    >
      <span className="flex items-center justify-center">
        {icon}
        <span className={`ml-2 ${!mobile && 'group-hover:text-[#00f0ff]'} transition-colors`}>{text}</span>
      </span>
      {!mobile && (
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00f0ff] to-transparent group-hover:w-full transition-all duration-300"></span>
      )}
    </a>
  );
};

export default NavLink;