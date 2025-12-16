import React from 'react';
import Lottie from 'lottie-react';

// Import Lottie animations
import targetAnimation from './animations/target.json';
import learningAnimation from './animations/learning.json';
import qualityAnimation from './animations/quality.json';
import globeAnimation from './animations/globe.json';
import growthAnimation from './animations/growth.json';
import techAnimation from './animations/tech.json';
import Title from './Title';

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
    <div className=" min-h-screen flex flex-col relative">
      <Title title={" Why FUTiSE?"}/>

      {/* Main Content */}
      <div className="flex-1 pb-20 mt-5">

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

     
    </div>
  );
};

export default Why;