import { Search, ClipboardCheck, GraduationCap } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      icon: Search,
      title: 'Skill Gap Analysis',
      description: 'Assess team skill gaps and developmental needs.',
    },
    {
      icon: ClipboardCheck,
      title: 'Customized Training Plan',
      description: 'Create a tailored roadmap addressing organizational goals.',
    },
    {
      icon: GraduationCap,
      title: 'Flexible Program Delivery',
      description: 'Execute training through online, in-person, or hybrid models',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          How We Deliver Results That Matter?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A Structured Three-Step Approach to Skill Development
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <Icon className="w-12 h-12 mb-6 text-center mx-auto text-primary-600" />
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
