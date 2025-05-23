import Container from "@/components/Container";
import { notFound } from "next/navigation";
import { products } from "@/db/products.json";
import ProductClient from "./ProductClient";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) return notFound();

  return (
    <Container>
      <ProductClient product={product} />
    </Container>
  );
}
