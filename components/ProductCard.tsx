import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
    title: string;
    price: number;
    image: string;
    id: number;
  };
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="shadow-lg rounded-sm overflow-hidden hover:scale-110 transition duration-300 ease-in-out">
      <Link href={`/product/${product.id}`}>
        <div className="bg-gray-100 flex justify-items-center p-8">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="mx-auto "
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium mb-1.5">{product.title}</h3>
          <div className="flex justify-end">
            <span className="text-xl font-medium text-[#56B280]">
              {product.price}$
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
