import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.',
      company: 'ADP',
    },
    {
      text: 'Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.',
      company: 'Bayer',
    },
    {
      text: 'Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.',
      company: 'Reliance',
    },
  ];

  return (
    <section id="testimonials" className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Testimonials from Our Partners
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          What Our Clients Are Saying
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
