'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ArrowRight from '@/assets/arrow-right.svg';
import MenuIcon from '@/assets/menu.svg';
import CloseIcon from '@/assets/close.svg'; 
import Logo from '@/assets/logo.png';
import Dropdown from './Dropdown';
import Student from './Student';
import Company from './Company';


export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll events to apply styles when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const handleSignUp = () => {
    router.push('/signup');
    setIsMobileMenuOpen(false);
  };

  const handleLogin = () => {
    router.push('/login');
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Scholarship Announcement Section */}
      <div className="flex justify-center items-center py-2 bg-[rgb(32,44,89)] text-white">
        <div className="flex items-center gap-3">
          <p className="text-sm font-bold">Access Fully Funded Scholarships</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Logo and Navigation Section */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('about')}>
          <Image src={Logo} alt="Logo" width={100} height={100} priority />
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="block md:hidden focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-bold">
          <a
            href="#about"
            className={`text-gray-700 hover:text-purple-600 transition ${activeLink === 'about' ? 'text-purple-600' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
          <Company/>
          </a>
          <Student />
          <a
            href="#events"
            className={`text-gray-700 hover:text-purple-600 transition ${activeLink === 'events' ? 'text-purple-600' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('events');
            }}
          ></a>
          <Dropdown />
          <a
            href="#help"
            className={`text-gray-700 hover:text-purple-600 transition ${activeLink === 'help' ? 'text-purple-600' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('help');
            }}
          >
          </a>
          <a
            href="#contact"
            className={`text-gray-700 hover:text-purple-600 transition ${activeLink === 'contact' ? 'text-purple-600' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
          </a>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
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
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 md:hidden">
          <div className="flex flex-col items-center gap-6 p-4 font-bold">
            <a
              href="#about"
              className={`text-gray-700 hover:text-purple-600 transition text-lg ${activeLink === 'about' ? 'text-purple-600' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
            <div className="w-full flex justify-center">
              <Student />
            </div>
            <a
              href="#events"
              className={`text-gray-700 hover:text-purple-600 transition text-lg ${activeLink === 'events' ? 'text-purple-600' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('events');
              }}
            >
            </a>
            <div className="w-full flex justify-center">
              <Dropdown />
            </div>
            <a
              href="#help"
              className={`text-gray-700 hover:text-purple-600 transition text-lg ${activeLink === 'help' ? 'text-purple-600' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('help');
              }}
            >
            </a>
            <a
              href="#company"
              className={`text-gray-700 hover:text-purple-600 transition text-lg ${activeLink === 'compnay' ? 'text-purple-600' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              <Company/>
            </a>
            <div className="flex flex-col w-full gap-4 mt-4">
              <button
                onClick={handleSignUp}
                className="bg-purple-600 hover:bg-purple-700 transition text-white px-4 py-3 rounded-lg font-medium"
              >
                Sign Up
              </button>
              <button
                onClick={handleLogin}
                className="bg-gray-600 hover:bg-gray-700 transition text-white px-4 py-3 rounded-lg font-medium"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};