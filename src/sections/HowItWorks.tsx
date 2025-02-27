"use client";

import React from "react";
import { FaSearch, FaFileAlt, FaUniversity, FaPassport } from "react-icons/fa";
import { motion } from "framer-motion";


const HowItWorks = () => {

  const steps = [
    {
      step: "STEP 1",
      title: "Find a Match",
      description:
        "Our AI technology matches you to open programs based on your profile and level of education. You can also search our database for institutions and programs using a variety of filters, including but not limited to country, educational level, and tuition budget.",
      icon: <FaSearch className="text-blue-500 text-5xl mx-auto mb-4 group-hover:text-blue-600 transition-colors duration-300" />,
    },
    
    {
      step: "STEP 2",
      title: "Apply to a Program",
      description:
        "Upload the required documents and apply for programs. Our platform simplifies the process, ensuring your applications are submitted seamlessly.",
      icon: <FaFileAlt className="text-green-500 text-5xl mx-auto mb-4 group-hover:text-green-600 transition-colors duration-300" />,
    },

    {
      step: "STEP 3",
      title: "Get Admission",
      description:
        "We review and verify your documents and applications. Once submitted to our partner schools, your admission is granted if you meet the eligibility criteria.",
      icon: <FaUniversity className="text-purple-500 text-5xl mx-auto mb-4 group-hover:text-purple-600 transition-colors duration-300" />,
    },

    {
      step: "STEP 4",
      title: "Visa Application",
      description:
        "Using our proprietary immigration tech platform, connect to a licensed immigration consultant in seconds to begin your study visa application process.",
      icon: <FaPassport className="text-red-500 text-5xl mx-auto mb-4 group-hover:text-red-600 transition-colors duration-300" />,
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className=" container mx-auto px-6 text-center">
        <motion.h2
          className="section-title text-3xl md:text-4xl font-bold text-black py-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100 
          }}
        >
          How Ailes Scholarships Works
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-lg shadow-lg p-6 cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div
                variants={iconVariants}
                whileHover="hover"
              >
                {step.icon}
              </motion.div>
              <motion.div 
                className="text-blue-500 text-lg font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {step.step}
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-gray-800 mt-4 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {step.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >

                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;