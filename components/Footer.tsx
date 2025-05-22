import LogoImage from "@/assets/images/logo-footer.svg";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container>
        <div className="flex items-center justify-center gap-8">
          <Link href="/">
            <Image
              src={LogoImage}
              width={150}
              height={40}
              alt="CandleLeaf"
              className="object-contain"
            />
          </Link>
          <p>{new Date().getFullYear()}. &copy; All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
