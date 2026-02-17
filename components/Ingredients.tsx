"use client";

import AnimatedSection from "./AnimatedSection";

const ingredientGroups = [
  { count: 15, label: "Herbs", color: "bg-secondary/10 text-secondary" },
  { count: 11, label: "Roots", color: "bg-primary/20 text-primary-dark" },
  { count: 7, label: "Traditional Oils", color: "bg-secondary/10 text-secondary" },
  { count: 4, label: "Siddha Ingredients", color: "bg-primary/20 text-primary-dark" },
];

const oils = ["Sesame", "Coconut", "Neem", "Pungai", "Iluppai"];
const siddhaIngredients = ["Nandiyavattam", "Vengayam", "Kal Maavu", "Vedi Uppu"];

export default function Ingredients() {
  return (
    <AnimatedSection className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-serif text-3xl font-bold text-secondary md:text-4xl">
          30+ Traditional Medicinal Ingredients
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600 md:text-lg">
          Rooted in ancient Siddha tradition, Thatha Ennai combines herbs, roots, and oils
          passed down through generations of healers in Tamil Nadu.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ingredientGroups.map((group, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 text-center ${group.color}`}
            >
              <span className="text-4xl font-bold">{group.count}</span>
              <p className="mt-2 font-semibold">{group.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-primary/30 bg-cream p-6">
            <h3 className="font-semibold text-secondary">Traditional Oils Include</h3>
            <p className="mt-2 text-gray-600">
              {oils.join(", ")}—and more. Each oil is chosen for its therapeutic properties
              in Siddha medicine.
            </p>
          </div>
          <div className="rounded-2xl border border-secondary/30 bg-cream p-6">
            <h3 className="font-semibold text-secondary">Special Siddha Ingredients</h3>
            <p className="mt-2 text-gray-600">
              {siddhaIngredients.join(", ")}—rare formulations known for their effectiveness
              in joint and muscular wellness.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            100% Herbal
          </span>
          <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            No Chemicals
          </span>
          <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            No Side Effects
          </span>
          <span className="rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
            Made in India
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
