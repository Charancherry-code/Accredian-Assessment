import { Laptop, BarChart3, Rocket, UserCheck } from 'lucide-react';

export default function AudienceSection() {
  const audiences = [
    {
      title: 'Tech Professionals',
      description: 'Enhance expertise, embrace tech, drive innovation.',
      icon: Laptop,
    },
    {
      title: 'Non-Tech Professionals',
      description: 'Adapt digitally, collaborate in tech environments.',
      icon: BarChart3,
    },
    {
      title: 'Emerging Professionals',
      description: 'Develop powerful skills for rapid career growth.',
      icon: Rocket,
    },
    {
      title: 'Senior Professionals',
      description: 'Strengthen leadership, enhance strategic decisions.',
      icon: UserCheck,
    },
  ];

  return (
    <section id="business" className="py-16 px-6 bg-primary-600">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Who Should Join?
        </h2>
        <p className="text-center text-primary-100 mb-4">
          Strategic Skill Enhancement
        </p>
        <p className="text-center text-primary-100 mb-12 max-w-2xl mx-auto">
          Comprehensive training programs designed for every professional level
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <Icon className="w-12 h-12 mb-4 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {audience.title}
                </h3>
                <p className="text-primary-100">{audience.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
