import Link from "next/link";

export const LogoWhite = () => {
  return (
    <>
    <Link href="/">
      <a className="w-full block py-5">
        <img
          src="./logo-white.png"
          alt="logo"
          className="w-full header-logo"
        />
      </a>
    </Link>
    </>
  );
};
