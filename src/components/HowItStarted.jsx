import React from 'react';
import logo from "../assets/images/futise2.jpeg";

const HowItStarted = () => {
    return (
        <div className="px-20 py-10 bg-white min-h-screen flex flex-col">
            {/* Logo in top right */}
            <div className="flex justify-end mb-8">
                <img src={logo} alt="Futise Logo" className="size-16" />
            </div>

            {/* Main Content - Centered and Evenly Spaced */}
            <div className="flex-1 flex flex-col items-center justify-center space-y-12 max-w-5xl mx-auto">
                {/* Gradient Header Box */}
                <div
                    className="px-16 py-10 mb-8 rounded-lg shadow-lg"
                    style={{
                        background: 'linear-gradient(135deg, #844cff 0%, #11bfff 100%)',
                        minWidth: '600px'
                    }}
                >
                    <h1 className="text-6xl font-bold text-white text-center">
                        How It Started
                    </h1>
                </div>

                {/* Main Heading */}
                <div className="text-center mb-8">
                    <h2 className="text-5xl font-bold mb-4">
                        60+ Years of Combined Experience
                    </h2>
                    <div className="h-1.5 w-28 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #844cff 0%, #11bfff 100%)' }}></div>
                </div>

                {/* Body Text - Centered */}
                <div className="max-w-3xl space-y-6 text-gray-800 text-xl leading-relaxed text-left">
                    <p>
                        It all started over a casual chai break. <strong>4 Experts</strong> from different domains found themselves in a heated discussion. Each had spent years solving complex problems in their own domains, but they all shared the same frustration: tech learning and upskilling was inaccessible to many.
                    </p>
                    <p>
                        What if they brought their expertise together? What if they built something bigger than just individual solutions - something that truly shaped the future? <strong>Hence, FUTiSE.</strong>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-auto text-right py-4">
                <p className="text-sm text-gray-600">www.futise.com</p>
            </div>
        </div>
    );
};

export default HowItStarted;
