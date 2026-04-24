import Image from 'next/image';
import { clients } from '@/lib/constants/clients';

export default function Clients() {
  return (
    <section id="clients" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Our Proven Partnerships
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Successful Collaborations With the Industry's Best
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center h-32 relative"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-contain"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
