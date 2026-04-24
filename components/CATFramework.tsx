import { BookOpen, Code, Wrench } from 'lucide-react';

export default function CATFramework() {
  const steps = [
    {
      number: '01',
      title: 'Concept',
      description: 'Build strong theoretical foundations',
      color: 'bg-blue-500',
      icon: BookOpen,
    },
    {
      number: '02',
      title: 'Application',
      description: 'Apply knowledge through hands-on projects',
      color: 'bg-purple-500',
      icon: Code,
    },
    {
      number: '03',
      title: 'Tools',
      description: 'Master industry-standard tools and technologies',
      color: 'bg-green-500',
      icon: Wrench,
    },
  ];

  return (
    <section id="cat" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          The CAT Framework
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Our Proven Approach to Learning Excellence
        </p>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A proven methodology combining theory, application, and tools
        </p>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 transform -translate-y-1/2"></div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
                >
                  <div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto`}
                  >
                    {step.number}
                  </div>
                  <Icon className="w-8 h-8 mx-auto mb-4 text-gray-600" />
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
