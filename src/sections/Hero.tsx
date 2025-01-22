"use client";

import { useState, useEffect } from "react";
import ArrowIcon from "@/assets/arrow-right.svg";
import books from "@/assets/books.png";
import hand from "@/assets/Hand.png";
import Image from "next/image";

export const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure hydration
  if (!mounted) return null;

  return (
    // <section className="relative min-h-screen overflow-x-clip bg-gradient-to-br from-purple-500 via-purple-900 to-purple-950">

    <section className="relative min-h-screen overflow-x-clip bg-[rgb(32,44,89)]">
      <div className="absolute inset-0 bg-opacity-5" />

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="tag flex items-center space-x-2">
              <span className="inline-block w-5 h-5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white">
                Exclusive Scholarships
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">
                  Pathway to Endless Possibilities
                </span>
              </h1>

              <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl">
                Discover opportunities to achieve your dreams with access to
                trusted, fully funded scholarships tailored to your needs. Start
                your journey today!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                className="btn btn-primary animate-pulse"
                aria-label="Apply Now"
              >
                Apply Now
              </button>
              <button
                className="btn flex items-center gap-1 border border-white/20 text-white hover:bg-white/10"
                aria-label="Learn More"
              >
                <ArrowIcon className="h-5 w-5" />
                <span>Learn More</span>
              </button>
            </div>

            {/* Stats or Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              {[
                { label: "Scholarships", value: "1000+" },
                { label: "Success Rate", value: "94%" },
                { label: "Visas Approved", value: "500+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-blue-200/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="mt-20 md:mt-0 relative h-[400px] lg:h-[600px]">
            <Image
              src={books}
              alt="Educational resources and opportunities"
              className="rounded-xl"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
            {/* Uncomment if needed */}
            {/* <Image
              src={hand}
              alt="Hand"
              className="hidden md:block -top-8 -left-32"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
