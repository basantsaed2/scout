import React from 'react';
import { 
  Sparkles, 
  Plus, 
  ArrowRight,
} from 'lucide-react';

const CTA = () => {
  return (
    <div className="bg-[#000] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Layout - Stack on mobile, side-by-side on desktop */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Left Side - Feature Cards */}
            <div className="flex-1 lg:w-2/3 space-y-6">
              
              {/* Top Row - Stack on mobile */}
              <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-4">
                
                {/* AI where you work - Full width on mobile, large on desktop */}
                <div className="lg:col-span-6 bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 min-h-[200px] relative">
                  <div className="absolute top-4 left-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <div className="w-8 h-8 border-2 border-green-400 rounded-lg flex items-center justify-center">
                      <Plus className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-4 right-4">
                    <h3 className="text-white text-lg font-semibold mb-2">AI where you work</h3>
                    <p className="text-gray-400 text-sm">Deploy Scout Apps to Slack or Discord</p>
                  </div>
                </div>

                {/* Two smaller cards - Stack on mobile/tablet, side by side on desktop */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {/* Customize your AI */}
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 min-h-[200px] relative">
                    <div className="absolute top-4 right-4">
                      <Plus className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="absolute bottom-6 left-4 right-4">
                      <h4 className="text-white font-medium mb-2">Customize your AI</h4>
                      <p className="text-gray-400 text-xs">Build custom workflows and apps in minutes</p>
                    </div>
                  </div>

                  {/* Access to the right data */}
                  <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 min-h-[200px] relative">
                    <div className="absolute bottom-6 left-4 right-4">
                      <h4 className="text-white font-medium mb-2">Access to the right data</h4>
                      <p className="text-gray-400 text-xs">Control what your AI knows and what it forgets</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Row - Stack on small screens, 3 columns on larger */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Accelerate your product */}
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 min-h-[160px] relative">
                  <div className="absolute bottom-6 left-4 right-4">
                    <h4 className="text-white font-medium mb-2">Accelerate your product</h4>
                    <p className="text-gray-400 text-xs">AI-power platform and features for your customers</p>
                  </div>
                </div>

                {/* Automate your work */}
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 min-h-[160px] relative">
                  <div className="absolute bottom-6 left-4 right-4">
                    <h4 className="text-white font-medium mb-2">Automate your work</h4>
                    <p className="text-gray-400 text-xs">Connect your existing tools and eliminate the busy work</p>
                  </div>
                </div>

                {/* An Inbox with superpowers */}
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 min-h-[160px] relative">
                  <div className="absolute bottom-6 left-4 right-4">
                    <h4 className="text-white font-medium mb-2">An Inbox with superpowers</h4>
                    <p className="text-gray-400 text-xs">Curate impressions and retrieve results for each interaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Dashboard - Full width on mobile */}
            <div className="w-full lg:w-1/3 space-y-4">
              
              {/* Main Dashboard Card */}
              <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6">
                
                {/* Header with Name and Value - Responsive grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Name</div>
                    <div className="text-white text-sm">Scout Studio</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Value</div>
                    <div className="text-white text-sm">-</div>
                  </div>
                </div>

                {/* ELI5 Account Section */}
                <div className="bg-gray-700/30 border border-gray-600/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-white text-sm font-medium">ELI5 Account</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-xs mb-3">
                    This is a sample data source which we can replicate.
                  </p>
                  
                  {/* Stats Grid - Responsive layout */}
                  <div className="mb-3">
                    {/* First row - 4 columns on larger screens, 2 on mobile */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                      <div className="text-center">
                        <div className="text-gray-400 text-xs">Text</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400 text-xs">LLM</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400 text-xs">Web</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400 text-xs">HTTP</div>
                      </div>
                    </div>
                    {/* Second row - Centered */}
                    <div className="text-center">
                      <div className="text-gray-400 text-xs">Slack</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons - Stack on very small screens */}
                  <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-2 mt-4">
                    <button className="flex-1 bg-gray-600/50 hover:bg-gray-600/70 text-white py-2 px-3 rounded text-xs transition-all">
                      Delete
                    </button>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-xs transition-all">
                      Save
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;