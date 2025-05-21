import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

function Header() {
  return (
    <header className="py-5">
      <Container>
        <Link href="/">
          <Logo />
        </Link>
      </Container>
    </header>
  );
}

export default Header;
