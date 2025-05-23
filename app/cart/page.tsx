"use client";

import Container from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/store"; // Import your Zustand store

function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const totalPrice = useCartStore((state) => state.totalPrice());

  if (cart.length === 0) {
    return (
      <Container>
        <div className="py-12 text-center">
          <h2 className="text-3xl font-medium mb-2">Your cart is empty</h2>
          <Link className="text-[#56B280] underline" href="/products">
            Back to shopping
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium mb-2">Your cart items</h2>
          <Link className="text-[#56B280] underline" href="/products">
            Back to shopping
          </Link>
        </div>

        <table className="w-full text-center">
          <thead>
            <tr className="border-b border-[#56B280]">
              <th className="py-4 px-4">Product</th>
              <th className="py-4 px-4">Price</th>
              <th className="py-4 px-4">Quantity</th>
              <th className="py-4 px-4">Total</th>
              <th className="py-4 px-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b border-[#56B280]">
                <td className="py-6 px-4">
                  <div className="w-full flex items-center gap-4">
                    <div className="py-4 bg-gray-100 w-[80px] h-[80px] flex items-center justify-center rounded-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-lg font-medium">{item.title}</p>
                  </div>
                </td>
                <td className="py-6 px-4">${item.price}</td>
                <td className="py-6 px-4 ">
                  <div className="flex items-center justify-center">
                    <button
                      className="mx-auto w-[30px] h-[30px] flex items-center justify-center border border-[#56B280] rounded text-[#56B280] cursor-pointer font-medium"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity > 1 ? item.quantity - 1 : 1
                        )
                      }
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="mx-auto w-[30px] h-[30px] flex items-center justify-center border border-[#56B280] rounded text-[#56B280] cursor-pointer font-medium"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="py-6 px-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="py-6 px-4 ">
                  <button
                    className="mx-auto w-[30px] h-[30px] flex items-center justify-center border border-[#56B280] rounded text-[#56B280] cursor-pointer font-medium"
                    onClick={() => removeFromCart(item.id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td
                className="py-6 px-4 text-right text-lg font-medium"
                colSpan={3}
              >
                Sub-total
              </td>
              <td className="py-6 px-4 text-lg font-medium">
                ${totalPrice.toFixed(2)}
              </td>
              <td className="py-6 px-4">
                <Link
                  href="/checkout"
                  className="bg-[#56B280] py-1.5 px-10 text-white rounded-sm"
                >
                  Checkout
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}

export default CartPage;
