import React from "react";
export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Текст слева */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-[#5BC08A] ">
            About Candleaf
          </h1>
          <p className="text-lg text-gray-700">
            Candleaf began as a small passion project in the heart of a cozy
            countryside town. Founded in 2017 by two childhood friends, Anna and
            Leo, our mission was simple — to bring warmth, calm, and a touch of
            nature into people’s homes through beautifully handcrafted candles.
            Inspired by the peacefulness of forest walks and the comfort of
            home, our candles are made with 100% natural soy wax, lead-free
            cotton wicks, and carefully selected fragrances derived from
            essential oils. Every candle is poured by hand, with love and
            attention to detail, in our local studio. What started as a weekend
            hobby soon grew into a thriving brand embraced by people who value
            sustainability, mindfulness, and simple pleasures. Today, Candleaf
            ships worldwide, but our heart remains in creating honest,
            earth-friendly products that light up lives — one candle at a time.
          </p>
        </div>

        {/* Картинка справа */}
        <div className="flex-1">
          <img
            src="/images/aboutimg.png"
            alt="Candles"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>
      </div>
    </div>
  );
}
