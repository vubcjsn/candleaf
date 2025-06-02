import Button from "@/components/Button";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { hero } from "@/db/hero.json";
import { products } from "@/db/products.json";
import { about } from "@/db/about.json";
import AboutSection from "@/components/AboutSection";
import CarouselSection from "@/components/CarouselSection";
import DiscountModal from "@/components/DiscountModal";

export default async function Home() {
  return (
    <>
      <Hero hero={hero} />
      <section className="pt-24 pb-32">
        <Container>
          <div className="max-w-1/2 mx-auto text-center mb-16">
            <h2 className="font-medium text-4xl mb-4">Products</h2>
            <p className="text-gray-500">
              Order it for you or for your beloved ones{" "}
            </p>
          </div>
          <div className="w-full grid grid-cols-4 gap-8 mb-10">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button type="link" href="/shop">
              See all products
            </Button>
          </div>
        </Container>
      </section>
      <AboutSection about={about} />
      <CarouselSection />
      <DiscountModal />
    </>
  );
}
