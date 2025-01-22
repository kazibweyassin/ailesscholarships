import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import tom from '@/assets/tom.jpg';
import sam from '@/assets/sam.jpg';
import avatar from '@/assets/avatar-4.png'

// Types
interface Testimonial {
  photo: JSX.Element;
  name: string;
  quote: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// Constants
const TESTIMONIALS: Testimonial[] = [
  {
    photo: (
      <Image 
        src={tom}
        width={500}
        height={500}
        alt='photo'
      />
    ),
    name: "Kalanzi Ibra",
    quote: "Ailes Scholarships helped me secure funding for my Master's program in Canada. The process was seamless and highly personalized.",
  },
  {
    photo: (
      <Image 
        src={sam}
        width={500}
        height={500}
        alt='photo'
      />
    ),
    name: "Semakula William",
    quote: "I wouldn't have known about these opportunities without Ailes. Now, I'm pursuing my dream education in Germany!",
  },
  {
    photo: (
      <Image 
        src={avatar}
        width={500}
        height={500}
        alt='photo'
      />
    ),
    name: "Ivan Mugabe",
    quote: "Ailes team guided throughout the unpredicatable journey and helped me get a fully funded scholarship at the University of New Haven",
  },
];

const FEATURES: Feature[] = [
  {
    icon: "🎓",
    title: "Access to Top Scholarships",
    description: "Browse exclusive opportunities tailored to your goals.",
  },
  {
    icon: "🌍",
    title: "Global Opportunities",
    description: "Unlock funding for studies in Canada, Germany, and beyond.",
  },
  {
    icon: "💼",
    title: "Career Mentorship",
    description: "Get guidance on how to secure and excel in your career path.",
  },
  {
    icon: "🤝",
    title: "Community Support",
    description: "Join a network of like-minded individuals and experts.",
  },
];

const FAQS: FAQItem[] = [
  {
    question: "How do I apply for scholarships on Ailes?",
    answer: "Simply create an account, browse available opportunities, and follow the step-by-step guidance to apply.",
  },
  {
    question: "Are there scholarships for international students?",
    answer: "Yes! We offer access to scholarships for students from various countries around the world.",
  },
  {
    question: "Do you help with Visa application process",
    answer: "We provide tailored guidance on the visa application process for students studying abroad.",
  },
];

// Reusable components
interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, variant = 'primary', children, className = '' }) => {
  const baseStyles = "px-6 py-2 font-semibold rounded-full shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
    secondary: "bg-white text-blue-600 hover:bg-gray-200 focus:ring-blue-400",
  };

  return (
    <Link href={href} passHref>
      <button className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </button>
    </Link>
  );
};

Button.displayName = 'Button';  // Set displayName

interface SectionContainerProps {
  className?: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ className = '', children }) => (
  <div className={`container mx-auto px-4 ${className}`}>
    {children}
  </div>
);

SectionContainer.displayName = 'SectionContainer';  // Set displayName

interface TestimonialCardProps {
  photo: JSX.Element;
  name: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = React.memo(({ photo, name, quote }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    {photo && (
      <div className='w-20 h-20 mx-auto mb-4 overflow-hidden rounded-full'>
        {photo}
      </div>
    )}
    <p className="text-gray-700 italic">"{quote}"</p>
    <h3 className="font-semibold text-gray-900 mt-4">{name}</h3>
  </div>
));

TestimonialCard.displayName = 'TestimonialCard';  // Set displayName

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = React.memo(({ icon, title, description }) => (
  <div className="text-center">
    <div className="text-blue-600 text-4xl mb-4">{icon}</div>
    <h3 className="font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
));

FeatureCard.displayName = 'FeatureCard';  // Set displayName

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = React.memo(({ question, answer }) => (
  <details className="p-4 bg-white rounded-lg shadow-md">
    <summary className="font-bold text-gray-900 cursor-pointer">
      {question}
    </summary>
    <p className="mt-2 text-gray-700">{answer}</p>
  </details>
));

FAQ.displayName = 'FAQ';  // Set displayName

export const ProductShowcase: React.FC = () => (
  <section className="bg-white py-24">
    {/* Hero Section */}
    <SectionContainer className="gap-8 items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <header className="mb-8 ">
          <Button href="/">Apply for an award</Button>
        </header>
        <h2 className="text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
          Everyone deserves the opportunity to learn and prosper. But how?
        </h2>
        <p className="text-[18px] leading-relaxed mt-4 tracking-tight text-[#010d3e]">
          Ailes scholarships works with visionary organizations to enable
          young people in Africa and Indigenous communities in Canada to
          access dignified and fulfilling work.
        </p>
      </div>
    </SectionContainer>

    {/* Testimonials Section */}
    <section className="bg-white -100 py-12">
      <SectionContainer>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">What People Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </SectionContainer>
    </section>

    {/* Call-to-Action Section */}

    {/* <section className="bg-gradient-to-br from-purple-500 via-purple-900 to-purple-950 py-16"> */}
<section className=" bg-[rgb(97,3,69)]  py-16">
      <SectionContainer className="text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h2>
        <p className="text-lg mb-6">
          Join thousands of students unlocking life-changing opportunities every day with Ailes Scholarships.
        </p>
        <Button href="/signup" variant="secondary" className="px-8 py-3">
          Sign Up for Free
        </Button>
      </SectionContainer>
    </section>

    {/* Features Section */}
    <section className="bg-white py-12">
      <SectionContainer>
        <h2 className="section-title text-3xl md:text-4xl font-bold">
          Why Choose Ailes Scholarships?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </SectionContainer>
    </section>

    {/* FAQs Section */}
    <section className="bg-white -50 py-12">
      <SectionContainer>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FAQ key={index} {...faq} />
          ))}
        </div>
      </SectionContainer>
    </section>
  </section>
);