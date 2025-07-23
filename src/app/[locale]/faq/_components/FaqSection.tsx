"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";


export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations('faq');
  const faqs = t.raw('items') as { question: string; answer: string }[];
  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section>
      <div className="bg-[#f3f3f3] rounded-md py-8 md:py-16">
        <h2 className="text-3xl font-bold text-center pb-5 md:pb-9">{t('title')}</h2>
        <div className="px-10 space-y-5">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left px-6 py-4 text-lg font-medium"
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <Minus className="w-5 h-5 text-black" />
                ) : (
                  <Plus className="w-5 h-5 text-black" />
                )}
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-l border-r border-b border-gray-300 bg-[#f3f3f3] px-6"
                  >
                    <div className="py-4 text-base">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
