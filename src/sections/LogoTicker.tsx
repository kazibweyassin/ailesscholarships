'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Star, ChevronRight, ChevronLeft } from 'lucide-react';

const PARTNER_DATA = [
  {
    name: "DAAD",
    fullName: "German Academic Exchange Service",
    description: "Offering over 100+ fully-funded scholarships for international students",
    logoSrc: "/assets/DAAD.png",
    stats: { scholarships: "100+", fundingAmount: "$50K+", successRate: "86%" }
  },
  {
    name: "IELTS",
    fullName: "International English Language Testing System",
    description: "Providing scholarship opportunities for high-achieving test-takers",
    logoSrc: "/assets/IELTS.png",
    stats: { scholarships: "50+", fundingAmount: "$25K+", successRate: "92%" }
  },
  {
    name: "Commonwealth",
    fullName: "Commonwealth Scholarship Commission",
    description: "Full scholarships for students from Commonwealth nations",
    logoSrc: "/assets/common.png",
    stats: { scholarships: "200+", fundingAmount: "$75K+", successRate: "78%" }
  },
  {
    name: "Erasmus+",
    fullName: "Erasmus+ Program",
    description: "European Union's program for education, training, and sports",
    logoSrc: "/assets/eras.png",
    stats: { scholarships: "150+", fundingAmount: "$60K+", successRate: "82%" }
  },
  {
    name: "Mastercard",
    fullName: "Mastercard Foundation Scholars",
    description: "Supporting bright young African leaders in their education",
    logoSrc: "/assets/mastacard.png",
    stats: { scholarships: "250+", fundingAmount: "$100K+", successRate: "90%" }
  }
];

interface PartnerData {
  name: string;
  fullName: string;
  description: string;
  logoSrc: string;
  stats: {
    scholarships: string;
    fundingAmount: string;
    successRate: string;
  };
}

const StatBox = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col items-center p-3 bg-indigo-600/20 rounded-lg">
    <span className="text-sm text-indigo-700">{label}</span>
    <span className="text-lg font-bold text-indigo-900">{value}</span>
  </div>
);

const PartnerCard = ({ data }: { data: PartnerData }) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="relative w-16 h-16 bg-blue-50 rounded-lg p-2 flex items-center justify-center">
        <Image
          src={data.logoSrc}
          alt={data.name}
          width={100}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-indigo-900 flex items-center gap-2">
          {data.fullName}
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </h3>
        <p className="text-gray-700 mt-2 text-sm">{data.description}</p>
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-3 mt-4">
      <StatBox label="Scholarships" value={data.stats.scholarships} />
      <StatBox label="Max Funding" value={data.stats.fundingAmount} />
      <StatBox label="Success Rate" value={data.stats.successRate} />
    </div>
  </div>
);

export function LogoTicker() {
  const [activePartner, setActivePartner] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Auto-cycle through partners
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActivePartner((current) => (current + 1) % PARTNER_DATA.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActivePartner((current) => (current - 1 + PARTNER_DATA.length) % PARTNER_DATA.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActivePartner((current) => (current + 1) % PARTNER_DATA.length);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[length:32px_32px]" />
      
      {/* Floating Circles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-40 right-40 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
            Partnering with World-Class Institutions
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our partnerships with leading educational institutions ensure you get access to
            the best scholarship opportunities worldwide.
          </p>
          <button className="inline-flex items-center px-8 py-3 text-white bg-indigo-600 
            rounded-full hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 focus:outline-none 
            transition-all duration-300 group gap-2 shadow-md">
            View All Opportunities
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Logo Ticker */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8 py-6 overflow-hidden">
            <div className="flex animate-marquee">
              {PARTNER_DATA.map((partner) => (
                <div 
                  key={partner.name} 
                  className="mx-8 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain h-12"
                  />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {PARTNER_DATA.map((partner) => (
                <div 
                  key={`${partner.name}-dup`} 
                  className="mx-8 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={partner.logoSrc}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="object-contain h-12"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Partner */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-indigo-900">Featured Partner</h3>
            <div className="flex items-center gap-2">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div className="flex space-x-2">
                {PARTNER_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === activePartner ? 'bg-indigo-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => {
                      setAutoplay(false);
                      setActivePartner(idx);
                    }}
                    aria-label={`View partner ${idx + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
          
          <div className="transition-all duration-300 transform">
            <PartnerCard data={PARTNER_DATA[activePartner]} />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-indigo-800 mb-4 font-medium">
            Ready to start your scholarship journey?
          </p>
          <button className="inline-flex items-center px-6 py-3 text-indigo-600 font-medium
            border-2 border-indigo-600 rounded-full hover:bg-indigo-50 transition-colors gap-2">
            Create Free Account
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

