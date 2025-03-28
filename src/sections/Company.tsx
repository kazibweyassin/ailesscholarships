import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; // You'll need to import this icon or use your own

const Company = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition font-bold"
        aria-expanded={isOpen}
      >
        About Us
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg overflow-hidden z-50">
          <div className="py-2">
            <h3 className="text-purple-600 font-bold px-4 py-2 border-b">Ailes Scholarships</h3>
            
            <Link href="/scholarships/undergraduate" className="block px-4 py-3 hover:bg-gray-50">
              <span className="font-semibold block">Undergraduate Scholarships</span>
              <span className="text-sm text-gray-600">Full funding for promising students</span>
            </Link>
            
            <Link href="/scholarships/graduate" className="block px-4 py-3 hover:bg-gray-50">
              <span className="font-semibold block">Graduate Scholarships</span>
              <span className="text-sm text-gray-600">Advanced degree funding opportunities</span>
            </Link>
            
            <Link href="/scholarships/international" className="block px-4 py-3 hover:bg-gray-50">
              <span className="font-semibold block">International Scholarships</span>
              <span className="text-sm text-gray-600">Study abroad program funding</span>
            </Link>
            
            <div className="border-t">
              <Link href="/about/mission" className="block px-4 py-3 hover:bg-gray-50">
                <span className="font-semibold block">Our Mission</span>
                <span className="text-sm text-gray-600">Making education accessible to all</span>
              </Link>
              
              <Link href="/about/team" className="block px-4 py-3 hover:bg-gray-50">
                <span className="font-semibold block">Our Team</span>
                <span className="text-sm text-gray-600">Meet the education advocates</span>
              </Link>
              
              <Link href="/about/impact" className="block px-4 py-3 hover:bg-gray-50">
                <span className="font-semibold block">Our Impact</span>
                <span className="text-sm text-gray-600">Success stories from our scholars</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;