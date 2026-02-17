"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "R. Lakshmi",
    context: "62, Chennai",
    quote: "My knee pain was unbearable. After using Thatha Ennai for 2 weeks, I can climb stairs comfortably. Truly grateful.",
    stars: 5,
  },
  {
    name: "M. Suresh",
    context: "45, Coimbatore",
    quote: "As someone with desk job back and knee issues, this oil has been a lifesaver. No chemical smell, absorbs well.",
    stars: 5,
  },
  {
    name: "K. Meenakshi",
    context: "55, Madurai",
    quote: "I was skeptical about herbal oils. Thatha Ennai proved me wrong. Swelling reduced, mobility improved.",
    stars: 5,
  },
  {
    name: "P. Rajan",
    context: "70, Tirunelveli",
    quote: "Traditional medicine that works. My arthritic pain is much better. Recommend to all elders.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-primary">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <AnimatedSection className="bg-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl font-bold text-secondary md:text-4xl">
          What Our Users Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 md:text-lg">
          Real relief from real people
        </p>

        <div className="mt-16 flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="min-w-[280px] flex-1 rounded-2xl bg-white p-6 shadow-md md:min-w-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <StarRating count={t.stars} />
              <p className="mt-4 text-gray-700">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 font-semibold text-secondary">{t.name}</p>
              <p className="text-sm text-gray-500">{t.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
