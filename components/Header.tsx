import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import Nav from "./Nav";
import { FaRegUser } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";

function Header() {
  return (
    <header className="py-5">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <Nav />

          <div className="flex items-center gap-x-4">
            <Link href="/register" className="text-sm font-medium">
              <FaRegUser className="text-lg" />
            </Link>

            <Link href="/cart" className="text-sm font-medium">
              <BsCart3 className="text-lg" />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
