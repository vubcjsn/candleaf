import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="flex items-center gap-x-8">
      <Link href="/catalog">Shop</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}

export default Nav;
