"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Apply",
    description: "Apply Thatha Ennai on the affected area—knee, joints, or muscles.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Massage",
    description: "Massage gently in circular motions for 2–3 minutes for better absorption.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Absorb",
    description: "Allow the oil to absorb. Use 2–3 times daily for best results.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <AnimatedSection className="bg-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl font-bold text-secondary md:text-4xl">
          How It Works
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600 md:text-lg">
          Simple 3-step process for natural relief
        </p>

        <div className="mt-16 flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative flex flex-1 flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white">
                {step.icon}
              </div>
              <span className="mt-4 text-sm font-semibold text-primary">Step {step.number}</span>
              <h3 className="mt-2 text-xl font-semibold text-secondary">{step.title}</h3>
              <p className="mt-2 max-w-xs text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
