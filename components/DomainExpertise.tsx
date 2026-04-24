import { Rocket, Bot, User, BarChart3, Settings, Laptop, DollarSign } from 'lucide-react';

export default function DomainExpertise() {
  const domains = [
    { icon: Rocket, title: 'Product & Innovation Hub' },
    { icon: Bot, title: 'Gen-AI Mastery' },
    { icon: User, title: 'Leadership Elevation' },
    { icon: BarChart3, title: 'Tech & Data Insights' },
    { icon: Settings, title: 'Operations Excellence' },
    { icon: Laptop, title: 'Digital Enterprise' },
    { icon: DollarSign, title: 'Fintech Innovation Lab' },
  ];

  return (
    <section id="programs" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Our Solutions
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Our Domain Expertise
        </p>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Specialized Programs Designed to Fuel Innovation
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
              >
                <Icon className="w-8 h-8 mb-3 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {domain.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
