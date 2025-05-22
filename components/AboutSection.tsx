import Image from "next/image";
import Container from "./Container";
import { FaRegCircleCheck } from "react-icons/fa6";
import Button from "./Button";

interface AboutSectionProps {
  about: {
    title: string;
    subtitle: string;
    features: {
      id: number;
      title: string;
      description: string;
    }[];
    image: string;
  };
}

function AboutSection({ about }: AboutSectionProps) {
  return (
    <section className="bg-[#F7F8FA] pt-32 pb-52">
      <Container>
        <div className="flex justify-between items-center gap-8">
          <div>
            <h2 className="text-[40px] font-medium mb-2 max-w-[400px] leading-[46px]">
              {about.title}
            </h2>
            <p className="text-[#56B280] mb-8">{about.subtitle}</p>

            <ul className="mb-16">
              {about.features.map((item) => (
                <li className="my-3 flex items-center gap-2" key={item.id}>
                  <FaRegCircleCheck />

                  <div>
                    <span className="font-semibold">{item.title}</span>:{" "}
                    {item.description}
                  </div>
                </li>
              ))}
            </ul>
            <Button type="link" href="/about">
              Learn more
            </Button>
          </div>
          <div className="overflow-hidden">
            <Image
              src={about.image}
              alt={about.title}
              width={500}
              height={100}
              className="shadow-lg hover:scale-115 transition duration-300"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
