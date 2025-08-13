import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>© {new Date().getFullYear()} TechCon 2025. All rights reserved.</p>
    </footer>
  );
};

export default Footer;