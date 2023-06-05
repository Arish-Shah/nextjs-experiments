import Link from "next/link";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <nav>
      <Link href="/">
      	<img src="/images/twitter.png" />
      </Link>
    </nav>
  );
}
