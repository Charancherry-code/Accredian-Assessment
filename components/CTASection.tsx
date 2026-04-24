'use client';

import { useState } from 'react';
import Button from './ui/Button';

export default function CTASection() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        setMessage('Thank you! We\'ll be in touch soon.');
        setFormData({ name: '', email: '' });
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-primary-100 mb-6">
                Get Expert Guidance for Your Team's Success!
              </p>
              <Button variant="white">
                Contact Us
              </Button>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  required
                />
                <Button
                  type="submit"
                  variant="white"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Enquire Now'}
                </Button>
                {message && (
                  <p className={`text-sm ${message.includes('Thank') ? 'text-green-200' : 'text-red-200'}`}>
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
