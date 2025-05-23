import { create } from "zustand";
import { persist } from "zustand/middleware";

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

interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  totalItemsInCart: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
          }
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })),
      totalItemsInCart: () =>
        get().cart.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: () =>
        get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    {
      name: "shopping-cart", // Название ключа в localStorage
    }
  )
);

const useStore = create((set, get) => ({
  // Начальное состояние
  products: [],
  cart: [],
  user: null,

  // Действия (actions) для изменения состояния
  setProducts: (newProducts) => set({ products: newProducts }),
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  setUser: (userData) => set({ user: userData }),

  // Геттеры (getters) для получения производных значений (опционально)
  totalItemsInCart: () => get().cart.length,
  totalPrice: () => get().cart.reduce((sum, item) => sum + item.price, 0),
}));

export default useStore;
