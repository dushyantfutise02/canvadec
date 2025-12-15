import React from 'react';
import logo from "../assets/images/futise2.jpeg";
import workingImage from "../assets/lep2.png";

const Innovation = () => {
    return (
        <div className="px-20 py-10 bg-white min-h-screen flex flex-col relative">
            {/* Blue diagonal decoration in top left */}
            <div className="absolute top-0 left-0 w-64 h-32 bg-gradient-to-br from-blue-500 to-blue-400 transform -skew-y-12 -translate-y-8"></div>

            {/* Logo in top right */}
            <div className="flex justify-end mb-8 relative z-10">
                <img src={logo} alt="Futise Logo" className="size-16" />
            </div>

            {/* Main Content */}
            <div className="flex justify-between items-center gap-16 relative z-10">
                {/* Left Side - Text Content */}
                <div className="flex-1">
                    <div>
                        <h1 className="text-5xl font-bold leading-tight">
                            We Innovate<br />
                            We Empower<br />
                            We Transform
                        </h1>
                    </div>
                    <div className="h-1 w-32 bg-blue-600 mb-6"></div>
                    <p className="text-lg leading-relaxed text-gray-800 max-w-xl">
                        Through technology-driven learning and strategic partnerships, we accelerate
                        innovation and empower the next generation of leaders.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="flex-1 flex justify-end">
                    <img
                        src={workingImage}
                        alt="Woman working at desk"
                        className="w-full max-w-lg rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="mt-auto text-right">
                <p className="text-sm text-gray-600">www.futise.com</p>
            </div>
        </div>
    );
};

export default Innovation;
