'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        
        return (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-primary/50"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-4 flex-1">
                {item.icon && (
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{item.icon}</div>
                  </div>
                )}
                <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors pr-4">
                  {item.question}
                </h3>
              </div>
              <div className="flex-shrink-0">
                <svg
                  className={`w-6 h-6 text-secondary-muted transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-5">
                <div className="pl-14">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-secondary-muted font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

