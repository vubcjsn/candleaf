"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function DiscountModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Показываем окно через 300 мс после загрузки
    const timer = setTimeout(() => setIsOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full relative p-6">
        {/* Кнопка закрытия */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* Картинка */}
        <Image
          src="/images/discount.jpg"
          alt="Promo"
          width={400}
          height={250}
          className="rounded mb-4 w-full object-cover"
        />

        {/* Текст и форма */}
        <h2 className="text-center text-xl font-semibold mb-2">
          GIVE A -12% DISCOUNT ON YOUR FIRST ORDER!
        </h2>
        <p className="text-center text-gray-600 mb-4 text-sm">
          Subscribe to get a promo code and be the first to know about new
          products and promotions!
        </p>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border-b border-gray-400 p-2 placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border-b border-gray-400 p-2 placeholder-gray-400 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full border border-black py-2 mt-2 hover:bg-black hover:text-white transition"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}
