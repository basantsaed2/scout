import React from 'react';
import { FaStarOfLife } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-4 md:px-16">
            <div className="container mx-auto">
                {/* Top section with logo, links, and status */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-12 mb-8">
                    {/* Logo and status */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="flex items-center gap-2 font-semibold">
                                <span className="text-gray-400"><FaStarOfLife className='text-white' /></span> Scout
                            </span>
                        </div>
                        <div className="flex items-center bg-gradient-to-r from-[#0d4329] to-transparent rounded-full p-3 space-x-2 text-white">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <p className="text-sm uppercase font-bold">All Systems Operational</p>
                        </div>
                    </div>

                    {/* Links section */}
                    <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 md:gap-16">
                        <div>
                            <h4 className="text-gray-400 uppercase font-semibold text-sm mb-4">
                                Links
                            </h4>
                            <ul className="space-y-2 text-white">
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors duration-300">Features</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors duration-300">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors duration-300">Docs</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors duration-300">Blog</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-gray-400 uppercase font-semibold text-sm mb-4">
                                Solutions
                            </h4>
                            <ul className="space-y-2 text-white">
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors duration-300">Slack Bot</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors duration-300">Discord Bot</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors duration-300">Command</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors duration-300">Onsite Chat</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-gray-400 uppercase font-semibold text-sm mb-4">
                                Legal
                            </h4>
                            <ul className="space-y-2 text-white">
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors duration-300">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-gray-400 transition-colors duration-300">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom section with copyright and social links */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                    <p className="mb-4 md:mb-0">
                        Copyright © 2024 Scout. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        {/* Replace with actual social media icons if you have them */}
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_1675)">
                                    <path d="M5.29333 15.2443C5.29333 16.6319 4.15978 17.7655 2.77215 17.7655C1.38453 17.7655 0.250977 16.6319 0.250977 15.2443C0.250977 13.8567 1.38453 12.7231 2.77215 12.7231H5.29333V15.2443Z" fill="white" fillOpacity="0.4" />
                                    <path d="M6.56348 15.2443C6.56348 13.8567 7.69703 12.7231 9.08466 12.7231C10.4722 12.7231 11.6058 13.8567 11.6058 15.2443V21.557C11.6058 22.9446 10.4722 24.0782 9.08466 24.0782C7.69703 24.0782 6.56348 22.9446 6.56348 21.557V15.2443Z" fill="white" fillOpacity="0.4" />
                                    <path d="M9.08466 5.12047C7.69703 5.12047 6.56348 3.98692 6.56348 2.59929C6.56348 1.21167 7.69703 0.078125 9.08466 0.078125C10.4723 0.078125 11.6059 1.21167 11.6059 2.59929V5.12047H9.08466Z" fill="white" fillOpacity="0.4" />
                                    <path d="M9.08486 6.39062C10.4725 6.39062 11.606 7.52417 11.606 8.91179C11.606 10.2994 10.4725 11.4329 9.08486 11.4329H2.77215C1.38453 11.4329 0.250977 10.2994 0.250977 8.91179C0.250977 7.52417 1.38453 6.39062 2.77215 6.39062H9.08486Z" fill="white" fillOpacity="0.4" />
                                    <path d="M19.2085 8.91179C19.2085 7.52417 20.3421 6.39062 21.7297 6.39062C23.1173 6.39062 24.2509 7.52417 24.2509 8.91179C24.2509 10.2994 23.1173 11.4329 21.7297 11.4329H19.2085V8.91179Z" fill="white" fillOpacity="0.4" />
                                    <path d="M17.9383 8.91201C17.9383 10.2996 16.8048 11.4331 15.4171 11.4331C14.0295 11.4331 12.896 10.2996 12.896 8.91201V2.59929C12.896 1.21167 14.0295 0.078125 15.4171 0.078125C16.8048 0.078125 17.9383 1.21167 17.9383 2.59929V8.91201Z" fill="white" fillOpacity="0.4" />
                                    <path d="M15.4171 19.0356C16.8048 19.0356 17.9383 20.1692 17.9383 21.5568C17.9383 22.9444 16.8048 24.078 15.4171 24.078C14.0295 24.078 12.896 22.9444 12.896 21.5568V19.0356H15.4171Z" fill="white" fillOpacity="0.4" />
                                    <path d="M15.4171 17.7655C14.0295 17.7655 12.896 16.6319 12.896 15.2443C12.896 13.8567 14.0295 12.7231 15.4171 12.7231H21.7298C23.1175 12.7231 24.251 13.8567 24.251 15.2443C24.251 16.6319 23.1175 17.7655 21.7298 17.7655H15.4171Z" fill="white" fillOpacity="0.4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1675">
                                        <rect width="24" height="24" fill="white" transform="translate(0.250977 0.078125)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_1685)">
                                    <path d="M19.6426 1.07812H23.3052L15.3052 10.2829L24.751 22.7648H17.3293L11.5462 15.1986L4.89556 22.7648H1.2329L9.81122 12.9335L0.750977 1.07812H8.36544L13.6185 8.01789L19.6426 1.07812ZM18.3414 20.548H20.3655L7.257 3.15041H5.04014L18.3414 20.548Z" fill="white" fillOpacity="0.4" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1685">
                                        <rect width="24" height="24" fill="white" transform="translate(0.750977 0.078125)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="#" className="hover:text-white transition-colors duration-300">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_1688)">
                                    <mask id="mask0_1_1688" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                                        <path d="M24.751 0.078125H0.750977V24.0781H24.751V0.078125Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_1_1688)">
                                        <path d="M21.1736 20.2994H17.6222V14.7925C17.6222 13.4793 17.5985 11.7888 15.7751 11.7888C13.9254 11.7888 13.6424 13.2196 13.6424 14.6969V20.299H10.0909V8.97458H13.5003V10.5222H13.548C13.8892 9.94455 14.3823 9.46935 14.9747 9.14721C15.567 8.82508 16.2366 8.66807 16.9119 8.69289C20.5115 8.69289 21.1751 11.0372 21.1751 14.087L21.1736 20.2994ZM6.08369 7.4266C5.67607 7.42667 5.27758 7.30705 4.93862 7.08288C4.59965 6.85871 4.33546 6.54005 4.1794 6.1672C4.02335 5.79435 3.98245 5.38406 4.0619 4.98819C4.14135 4.59233 4.33758 4.22868 4.62575 3.94324C4.91393 3.6578 5.28112 3.46338 5.68089 3.38457C6.08066 3.30576 6.49505 3.3461 6.87167 3.50048C7.24828 3.65488 7.57021 3.91637 7.79673 4.25191C8.02325 4.58745 8.1442 4.98197 8.14427 5.38557C8.14432 5.65356 8.09105 5.91892 7.98752 6.16652C7.884 6.41412 7.73224 6.63912 7.5409 6.82865C7.34956 7.01817 7.12237 7.16852 6.87235 7.27111C6.62232 7.37371 6.35434 7.42655 6.08369 7.4266ZM7.85941 20.2994H4.30427V8.97458H7.85941V20.2994ZM22.9442 0.0797419H2.51968C2.0561 0.0745619 1.60938 0.251827 1.27773 0.572585C0.946086 0.893342 0.756634 1.33134 0.750977 1.79035V22.0976C0.756441 22.5568 0.945781 22.9951 1.27742 23.3162C1.60905 23.6373 2.05587 23.8149 2.51968 23.81H22.9442C23.4089 23.8158 23.857 23.6387 24.1899 23.3176C24.5229 22.9965 24.7135 22.5577 24.7199 22.0976V1.7889C24.7133 1.32897 24.5225 0.890468 24.1896 0.569719C23.8566 0.248969 23.4087 0.0722103 22.9442 0.0782761" fill="white" fillOpacity="0.4" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1688">
                                        <rect width="24" height="24" fill="white" transform="translate(0.750977 0.078125)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;