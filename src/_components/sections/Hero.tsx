import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/_components/ui/button';
import { FaGithub, FaStarOfLife } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen bg-gradient-to-r from-gray-900 via-[#394a4f] to-[#4e4650] text-white pt-16 relative overflow-hidden flex flex-col scroll-smooth"
      aria-labelledby="hero-heading"
    >
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 w-full text-center">
          {/* Beta Badge - exact match to image with added accessibility */}
          <div className="flex items-center justify-center mb-12">
            <div 
              className="flex items-center space-x-2 border border-gray-600 rounded-lg px-4 py-2 bg-gray-800/50"
              role="status"
              aria-label="Scout beta status"
            >
              <FaStarOfLife className="h-4 w-4 text-white fill-current" aria-hidden="true" />
              <span className="text-white text-sm">scout</span>
              <span className="text-gray-400 text-sm">is currently in beta</span>
              <IoIosArrowForward className="h-4 w-4 text-gray-400" aria-hidden="true" />
            </div>
          </div>

          {/* Main Heading - exact typography with improved accessibility */}
          <h1 
            id="hero-heading"
            className="text-5xl text-[#d0d0d0] sm:text-6xl lg:text-7xl mb-8 leading-tight"
          >
            AI for teams building
            <br />
            <span className="text-[#d0d0d0]">what's next.</span>
          </h1>

          {/* Subtitle - exact text with improved line height */}
          <p className="text-xl text-gray-400 mb-12 leading-relaxed lg:leading-loose">
            Scout gives you the tools to build custom agents and
            <br />
            workflows in record time.
          </p>

          {/* CTA Button - exact style with added accessibility */}
          <div className="mb-16">
            <Button 
              className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-3 rounded-2xl text-base transition-colors duration-200"
              aria-label="Get started with Scout"
            >
              Get Started <IoIosArrowForward aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;