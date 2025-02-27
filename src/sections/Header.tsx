'use client'; // Ensure this is marked as a Client Component

import { useRouter } from 'next/navigation'; // Correct import for the App Router
import ArrowRight from '@/assets/arrow-right.svg';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import Logo from '@/assets/logotiger.png';


export const Header = () => {
  const router = useRouter();

  const handleSignUp = () => {
    // Redirect to the sign-up page
    router.push('/signup');
  };

  const scrollTocontact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({behavior: "smooth"})
    }
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Scholarship Announcement Section */}
      {/* <div className="flex justify-center items-center py-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white"> */}

      <div className="flex justify-center items-center py-2 bg-[rgb(32,44,89)] text-white">
        <div className="flex items-center gap-3">
          <p className="text-sm font-bold">Access Fully Funded Scholarships</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* Logo and Navigation Section */}
      <div className="container font-bold mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={scrollToAbout}>
          <Image   src={Logo} alt="Logo" width={100} height={100} />
        </div>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden">
          <MenuIcon className="h-6 w-6 cursor-pointer" aria-label="Toggle Navigation" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-gray-700 hover:text-purple-600 transition">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600 transition">
            Scholarships
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600 transition">
            Events
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition">
            Premium
          </a>
          <a href="#" className="text-gray-700 hover:text-purple-600 transition">
            Help
          </a>
          <a href="#contact" className="text-gray-700 hover:text-purple-600 transition">
            Contact
          </a>
          <button
            onClick={handleSignUp}
            className="bg-purple-600 hover:bg-purple-700 transition text-white px-4 py-2 rounded-lg font-medium"

          >
            Sign Up Now
          </button>
        </nav>
      </div>
    </header>
  );
};
