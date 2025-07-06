"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Do you accept insurance?",
    answer: "No, but a superbill is provided for self-submission."
  },
  {
    id: 2,
    question: "Are online sessions available?",
    answer: " Yes—all virtual sessions via Zoom."
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer: "24-hour notice required."
  }
];

export default function Faq() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isOpen = (id: number) => openItems.includes(id);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about therapy sessions, policies, and what to expect.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none cursor-pointer"
                aria-expanded={isOpen(item.id)}
                aria-controls={`faq-answer-${item.id}`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {isOpen(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              <div
                id={`faq-answer-${item.id}`}
                className={`transition-all duration-300 ease-in-out ${
                  isOpen(item.id) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}