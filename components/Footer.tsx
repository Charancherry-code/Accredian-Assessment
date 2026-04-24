export default function Footer() {
  const footerLinks = {
    company: ['About', 'Blog', 'Why Accredian', 'Contact Us'],
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Accredian</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">
              Email us: enterprise@accredian.com
            </p>
            <p className="text-gray-400 mb-4">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
