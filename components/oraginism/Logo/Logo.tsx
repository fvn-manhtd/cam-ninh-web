import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <a className="navbar-logo w-full block py-5">
        <img
          src="./logo.png"
          alt="logo"
          className="w-full header-logo"
        />
      </a>
    </Link>
  );
};
