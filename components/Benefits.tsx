"use client";

import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Relieves Knee & Joint Pain",
    description: "Targeted relief for knee, shoulder, and joint discomfort.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Reduces Swelling & Stiffness",
    description: "Soothing properties help minimize inflammation and stiffness.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Improves Mobility",
    description: "Move more freely with less restriction and discomfort.",
  },
  {
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Strengthens Joints",
    description: "Nourishing ingredients support joint health over time.",
  },
];

export default function Benefits() {
  return (
    <AnimatedSection className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl font-bold text-secondary md:text-4xl">
          Core Benefits
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 md:text-lg">
          Experience natural relief with every application
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-cream-dark bg-cream p-6 transition hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-full bg-primary/20 p-3 text-primary transition group-hover:bg-primary/30">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-secondary">{benefit.title}</h3>
              <p className="mt-2 text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
