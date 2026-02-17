"use client";

import AnimatedSection from "./AnimatedSection";

export default function Footer() {
  return (
    <AnimatedSection className="bg-secondary px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-xl font-bold">Thatha Ennai</h3>
            <p className="mt-2 text-cream/80">
              Ayurvedic Pain Reliever Oil
              <br />
              100% Herbal • Made in India
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <span className="font-medium">Made in India</span>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <a
              href="tel:+917305230228"
              className="mt-2 block text-cream/90 hover:text-primary-light"
            >
              +91 73052 30228
            </a>
            <a
              href="https://wa.me/917305230228?text=Hi%20I%20want%20to%20order%20Thatha%20Ennai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-cream/90 hover:text-primary-light"
            >
              WhatsApp
            </a>
          </div>
          <div>
            <h4 className="font-semibold">Address</h4>
            <p className="mt-2 text-cream/80">
              P&R Naturals
              <br />
              Tirunelveli, Tamil Nadu, India
            </p>
            <p className="mt-2 text-sm text-cream/70">
              UDYAM-TN-10-0044532
              <br />
              BC219/2018
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/20 pt-8 text-center text-sm text-cream/70">
          Manufactured & Marketed by K.R. Ponnambalam (RMP, RSMP, GSMC / BC219/2018), Siddha Medical
          Practitioner
        </div>
      </div>
    </AnimatedSection>
  );
}
