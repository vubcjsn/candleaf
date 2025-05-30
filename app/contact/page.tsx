"use client";

import {
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import Image from "next/image";
import { FiMapPin, FiHome } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex gap-12">
        {/* Левая колонка - Контакты */}
        <div className="w-1/2">
          <h1
            className="text-3xl font-bold mb-6 text-[#5BC08A] max-w-5xl mx-auto p-8 mt-10
          "
          >
            Contact Us
          </h1>

          <div className="space-y-6 text-lg">
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-[#25D366]" size={28} />
              <span>+1 (234) 567-8901</span>
            </div>

            <div className="flex items-center gap-4">
              <FaTelegramPlane className="text-[#0088cc]" size={28} />
              <span>@candleaf_support</span>
            </div>

            <div className="flex items-center gap-4">
              <FaInstagram className="text-[#C13584]" size={28} />
              <span>@candleaf.official</span>
            </div>

            <div className="flex items-center gap-4">
              <FaFacebookF className="text-[#1877F2]" size={28} />
              <span>@candleaf.home</span>
            </div>
          </div>
        </div>

        {/* Правая колонка - Адреса магазинов */}
        <div className="w-1/2">
          <h2 className="flex items-center text-3xl font-semibold mb-6 text-[#5BC08A] max-w-5xl mx-auto p-8 mt-10">
            <FiHome className="mr-2 text-[#5BC08A]" size={24} />
            Addresses of our stores:
          </h2>

          <ul className="space-y-3 text-gray-700 text-lg">
            <li className="flex items-center">
              <FiMapPin className="mr-3 text-red-500" size={20} />
              Moscow, Pushkin st.h/10
            </li>
            <li className="flex items-center">
              <FiMapPin className="mr-3 text-red-500" size={20} />
              Saint Petersburg, Nevsky st.h/ 20
            </li>
          </ul>

          <h3 className="text-3xl font-semibold mt-10 mb-2 text-[#5BC08A] max-w-5xl mx-auto p-8 mt-10">
            Dear customers!
          </h3>
          <p className="text-lg text-gray-700">
            If you have any questions or need assistance, feel free to reach out
            to our support team anytime. We're always happy to help!
          </p>
        </div>
      </div>
    </div>
  );
}
