import React from 'react';
import Lottie from 'lottie-react';
import logo from "../assets/images/futise2.jpeg";

// Import Lottie animations
import targetAnimation from './animations/target.json';
import learningAnimation from './animations/learning.json';
import qualityAnimation from './animations/quality.json';
import globeAnimation from './animations/globe.json';
import growthAnimation from './animations/growth.json';
import techAnimation from './animations/tech.json';

const Why = () => {
  const features = [
    { name: "Innovation Driven", animation: targetAnimation },
    { name: "Learners-Centric Approach", animation: learningAnimation },
    { name: "Quality Assurance", animation: qualityAnimation },
    { name: "Continuous Learning", animation: globeAnimation },
    { name: "Responsible Growth", animation: growthAnimation },
    { name: "Cutting Edge Technology", animation: techAnimation }
  ];

  return (
    <div className="px-20 py-10 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen flex flex-col relative">
      {/* Logo in top right */}
      <div className="flex justify-end mb-16">
        <img src={logo} alt="Futise Logo" className="size-16 drop-shadow-md" />
      </div>

      {/* Main Content */}
      <div className="flex-1 pb-20">
        {/* Title */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold mb-3 text-gray-900">
            Why FUTiSE?
          </h1>
          <div className="h-1.5 w-36 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-x-20 gap-y-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              {/* Icon Circle with Lottie animation */}
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-5 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-700 overflow-hidden p-8">
                <Lottie
                  animationData={feature.animation}
                  loop={true}
                  className="w-full h-full"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              {/* Feature Name */}
              <p className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {feature.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer with blue bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 h-14 flex items-center justify-end px-20 shadow-lg">
        <p className="text-sm font-medium text-white tracking-wide">www.futise.com</p>
      </div>
    </div>
  );
};

export default Why;