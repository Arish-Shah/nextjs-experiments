import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  forIndex?: boolean;
}

export function Header({ forIndex }: HeaderProps) {
  return (
    <nav className="flex justify-between items-center">
      <Link href="/" title="Twitter: home">
        <Image
          src={`/images/twitter${!forIndex ? "_logo_s" : ""}.png`}
          alt="Twitter.com"
          width={forIndex ? 210: 175}
          height={forIndex ? 49 : 41}
          quality={100}
        />
      </Link>
      {!forIndex && <div className="bg-white p-[6px_10px_6px_10px] rounded-[5px] mt-[4px]">
        <ul>
          <li>
            <Link href="/login">Login</Link>{" "}
            /{" "}
            <Link href="/signup">Join Twitter!</Link>
          </li>
        </ul>
      </div>}
    </nav>
  );
}
