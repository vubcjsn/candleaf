import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex items-center gap-x-8">
      <Link href="/products" className="hover:text-[#56B280]">
        Shop
      </Link>
      <Link href="/about" className="hover:text-[#56B280]">
        About
      </Link>
      <Link href="/contact" className="hover:text-[#56B280]">
        Contact
      </Link>
    </nav>
  );
}

export default Nav;
