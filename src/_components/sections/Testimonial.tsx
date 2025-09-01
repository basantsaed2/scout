'use client';
import React, { useState, useEffect } from 'react';

// Enhanced SVG components with more visual interest
const ActiveIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const SpiralIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 10c-1-4 3-7 6-2 3 5 9 2 6-3-3-5-1-8 4-7 5 1 4 6-1 7-5 1-3 4 0 4 3 0 5-3 5-6" />
  </svg>
);

const BoxIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10l2 2h12l2-2V7l-2-2H6L4 7zM12 4v16" />
    <rect x="7" y="9" width="10" height="6" strokeWidth="1.5" fill="none" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    <path d="M15 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" fill="currentColor" />
  </svg>
);

const Testimonial = () => {
  const icons = [<ActiveIcon />, <SpiralIcon />, <BoxIcon />, <ChatIcon />];
  const [activeIcon, setActiveIcon] = useState(0);

  // Auto-rotate active icon
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Left Column: 4 Icons with enhanced design */}
          <div className="order-2 md:order-1 flex flex-row md:flex-col gap-4 md:gap-6 justify-center">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-3 md:p-4 rounded-xl transition-all duration-500 transform ${
                  index === activeIcon
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 scale-110 shadow-lg'
                    : 'bg-gray-800/70 hover:bg-gray-700/70 hover:scale-105'
                }`}
                onMouseEnter={() => setActiveIcon(index)}
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Center Column: Enhanced Testimonial Content */}
          <div className="order-1 md:order-2 flex-1 flex flex-col items-center text-center relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-purple-600/10 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-blue-600/10 blur-xl"></div>
            
            <div className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/30 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-700/30 shadow-2xl">
              <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-b-full"></div>
              
              <p className="text-xl md:text-2xl lg:text-3xl font-medium max-w-3xl leading-relaxed mb-8 relative">
                <span className="absolute -left-6 -top-4 text-5xl text-purple-500/30 font-serif">"</span>
                Scout is an indispensable tool for our Engineering, DS and Sales teams to engage with our customers. We rely on Scout daily, making it an integral part of our operations.
                <span className="absolute -right-6 -bottom-6 text-5xl text-blue-500/30 font-serif">"</span>
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="Vijaye Raji" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg">Vijaye Raji</p>
                  <p className="text-gray-400 text-sm md:text-base">CEO of Statsig</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Icons with enhanced design */}
          <div className="order-3 flex flex-row md:flex-col gap-4 md:gap-6 justify-center">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`flex items-center justify-center p-3 md:p-4 rounded-xl transition-all duration-500 transform ${
                  index === activeIcon
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-110 shadow-lg'
                    : 'bg-gray-800/70 hover:bg-gray-700/70 hover:scale-105'
                }`}
                onMouseEnter={() => setActiveIcon(index)}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;