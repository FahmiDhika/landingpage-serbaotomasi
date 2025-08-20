"use client";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Bagaimana cara membeli produk Serba Otomasi?",
    answer:
      "Kalian bisa menghubungi nomor wa +6285336664466, atau melewati marketplace seperti shopee, tokopedia, maupun TikTok Shop.",
  },
  {
    question: "Bagaimana cara instalasi produk?",
    answer:
      "Dalam paket penjualan telah terdapat manual book untuk instalasi nya atau kalian bisa melihatnya di link youtube yang tertera pada halaman produk di Tokopedia.",
  },
  {
    question:
      "Bagaimana cara saya menghubungi customer service jika terjadi kendala?",
    answer: "Kalian bisa menghubungi nomor wa +6285336664466.",
  },
  {
    question:
      "Apakah Serba Otomasi menyediakan layanan pengiriman ke seluruh Indonesia?",
    answer:
      "Betul, kami melayani pengiriman ke seluruh Indonesia dengan berbagai pilihan ekspedisi yang aman dan cepat.",
  },
  {
    question:
      "Apakah alat yang ada auto tartil nya perlu membeli mesin auto tartil lagi?",
    answer:
      "TIDAK. alat yang sudah terdapat auto tartil nya tidak perlu membeli mesin auto tartil lagi.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full h-fit bg-zinc-100">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq: FAQ, index: number) => (
            <div
              key={index}
              className="border rounded-lg overflow-auto shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ⌃
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-600 bg-white border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
