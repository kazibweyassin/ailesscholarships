import { useState } from "react";

const Student = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-purple-600 transition"
      >
        For Students
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer tracking-tighter">View all Scholarships</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer tracking-tighter">Study Abroad</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer tracking-tighter">Get your Visa</li>
        </ul>
      )}
    </div>
  );
};

export default Student;
