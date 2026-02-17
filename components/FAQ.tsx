"use client";

import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is Thatha Ennai safe to use?",
    answer:
      "Yes. Thatha Ennai is 100% herbal with no chemicals. It is formulated using traditional Siddha ingredients under the guidance of a registered Siddha Medical Practitioner. However, if you have allergies to any herbal ingredients, please consult your doctor before use.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "Thatha Ennai is made from natural herbs and oils with no added chemicals. Side effects are rare. If you experience any skin irritation, discontinue use and consult a healthcare professional.",
  },
  {
    question: "How long should I use it?",
    answer:
      "For best results, apply 2–3 times daily on the affected area. Many users experience relief within 1–2 weeks of regular use. Continued use can help maintain joint health and mobility.",
  },
  {
    question: "Is it suitable for the elderly?",
    answer:
      "Yes. Thatha Ennai is particularly popular among elderly users for knee pain, arthritis, and joint stiffness. The gentle, herbal formulation is designed to provide relief without harsh chemicals. Always patch-test if you have sensitive skin.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AnimatedSection className="bg-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-3xl font-bold text-secondary md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left font-semibold text-secondary"
                aria-expanded={openIndex === i}
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="border-t border-cream-dark px-6 py-4 text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
