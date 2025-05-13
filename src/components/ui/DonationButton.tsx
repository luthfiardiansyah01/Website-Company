import React, { useState } from 'react';
import { CircleDollarSign, Heart } from 'lucide-react';

const DonationButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  
  const amounts = [10, 15, 20, 25];

  return (
    <div>
      {/* Donation Amount Selection */}
      {donationAmount === null ? (
        <div className="space-y-4">
          <p className="text-white/90 text-sm">Choose an amount to donate:</p>
          <div className="grid grid-cols-2 gap-3">
            {amounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setDonationAmount(amount)}
                className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff00c8]/50"
              >
                <span className="font-medium">Rp{amount}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setDonationAmount(0)}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ff00c8]/50 text-left"
          >
            <span className="font-medium">Custom Amount</span>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {donationAmount === 0 && (
            <div>
              <label className="text-white/90 text-sm block mb-2">Enter donation amount:</label>
              <div className="relative">
                <span className="absolute left-1 top-1/2 -translate-y-1/2 text-white/70">Rp</span>
                <input 
                  type="number" 
                  className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#ff00c8]/50 focus:outline-none focus:ring-2 focus:ring-[#ff00c8]/30 text-white"
                  placeholder="Amount"
                  min="1"
                />
              </div>
            </div>
          )}
          
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button className={`w-full px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
              isHovered 
                ? 'bg-gradient-to-r from-[#ff00c8] to-[#9c27b0] text-white shadow-[0_0_15px_rgba(255,0,200,0.5)]' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white'
            }`}>
              <Heart className={`w-5 h-5 ${isHovered ? 'animate-pulse' : ''}`} />
              <span>{donationAmount === 0 ? 'Donate Now' : `Donate $${donationAmount}`}</span>
            </button>
            
            {/* Floating Hearts Animation (Shown on Hover) */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <FloatingHeart left="20%" delay={0} />
                <FloatingHeart left="50%" delay={0.5} />
                <FloatingHeart left="80%" delay={1} />
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setDonationAmount(null)}
            className="text-sm text-white/60 hover:text-white/80 transition-colors w-full text-center"
          >
            Change amount
          </button>
        </div>
      )}
    </div>
  );
};

const FloatingHeart = ({ left, delay }: { left: string, delay: number }) => (
  <div 
    className="absolute bottom-0 animate-float-up opacity-0"
    style={{ 
      left,
      animationDelay: `${delay}s`,
      animationDuration: '3s'
    }}
  >
    <Heart className="w-4 h-4 text-[#ff00c8]" />
  </div>
);

export default DonationButton;