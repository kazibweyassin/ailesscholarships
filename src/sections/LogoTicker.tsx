'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';

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

const StatBox = ({ label, value }) => (
  <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg">
    <span className="text-sm text-white/70">{label}</span>
    <span className="text-lg font-bold text-white">{value}</span>
  </div>
);

const PartnerCard = ({ data, isActive, onClick }) => (
  <div 
    className={`relative p-6 rounded-xl transition-all duration-300 cursor-pointer
      ${isActive 
        ? 'bg-white/15 shadow-lg scale-100' 
        : 'bg-white/5 hover:bg-white/10 scale-95'
      }`}
    onClick={onClick}
  >
    <div className="flex items-start gap-4">
      <div className="relative w-16 h-16 bg-white/10 rounded-lg p-2 flex items-center justify-center">
        <Image
          src={data.logoSrc}
          alt={data.name}
          width={100}
          height={50}
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          {data.fullName}
          {isActive && <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />}
        </h3>
        <p className="text-white/90 mt-2 text-sm">{data.description}</p>
      </div>
    </div>
    
    <div className={`grid grid-cols-3 gap-3 mt-4 transition-all duration-300
      ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <StatBox label="Scholarships" value={data.stats.scholarships} />
      <StatBox label="Max Funding" value={data.stats.fundingAmount} />
      <StatBox label="Success Rate" value={data.stats.successRate} />
    </div>
  </div>
);

export default function PartnersShowcase() {
  const [activePartner, setActivePartner] = useState(0);

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/50 to-purple-900/50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partnering with World-Class Institutions
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Our partnerships with leading educational institutions ensure you get access to
            the best scholarship opportunities worldwide.
          </p>
          <button className="inline-flex items-center px-8 py-3 text-white bg-blue-600 
            rounded-full hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 focus:outline-none 
            transition-all duration-300 group gap-2">
            View All Opportunities
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Partners Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {PARTNER_DATA.map((partner, index) => (
              <PartnerCard
                key={partner.name}
                data={partner}
                isActive={activePartner === index}
                onClick={() => setActivePartner(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-white/90 mb-4">
            Ready to start your scholarship journey?
          </p>
          <button className="inline-flex items-center px-6 py-2 text-sm text-white/90 
            border border-white/20 rounded-full hover:bg-white/10 transition-colors gap-2">
            Create Free Account
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}