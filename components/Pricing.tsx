"use client";

import AnimatedSection from "./AnimatedSection";

const WHATSAPP_LINK =
  "https://wa.me/917305230228?text=Hi%20I%20want%20to%20order%20Thatha%20Ennai";

export default function Pricing() {
  return (
    <AnimatedSection className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-serif text-3xl font-bold text-secondary md:text-4xl">
          Simple, Honest Pricing
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-gray-600 md:text-lg">
          One bottle. Lasting relief.
        </p>

        <div className="mt-16 rounded-3xl border-2 border-primary bg-cream p-8 md:p-12">
          <div className="text-center">
            <p className="text-lg text-gray-600">Thatha Ennai</p>
            <p className="text-4xl font-bold text-secondary md:text-5xl">₹300</p>
            <p className="mt-2 text-gray-500">MRP (Inclusive of taxes)</p>
            <p className="mt-1 text-gray-500">100ml</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#20BD5A] md:w-auto"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
