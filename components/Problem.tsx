"use client";

import AnimatedSection from "./AnimatedSection";

const painPoints = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Elderly & Daily Life",
    description: "Stairs become a challenge. Morning stiffness keeps you from enjoying your day. Simple walks feel like a struggle.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Arthritis & Chronic Pain",
    description: "Swollen joints, stiffness, and constant discomfort. You&apos;ve tried many remedies but nothing brings lasting relief.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Working Professionals",
    description: "Long hours sitting or standing take a toll. Your knees and joints ache by evening, affecting productivity and mood.",
  },
];

export default function Problem() {
  return (
    <AnimatedSection className="bg-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl font-bold text-secondary md:text-4xl">
          You Deserve to Move Freely
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 md:text-lg">
          Knee and joint pain shouldn&apos;t hold you back. Whether you&apos;re an elder, living with arthritis,
          or a professional with desk-related strain—relief is possible.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-full bg-primary/20 p-3 text-primary">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary">{point.title}</h3>
              <p className="mt-2 text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
