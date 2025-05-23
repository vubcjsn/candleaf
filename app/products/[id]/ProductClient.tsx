"use client";

import Image from "next/image";
import { useState } from "react";
import { useCartStore } from "@/store/store"; // Убедитесь, что путь к вашему store верный

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  characteristics: {
    wax: string;
    fragrance: string;
    "burning time": string;
    dimensions: string;
    weight: string;
  };
}

export default function ProductClient({ product }: { product: Product }) {
  // Получаем необходимые функции и состояние из хранилища корзины
  const addToCart = useCartStore((state) => state.addToCart);
  const cartItems = useCartStore((state) => state.cart);

  // Локальное состояние для количества товара, который пользователь хочет добавить
  const [quantity, setQuantity] = useState(1);
  const [addedToCartFeedback, setAddedToCartFeedback] = useState(false);

  // Функция для добавления товара в корзину
  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Передаем копию объекта продукта и текущее количество
    setAddedToCartFeedback(true);
    setTimeout(() => setAddedToCartFeedback(false), 2000);
  };

  // Функции для увеличения и уменьшения количества
  const increment = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const decrement = () =>
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  return (
    <div className="py-14 flex flex-col md:flex-row gap-8">
      <div>
        <div className="p-8 bg-gray-100 rounded-sm mb-4 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="text-center">
          <p className="mb-2 px-2">
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </p>
          <p className="text-2xl font-medium">🚚 FREE SHIPPING</p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-medium mb-8">{product.title}</h2>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <span className="font-medium text-3xl text-[#56B280] inline-block mb-8">
              ${product.price}
            </span>
            <div className="flex flex-col">
              <span className="mb-2 font-medium">Quantity</span>
              <div className="flex gap-4 border border-[#56B280] p-2 items-center">
                <button
                  className="font-medium text-[#56B280] text-xl cursor-pointer"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="font-medium text-lg">{quantity}</span>
                <button
                  className="font-medium text-[#56B280] text-xl cursor-pointer"
                  onClick={increment}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-1">
            <p className="border border-[#56B280] p-4 rounded-lg mb-4">
              {product.description}
            </p>
            <button
              className="bg-[#56B280] text-white py-2 px-8 rounded cursor-pointer"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
            {addedToCartFeedback && (
              <p className="text-green-600 mt-2">✔ Product added to cart</p>
            )}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-medium text-xl mb-2">Product Details</h3>
          <ul className="text-sm flex flex-col gap-2">
            <li className="text-[#56B280]">
              <span className="font-medium text-black">Wax: </span>
              {product.characteristics.wax}
            </li>
            <li className="text-[#56B280]">
              <span className="font-medium text-black">Fragrance: </span>
              {product.characteristics.fragrance}
            </li>
            <li className="text-[#56B280]">
              <span className="font-medium text-black">Burning Time: </span>
              {product.characteristics["burning time"]}
            </li>
            <li className="text-[#56B280]">
              <span className="font-medium text-black">Dimensions: </span>
              {product.characteristics.dimensions}
            </li>
            <li className="text-[#56B280]">
              <span className="font-medium text-black">Weight: </span>
              {product.characteristics.weight}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
