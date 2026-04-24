import { Target, TrendingUp, UserCheck } from 'lucide-react';
import Button from './ui/Button';
import { heroFeatures } from '@/lib/constants/features';

export default function Hero() {
  const featureIcons = [Target, TrendingUp, UserCheck];

  return (
    <section id="home" className="pt-24 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Next-Gen Expertise for Your{' '}
              <span className="text-primary-600">Enterprise</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cultivate high-performance teams through expert learning.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {heroFeatures.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                    <div className="font-semibold text-gray-900 mb-1">{feature.title}</div>
                    <div className="text-sm text-gray-600">{feature.description}</div>
                  </div>
                );
              })}
            </div>
            <Button variant="primary" size="lg">
              Enquire Now
            </Button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-xl">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="aspect-video bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
                  <Target className="w-24 h-24 text-primary-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
