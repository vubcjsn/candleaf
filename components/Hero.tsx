import Button from "./Button";

function Hero({ hero }) {
  return (
    <section className="bg-[url(/images/bg-image.png)] bg-no-repeat bg-center bg-cover pt-[175px] pb-[180px]">
      <div className="max-w-[730px] mx-auto bg-white/80 p-[65px] text-center">
        <h1 className="text-4xl font-medium leading-[56px]">
          <span className="text-4xl block">🌱</span>
          {hero.title}
        </h1>
        <p className="mb-[45px]">{hero.subtitle}</p>
        <Button type="link" href="/catalog">
          Discovery our collection
        </Button>
      </div>
    </section>
  );
}

export default Hero;
