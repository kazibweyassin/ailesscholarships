import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-purple-600 transition"
      >
        For Donors
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer tracking-tighter">Create a Scholarship</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer tracking-tighter">Fund a student</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
