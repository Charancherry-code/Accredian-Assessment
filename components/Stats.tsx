import React from 'react';
import { stats } from '@/lib/constants/stats';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = React.memo(function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
        {value}
      </div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
});

export default function Stats() {
  return (
    <section id="stats" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Our Track Record
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          The Numbers Behind Our Success
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
