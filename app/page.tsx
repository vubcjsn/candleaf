import Hero from "@/components/Hero";
import { hero } from "@/db/hero.json";

export default async function Home() {
  return (
    <>
      <Hero hero={hero} />
    </>
  );
}
