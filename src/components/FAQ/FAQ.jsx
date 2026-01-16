"use client";

import React, { useState } from "react";

// Icons
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

// Realistic FAQs
const faqs = [
  {
    question: "What is MiniMart?",
    answer: "MiniMart is a small online store showcasing cool products. You can explore, see details, and get inspired — all without any checkout stress."
  },
  {
    question: "How do I find products I like?",
    answer: "Browse the Items page, filter by category, or search by name. Click a product to see its full details and specs."
  },
  {
    question: "Can I suggest new products?",
    answer: "Absolutely! Reach out through the Contact page or drop a message — the admin can add it to the catalog."
  },
  {
    question: "Who can add products to the store?",
    answer: "Only the admin can log in and add new products. This keeps the catalog organized and secure."
  },
  {
    question: "Are the product details accurate?",
    answer: "Yes! We make sure every item has clear images, descriptions, and prices so you know exactly what you’re seeing."
  },
  {
    question: "Can I save my favorite products?",
    answer: "Not yet, but you can always bookmark the product page in your browser to come back later."
  },
  {
    question: "Is MiniMart safe to use?",
    answer: "Yes. Browsing is read-only for visitors, and admin login is protected. No purchases or sensitive data are involved."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newSet = new Set(openItems);
    if (newSet.has(index)) newSet.delete(index);
    else newSet.add(index);
    setOpenItems(newSet);
  };

  return (
    <div className="w-full max-w-11/12 mx-auto p-6 space-y-8 pt-24 md:pt-28 lg:pt-32">

      <div className="text-center space-y-4">
        <h2 className="mt-15 md:mt-20 text-center md:text-4xl text-2xl font-bold mb-5">
          Frequently Asked Questions
        </h2>
        <p className="text-black text-lg max-w-2xl mx-auto">
          Here are some common questions about browsing and using MiniMart.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openItems.has(index);
          return (
            <div
              key={index}
              className="group border-2 border-primary rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm bg-primary/30"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left focus:outline-none focus:ring-4 transition-all duration-300"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm bg-secondary ${
                        isOpen ? "rotate-12" : ""
                      }`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-black group-hover:text-gray-900 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`flex items-center space-x-2 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </div>
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <div className="w-full h-px bg-primary mb-4"></div>
                    <p className="text-black leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}