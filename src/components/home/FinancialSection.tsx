import React, { useEffect, useRef } from 'react';
import { TrendingUp, PieChart, BarChart, DollarSign } from 'lucide-react';

const FinancialSection = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!chartRef.current) return;
      
      const rect = chartRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        chartRef.current.classList.add('animate-fade-in');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="financials" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#ff00c8] uppercase tracking-wider text-sm font-medium">Financial Impact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">
            Growth Projections
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Explore the financial impact of our programs and projected growth for participating startups.
          </p>
        </div>

        {/* Holographic Chart Section */}
        <div 
          ref={chartRef}
          className="relative bg-[#0a0a1f]/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-10 overflow-hidden opacity-0 transition-opacity duration-1000"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-[#00f0ff]" />
                <span>Investment Growth</span>
              </h3>
              
              <div className="space-y-6">
                <StatisticCard 
                  title="Total Funding Raised" 
                  value="$124.5M" 
                  change="+37% YoY"
                  positive={true}
                />
                <StatisticCard 
                  title="Average Seed Round" 
                  value="$2.8M" 
                  change="+22% YoY"
                  positive={true}
                />
                <StatisticCard 
                  title="ROI for Investors" 
                  value="3.2x" 
                  change="+0.4x from 2024"
                  positive={true}
                />
              </div>
            </div>
            
            <div className="relative min-h-[300px] flex items-center justify-center">
              {/* Holographic Chart Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-3/4 relative">
                  {/* Chart Base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00f0ff]/10 to-transparent rounded-md"></div>
                  
                  {/* Chart Lines */}
                  <div className="absolute bottom-0 left-0 w-full h-1/5 bg-[#00f0ff]/20 rounded-md"></div>
                  <div className="absolute bottom-0 left-[20%] w-[10%] h-2/5 bg-[#00f0ff]/20 rounded-md"></div>
                  <div className="absolute bottom-0 left-[40%] w-[10%] h-3/5 bg-[#00f0ff]/20 rounded-md"></div>
                  <div className="absolute bottom-0 left-[60%] w-[10%] h-4/5 bg-[#00f0ff]/20 rounded-md"></div>
                  <div className="absolute bottom-0 left-[80%] w-[10%] h-full bg-[#00f0ff]/20 rounded-md"></div>
                  
                  {/* Animated Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00f0ff]/30 rounded-full blur-[50px] animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#ff00c8]/20 rounded-full blur-[70px] animate-pulse"></div>
                </div>
              </div>
              
              <div className="relative z-10 text-center">
                <span className="text-6xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#ff00c8] text-transparent bg-clip-text">87%</span>
                <p className="text-white/70 mt-2">5-Year<br />Success Rate</p>
              </div>
            </div>
          </div>
          
          {/* Additional Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <MetricCard 
              icon={<DollarSign className="w-5 h-5" />} 
              title="Revenue Growth" 
              value="142%" 
              color="from-[#00f0ff] to-[#3b82f6]"
            />
            <MetricCard 
              icon={<PieChart className="w-5 h-5" />} 
              title="Market Expansion" 
              value="3.5x" 
              color="from-[#ff00c8] to-[#9c27b0]"
            />
            <MetricCard 
              icon={<BarChart className="w-5 h-5" />} 
              title="Job Creation" 
              value="12,400+" 
              color="from-[#9c27b0] to-[#6d28d9]"
            />
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff00c8]/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00f0ff]/10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const StatisticCard = ({ title, value, change, positive = true }: { title: string, value: string, change: string, positive?: boolean }) => (
  <div className="flex justify-between items-center pb-4 border-b border-white/10">
    <div>
      <p className="text-white/70 mb-1">{title}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
    <div className={`px-3 py-1 rounded-full text-sm ${positive ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
      {change}
    </div>
  </div>
);

const MetricCard = ({ icon, title, value, color }: { icon: React.ReactNode, title: string, value: string, color: string }) => (
  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-5 hover:bg-white/10 transition-all duration-300 border border-white/5 group">
    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <h4 className="text-lg font-medium mb-2">{title}</h4>
    <p className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 text-transparent bg-clip-text">{value}</p>
  </div>
);

export default FinancialSection;