'use client'; // Ensure this is marked as a Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ArrowRight from '@/assets/arrow-right.svg';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import Logo from '@/assets/logotiger.png';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('about');
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/signup');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(sectionId); // Set active link when scrolling
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Scholarship Announcement Section */}
      <div className="flex justify-center items-center py-2 bg-[rgb(32,44,89)] text-white">
        <div className="flex items-center gap-3">
          <p className="text-sm font-bold">Access Fully Funded Scholarships</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Logo and Navigation Section */}
      <div className="container font-bold mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('about')}>
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </div>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon className="h-6 w-6 cursor-pointer" aria-label="Toggle Navigation" />
        </div>

        {/* Navigation Links */}
        <nav className={`md:flex items-center gap-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <a
            href="#about"
            className={`text-gray-700 hover:text-purple-600 transition ${activeLink === 'about' ? 'text-purple-600' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
          </a>
          <a
            href="#scholarships"
            className={`text-gray-700 hover:text-purple-600 transition ${activeLink === 'scholarships' ? 'text-purple-600' : ''}`}
            onClick={() => scrollToSection('scholarships')}
          >
            Scholarships
          </a>
          <a
            href="#events"
            className={`text-gray-700 hover:text-purple-600 transition ${activeLink === 'events' ? 'text-purple-600' : ''}`}
            onClick={() => scrollToSection('events')}
          >
            Events
          </a>
          <a
            href="#pricing"
            className={`text-gray-700 hover:text-purple-600 transition ${activeLink === 'pricing' ? 'text-purple-600' : ''}`}
            onClick={() => scrollToSection('pricing')}
          >
            Premium
          </a>
          <a
            href="#help"
            className={`text-gray-700 hover:text-purple-600 transition ${activeLink === 'help' ? 'text-purple-600' : ''}`}
            onClick={() => scrollToSection('help')}
          >
            Help
          </a>
          <a
            href="#contact"
            className={`text-gray-700 hover:text-purple-600 transition ${activeLink === 'contact' ? 'text-purple-600' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </a>

          {/* Sign Up and Login Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleSignUp}
              className="bg-purple-600 hover:bg-purple-700 transition text-white px-4 py-2 rounded-lg font-medium"
            >
              Sign Up
            </button>
            <button
              onClick={handleLogin}
              className="bg-gray-600 hover:bg-gray-700 transition text-white px-4 py-2 rounded-lg font-medium"
            >
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
