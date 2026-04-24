import { Target, Users, Briefcase, BarChart3 } from 'lucide-react';

export default function AccredianEdge() {
  const edges = [
    {
      icon: Target,
      title: 'Industry-Aligned Curriculum',
      description: 'Courses designed with input from industry leaders',
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from practitioners at top companies',
    },
    {
      icon: Briefcase,
      title: 'Real-World Projects',
      description: 'Work on actual business problems',
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Monitor learning outcomes and ROI',
    },
  ];

  return (
    <section id="edge" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          The <span className="text-primary-600">Accredian Edge</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          What sets our enterprise learning solutions apart
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {edges.map((edge, index) => {
            const Icon = edge.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <Icon className="w-8 h-8 mb-4 text-primary-600" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {edge.title}
                </h3>
                <p className="text-gray-600">{edge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
