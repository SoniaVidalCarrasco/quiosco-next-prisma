"use client";

import { Product } from "@prisma/client";
import { useStore } from "@/src/store";

type AddProductButtonProps = {
  product: Product;
};

export default function AddProductButton({ product }: AddProductButtonProps) {
  const addToOrder = useStore((state) => state.addToOrder);

  return (
    <button
      className="bg-emerald-600 hover:bg-emerald-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-lg"
      onClick={() => addToOrder(product)}
    >
      Agregar
    </button>
  );
}
