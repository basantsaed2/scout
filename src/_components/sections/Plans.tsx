import React from 'react';
import { Check } from 'lucide-react';

const PricingPlans = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#171b1a] via-[#000] to-[#1c1c2a] text-white px-8 py-16">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl mb-4">A plan for every need.</h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Whether you are just starting or require massive scale, we have a solution.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Hobby Plan */}
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl p-6">
                        <div className="flex items-center mb-6">
                            <div className="rounded-full mr-3">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_1525)">
                                        <path d="M20.1716 10.6356C20.2632 5.38966 16.0848 1.06279 10.8389 0.971218C5.59298 0.87965 1.2661 5.05807 1.17453 10.304C1.08297 15.5499 5.26138 19.8768 10.5073 19.9683C15.7532 20.0599 20.0801 15.8815 20.1716 10.6356Z" fill="url(#paint0_linear_1_1525)" />
                                        <path d="M20.1716 10.6356C20.2632 5.38966 16.0848 1.06279 10.8389 0.971218C5.59298 0.87965 1.2661 5.05807 1.17453 10.304C1.08297 15.5499 5.26138 19.8768 10.5073 19.9683C15.7532 20.0599 20.0801 15.8815 20.1716 10.6356Z" stroke="url(#paint1_radial_1_1525)" />
                                        <path d="M11.0621 5.05113C10.914 5.13192 10.784 5.21304 10.673 5.28852C10.562 5.21304 10.432 5.13192 10.2839 5.05113C9.752 4.761 8.97601 4.46973 8.00635 4.46973C6.99414 4.46973 5.983 4.87545 5.22832 5.68044C4.47045 6.48883 4.00635 7.66035 4.00635 9.1364C4.00635 11.3663 5.5882 13.2046 7.06093 14.4212C7.81525 15.0444 8.58426 15.5407 9.20082 15.8833C9.50896 16.0544 9.78551 16.1908 10.009 16.2866C10.1201 16.3342 10.2256 16.3751 10.32 16.4053C10.3919 16.4283 10.5291 16.4698 10.673 16.4698C10.8169 16.4698 10.9541 16.4283 11.026 16.4053C11.1204 16.3751 11.2259 16.3342 11.337 16.2866C11.5605 16.1908 11.8371 16.0544 12.1452 15.8833C12.7618 15.5407 13.5308 15.0444 14.2851 14.4212C15.7578 13.2046 17.3397 11.3663 17.3397 9.1364C17.3397 7.66035 16.8756 6.48883 16.1177 5.68044C15.363 4.87545 14.3519 4.46973 13.3397 4.46973C12.37 4.46973 11.594 4.761 11.0621 5.05113Z" fill="white" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_1_1525" x1="10.8565" y1="0.462799" x2="10.5075" y2="20.4598" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#10834B" />
                                            <stop offset="1" stop-color="#09F785" />
                                        </linearGradient>
                                        <radialGradient id="paint1_radial_1_1525" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.0074 0.447976) rotate(88.5684) scale(20.018 21.9333)">
                                            <stop stop-color="white" stop-opacity="0.48" />
                                            <stop offset="1" stop-color="white" stop-opacity="0.04" />
                                        </radialGradient>
                                        <clipPath id="clip0_1_1525">
                                            <rect width="21" height="21" fill="white" transform="translate(0.5 0.296875)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">HOBBY</span>
                        </div>
                        <div className="mb-6">
                            <div className="text-4xl font-bold mb-2">$0</div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Great for personal use or a first step to explore the Scout platform.
                            </p>
                        </div>
                        <button className="w-full bg-transparent border border-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-8">
                            Sign Up
                        </button>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">100 Interactions (GPT-3.5 Only)</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Deploy 1 App</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Connect 1 Collection</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">10GB of Storage</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Community Support (Discord)</span>
                            </div>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border border-purple-500 rounded-xl p-6 relative shadow-lg shadow-purple-500/20">
                        <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2">
                            <div className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide">
                                MOST POPULAR
                            </div>
                        </div>
                        <div className="flex items-center mb-6 pt-6">
                            <div className="rounded-full mr-3">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_1568)">
                                        <path d="M20.5017 10.6356C20.5933 5.38966 16.4149 1.06279 11.169 0.971218C5.92306 0.87965 1.59618 5.05807 1.50461 10.304C1.41304 15.5499 5.59146 19.8768 10.8374 19.9683C16.0833 20.0599 20.4102 15.8815 20.5017 10.6356Z" fill="url(#paint0_linear_1_1568)" />
                                        <path d="M20.5017 10.6356C20.5933 5.38966 16.4149 1.06279 11.169 0.971218C5.92306 0.87965 1.59618 5.05807 1.50461 10.304C1.41304 15.5499 5.59146 19.8768 10.8374 19.9683C16.0833 20.0599 20.4102 15.8815 20.5017 10.6356Z" stroke="url(#paint1_radial_1_1568)" />
                                        <mask id="mask0_1_1568" maskUnits="userSpaceOnUse" x="3" y="2" width="17" height="17">
                                            <path d="M19.0029 2.46973H3.00293V18.4697H19.0029V2.46973Z" fill="white" />
                                        </mask>
                                        <g mask="url(#mask0_1_1568)">
                                            <path d="M8.33609 13.1367C8.33609 13.5049 8.63457 13.8034 9.00276 13.8034C9.37095 13.8034 9.66943 13.5049 9.66943 13.1367C9.66943 11.5978 10.01 10.6418 10.5922 10.0595C11.1745 9.47726 12.1305 9.13672 13.6695 9.13672C14.0376 9.13672 14.3361 8.83825 14.3361 8.47006C14.3361 8.10187 14.0376 7.80339 13.6695 7.80339C12.1305 7.80339 11.1745 7.46285 10.5922 6.8806C10.01 6.29834 9.66942 5.34238 9.66942 3.80339C9.66942 3.4352 9.37095 3.13672 9.00276 3.13672C8.63457 3.13672 8.33609 3.4352 8.33609 3.80339C8.33609 5.34238 7.99555 6.29834 7.4133 6.8806C6.83105 7.46285 5.87508 7.80339 4.33609 7.80339C3.9679 7.80339 3.66943 8.10187 3.66943 8.47006C3.66943 8.83825 3.9679 9.13672 4.33609 9.13672C5.87508 9.13672 6.83105 9.47726 7.4133 10.0595C7.99555 10.6418 8.33609 11.5978 8.33609 13.1367Z" fill="white" />
                                            <path d="M14.0029 17.1366C14.0029 17.5048 14.3014 17.8033 14.6696 17.8033C15.0377 17.8033 15.3362 17.5048 15.3362 17.1366C15.3362 16.1764 15.5494 15.6371 15.8597 15.3268C16.17 15.0165 16.7093 14.8033 17.6696 14.8033C18.0377 14.8033 18.3362 14.5048 18.3362 14.1366C18.3362 13.7685 18.0377 13.47 17.6696 13.47C16.7093 13.47 16.17 13.2568 15.8597 12.9465C15.5494 12.6362 15.3362 12.0969 15.3362 11.1366C15.3362 10.7685 15.0377 10.47 14.6696 10.47C14.3014 10.47 14.0029 10.7685 14.0029 11.1366C14.0029 12.0969 13.7897 12.6362 13.4794 12.9465C13.1691 13.2568 12.6298 13.47 11.6696 13.47C11.3014 13.47 11.0029 13.7685 11.0029 14.1366C11.0029 14.5048 11.3014 14.8033 11.6696 14.8033C12.6298 14.8033 13.1691 15.0165 13.4794 15.3268C13.7897 15.6371 14.0029 16.1764 14.0029 17.1366Z" fill="white" />
                                        </g>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_1_1568" x1="11.1866" y1="0.462799" x2="10.8376" y2="20.4598" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#C495FF" />
                                            <stop offset="1" stop-color="#BF68CF" />
                                        </linearGradient>
                                        <radialGradient id="paint1_radial_1_1568" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.3375 0.447976) rotate(88.5684) scale(20.018 21.9333)">
                                            <stop stop-color="white" stop-opacity="0.48" />
                                            <stop offset="1" stop-color="white" stop-opacity="0.04" />
                                        </radialGradient>
                                        <clipPath id="clip0_1_1568">
                                            <rect width="21" height="21" fill="white" transform="translate(0.830078 0.296875)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">PRO</span>
                        </div>
                        <div className="mb-6">
                            <div className="text-4xl font-bold mb-2">$50</div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Perfect for building and scaling models with limited context.
                            </p>
                        </div>
                        <button className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors mb-8">
                            Sign Up
                        </button>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Unlimited Interactions</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">$0.09 per Interaction</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Deploy 10 Apps</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Connect 10 Collections</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">1TB of Storage</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Community & Email Support</span>
                            </div>
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-xl p-6">
                        <div className="flex items-center mb-6">
                            <div className="rounded-full mr-3">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_1615)">
                                        <path d="M19.8318 10.6356C19.9234 5.38966 15.7449 1.06279 10.499 0.971218C5.25314 0.87965 0.926258 5.05807 0.83469 10.304C0.743123 15.5499 4.92154 19.8768 10.1674 19.9683C15.4134 20.0599 19.7402 15.8815 19.8318 10.6356Z" fill="url(#paint0_linear_1_1615)" />
                                        <path d="M19.8318 10.6356C19.9234 5.38966 15.7449 1.06279 10.499 0.971218C5.25314 0.87965 0.926258 5.05807 0.83469 10.304C0.743123 15.5499 4.92154 19.8768 10.1674 19.9683C15.4134 20.0599 19.7402 15.8815 19.8318 10.6356Z" stroke="url(#paint1_radial_1_1615)" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.33301 6.46973C4.33301 5.36516 5.22844 4.46973 6.33301 4.46973H14.3331C15.4376 4.46973 16.3331 5.36516 16.3331 6.46973V14.4697C16.3331 15.5743 15.4376 16.4697 14.3331 16.4697H6.33301C5.22844 16.4697 4.33301 15.5743 4.33301 14.4697V6.46973ZM5.66634 6.46973C5.66634 6.10154 5.96482 5.80306 6.33301 5.80306H6.99968V7.1364C6.99968 7.50459 6.7012 7.80306 6.33301 7.80306C5.96482 7.80306 5.66634 7.50459 5.66634 7.1364V6.46973ZM8.99968 7.80306C8.63149 7.80306 8.33301 7.50459 8.33301 7.1364V5.80306H9.66635V7.1364C9.66635 7.50459 9.36787 7.80306 8.99968 7.80306ZM11.6664 7.80306C11.2982 7.80306 10.9997 7.50459 10.9997 7.1364V5.80306H12.3331V7.1364C12.3331 7.50459 12.0346 7.80306 11.6664 7.80306ZM14.3331 7.80306C13.9649 7.80306 13.6664 7.50459 13.6664 7.1364V5.80306H14.3331C14.7012 5.80306 14.9997 6.10154 14.9997 6.46973V7.1364C14.9997 7.50459 14.7012 7.80306 14.3331 7.80306ZM8.99968 13.1364C8.99968 12.7682 9.29816 12.4698 9.66635 12.4698H10.9997C11.3679 12.4698 11.6664 12.7682 11.6664 13.1364V15.1364H12.9997V13.1364C12.9997 12.0318 12.1043 11.1364 10.9997 11.1364H9.66635C8.56178 11.1364 7.66635 12.0318 7.66635 13.1364V15.1364H8.99968V13.1364Z" fill="white" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_1_1615" x1="10.5167" y1="0.462799" x2="10.1677" y2="20.4598" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#5E6AD2" />
                                            <stop offset="1" stop-color="#5790FF" />
                                        </linearGradient>
                                        <radialGradient id="paint1_radial_1_1615" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(9.66756 0.447976) rotate(88.5684) scale(20.018 21.9333)">
                                            <stop stop-color="white" stop-opacity="0.48" />
                                            <stop offset="1" stop-color="white" stop-opacity="0.04" />
                                        </radialGradient>
                                        <clipPath id="clip0_1_1615">
                                            <rect width="21" height="21" fill="white" transform="translate(0.160156 0.296875)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">ENTERPRISE</span>
                        </div>
                        <div className="mb-6">
                            <div className="text-4xl font-bold mb-2">Custom</div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                For large scale models with large and ever-changing context.
                            </p>
                        </div>
                        <button className="w-full bg-transparent border border-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-8">
                            Request Access
                        </button>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Unlimited Interactions</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Custom Interaction Pricing</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Unlimited Apps</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Unlimited Collections</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Unlimited Storage</span>
                            </div>
                            <div className="flex items-center">
                                <Check className="w-4 h-4 text-gray-500 mr-3 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Dedicated Support</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Card (Dedicated Support) */}
               <div className=" text-white py-20 px-4 md:px-16">
      <div className="container mx-auto">
        <div className="bg-gray-900 rounded-3xl p-8 border border-gray-700 md:flex items-center justify-between">
          {/* Left section: Text and list */}
          <div className="md:w-3/5 md:pr-12 mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Dedicated Support</h3>
            <p className="text-gray-400 max-w-lg mb-6">
              We are here to help you get started with a dedicated support engineer who can assist with scoping your first models and getting them deployed.
            </p>
            <p className="text-gray-400 font-bold mb-4 uppercase">
              What's included
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400">
              <div className="flex items-start">
                <Check />
                <span>Shared Slack Channel</span>
              </div>
              <div className="flex items-start">
                <Check />
                <span>Dedicated Support Engineer</span>
              </div>
              <div className="flex items-start">
                <Check />
                <span>Prompt Engineering Guidance</span>
              </div>
              <div className="flex items-start">
                <Check />
                <span>Context Sourcing Guidance</span>
              </div>
            </div>
          </div>

          {/* Right section: Pricing and button */}
          <div className="md:w-2/5 flex flex-col items-center p-8 rounded-2xl border border-gray-700 relative">
            <div className="absolute top-0 right-0 p-2">
              <span className="text-purple-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.5 8.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5v-3zM10 7.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-4z" clipRule="evenodd" fillRule="evenodd" />
                </svg>
              </span>
            </div>
            <p className="text-gray-400 uppercase text-sm mb-2">Add on</p>
            <h4 className="text-5xl font-bold">$750</h4>
            <p className="text-gray-400 mb-6">monthly</p>
            <button className="bg-gray-700 text-gray-400 font-semibold py-3 px-6 rounded-full w-full hover:bg-gray-600 transition-colors">
              Request Access
            </button>
            <p className="text-gray-500 text-xs mt-4">No long term contract obligation.</p>
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default PricingPlans;