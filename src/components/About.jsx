import React from 'react';

export default function About() {
  const bgUrl = "https://images.tribuneindia.com/cms/gall_content/2015/11/2015_11$largeimg02_Monday_2015_003323953.jpg";

  const values = [
    {
      title: "Action Over Advocacy",
      description: "Act meaningfully rather than advocating endlessly"
    },
    {
      title: "Fundamental Duty",
      description: "Fulfill our environmental duty towards nature"
    },
    {
      title: "Social Integration",
      description: "Build a stronger community while strengthening social integration"
    },
    {
      title: "Transparency",
      description: "Remain transparent in our impact and initiatives"
    },
    {
      title: "Continuous Growth",
      description: "Think, improve and impact"
    }
  ];

  return (
    <section
      id="about"
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/85" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* Label */}
            <div className="inline-block mb-6">
              <span className="text-emerald-400 text-sm font-semibold tracking-widest">ESTABLISHED 2026</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              About Avyan Prakrti
            </h2>

            {/* Description */}
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              Founded in 2026, Avyan Prakrti is a student-led ENSO dedicated towards building an environmentally conscious community and working towards a greener future.
            </p>

            {/* Our Mission */}
            <div className="mb-16">
              <h3 className="text-white text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to reduce waste, promote recycling, encourage sustainable consumption, raise awareness and channel resources for the benefit of the people and the planet.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-12 pt-8 border-t border-white/20 pl-5 border-l-4 border-emerald-400">
              <p className="text-gray-200 italic text-base leading-relaxed opacity-90">
                "At Avyan Prakrti, we believe that every hand extended in service, is a small step towards achieving a greener tomorrow. Together, let us make environmental consciousness an instinct rather than a responsibility, and a vision of a greener planet into a walking reality."
              </p>
            </div>
          </div>

          {/* Right Card - Values */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-gray-900 text-2xl font-bold mb-8">Our Values</h3>
              
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-400">
                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-1">{value.title}</h4>
                      <p className="text-gray-700 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
