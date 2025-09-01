import React from 'react';

const Services = () => {
    // You can replace these with your actual SVG icons
    const topServices = [
        {
            id: 1,
            name: "STATSIG",
            icon: (
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        {
            id: 2,
            name: "Deno",
            icon: (
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8v8" />
                </svg>
            )
        },
        {
            id: 3,
            name: "Modal",
            icon: (
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="12 7 18 10 12 13 6 10" />
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                </svg>
            )
        },
        {
            id: 4,
            name: "huper",
            icon: (
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            )
        }
    ];

    const bottomServices = [
        {
            id: 5,
            name: "evidence",
            icon: (
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6M9 16h6M9 8h6M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
                </svg>
            )
        },
        {
            id: 6,
            name: "dagster",
            icon: (
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
                </svg>
            )
        },
        {
            id: 7,
            name: "casestatus",
            icon: (
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2zM3 7V5a2 2 0 012-2h14a2 2 0 012 2v2" />
                </svg>
            )
        },
        {
            id: 8,
            name: "DIG SOUTH",
            icon: (
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
            )
        }
    ];

    return (
        <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Top Row - Grid with connected borders */}
                <div className="border-2 border-white rounded-lg mb-12 lg:mb-16 overflow-hidden">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                        {topServices.map((service, index) => (
                            <div
                                key={service.id}
                                className={`flex flex-row items-center justify-center group hover:scale-105 transition-transform duration-300 border-r-2 border-b-2 border-white ${
                                    index % 4 === 0 ? 'first:border-l-2' : ''
                                } ${index < 4 ? 'first:border-t-2' : ''} ${index % 2 === 1 ? 'sm:border-l-0' : ''} ${
                                    index % 4 === 3 ? 'lg:border-r-0' : ''
                                } ${index >= 4 ? 'lg:border-t-0' : ''} py-4 px-4 sm:px-6`}
                            >
                                <div className="flex flex-row items-center space-x-3">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center group-hover:text-gray-200 transition-colors">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-gray-400 text-sm sm:text-base font-medium uppercase tracking-wider group-hover:text-gray-200 transition-colors">
                                        {service.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto">
                        Used by teams at Statsig, Deno,
                        <br />
                        Dagster, Evidence and more.
                    </h2>
                </div>

                {/* Bottom Row - Grid with connected borders */}
                <div className="border-2 border-white rounded-lg overflow-hidden">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                        {bottomServices.map((service, index) => (
                            <div
                                key={service.id}
                                className={`flex flex-row items-center justify-center group hover:scale-105 transition-transform duration-300 border-r-2 border-b-2 border-white ${
                                    index % 4 === 0 ? 'first:border-l-2' : ''
                                } ${index < 4 ? 'first:border-t-2' : ''} ${index % 2 === 1 ? 'sm:border-l-0' : ''} ${
                                    index % 4 === 3 ? 'lg:border-r-0' : ''
                                } ${index >= 4 ? 'lg:border-t-0' : ''} py-4 px-4 sm:px-6`}
                            >
                                <div className="flex flex-row items-center space-x-3">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center group-hover:text-gray-200 transition-colors">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-gray-400 text-sm sm:text-base font-medium uppercase tracking-wider group-hover:text-gray-200 transition-colors">
                                        {service.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;