'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Stats', href: '#stats' },
    { name: 'Clients', href: '#clients' },
    { name: 'Accredian Edge', href: '#edge' },
    { name: 'CAT', href: '#cat' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Courses', href: '#courses' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center hover:opacity-80 transition-opacity" aria-label="Accredian Home">
            <div className="text-2xl font-bold text-primary-700">Accredian</div>
          </a>

          <div className="hidden lg:flex items-center space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" size="sm">
              Enquire Now
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary-600 text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" size="sm" className="mt-4 w-full">
              Enquire Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
