// src/sections/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { SiFacebook, SiGitter, SiLinkedin, SiInstagram } from 'react-icons/si';

type FooterLinkType = {
  label: string;
  href: string;
};

type FooterLinksType = {
  company: FooterLinkType[];
  resources: FooterLinkType[];
  support: FooterLinkType[];
};

const FOOTER_LINKS: FooterLinksType = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Impact', href: '/impact' },
    { label: 'Our Team', href: '/team' }
  ],
  resources: [
    { label: 'Scholarship Database', href: '/scholarships' },
    { label: 'Application Guide', href: '/guide' },
    { label: 'Success Stories', href: '/stories' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' }
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' }
  ]
};

const SOCIAL_LINKS = [
  { icon: SiFacebook, href: '#', label: 'Facebook' },
  { icon: SiGitter, href: '#', label: 'Twitter' },
  { icon: SiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: SiInstagram, href: '#', label: 'Instagram' }
];

type FooterSectionProps = {
  title: string;
  links: FooterLinkType[];
};

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className="flex flex-col gap-4">
    <h3 className="font-semibold text-white">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link 
            href={link.href}
            className="text-gray-300 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const NewsletterForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-white/10 rounded-lg text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
            transition-colors flex items-center gap-2"
        >
          Subscribe
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
                {/* src="/images/logo.png"
                src="/api/placeholder/40/40"
                alt="Ailes Scholarships"
                width={40}
                height={40}
                className="rounded"/> */}
              <span className="text-xl font-bold text-slate-50">Ailes Scholarships</span>
            </Link>
            <p className="mt-4 text-slate-300 max-w-md">
              Empowering dreams through education. We connect ambitious students with life-changing 
              scholarship opportunities worldwide.
            </p>
            
            {/* Contact Information */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-slate-300 group">
                <Mail className="w-5 h-5 text-indigo-400" />
                <a href="mailto:contact@ailesscholarships.com" 
                   className="hover:text-indigo-300 transition-colors">
                  contact@ailesscholarships.org
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-indigo-400" />
                <a href="tel:+1234567890" 
                   className="hover:text-indigo-300 transition-colors">
                  +256 (70) 48 33021
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>123 Education Street, Knowledge City-Kampala</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 
                             rounded-full transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Company" links={FOOTER_LINKS.company} />
          <FooterSection title="Resources" links={FOOTER_LINKS.resources} />
          <FooterSection title="Support" links={FOOTER_LINKS.support} />
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="max-w-2xl">
            <h3 className="text-lg font-semibold text-slate-50">
              Stay Updated with Latest Opportunities
            </h3>
            <p className="mt-2 text-slate-300">
              Subscribe to our newsletter and never miss out on new scholarship opportunities.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Ailes Scholarships. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" 
                    className="text-sm text-slate-400 hover:text-indigo-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" 
                    className="text-sm text-slate-400 hover:text-indigo-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" 
                    className="text-sm text-slate-400 hover:text-indigo-300 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

// Check the render method of `Footer`.