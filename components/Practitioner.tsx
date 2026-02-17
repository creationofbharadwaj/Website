"use client";

import AnimatedSection from "./AnimatedSection";

export default function Practitioner() {
  return (
    <AnimatedSection className="bg-secondary px-6 py-20 text-white md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center font-serif text-3xl font-bold md:text-4xl">
          Trusted by a Siddha Medical Practitioner
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-cream/90 md:text-lg">
          Formulated under the guidance of registered Siddha expertise
        </p>

        <div className="mt-16 rounded-2xl border border-cream/20 bg-white/5 p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold">K.R. Ponnambalam</h3>
            <p className="mt-2 text-primary-light">Siddha Medical Practitioner</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                RMP
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                RSMP
              </span>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                GSMC / BC219/2018
              </span>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 border-t border-cream/20 pt-8 md:flex-row md:justify-between">
            <div>
              <p className="text-sm font-semibold text-primary-light">Manufactured & Marketed by</p>
              <p className="mt-1 font-medium">P&R Naturals</p>
              <p className="text-cream/80">Tirunelveli, Tamil Nadu, India</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary-light">Registered</p>
              <p className="mt-1">UDYAM-TN-10-0044532</p>
              <p className="text-cream/80">BC219/2018</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
