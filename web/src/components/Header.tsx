import Image from "next/image";
import Link from "next/link";

export interface HeaderProps {
  withLang?: boolean;
  withNav?: boolean;
  me?: string;
}

export const Header: React.FC<HeaderProps> = ({ withLang, withNav, me }) => {
  const links: { text: string; href: string }[] = [
    { text: "Home", href: "/" },
    { text: "Profile", href: `/${me}` },
    { text: "Find People", href: "/find" },
    { text: "Settings", href: "/account/settings" },
    { text: "Help", href: "/help" },
    { text: "Sign out", href: "/sign-out" },
  ];

  const navContent = (
    <>
      {me ? (
        links.map((link) => (
          <Link key={link.text} href={link.href}>
            <a className="in">{link.text}</a>
          </Link>
        ))
      ) : (
        <>
          <Link href="/login">
            <a>Login</a>
          </Link>
          {" / "}
          <Link href="/signup">
            <a>Join Twitter!</a>
          </Link>
        </>
      )}
      <style jsx>{`
        a {
          font: 12.6px "Lucida Grande", sans-serif;
          text-decoration: none;
          color: #0084b4;
        }
        a.in {
          margin: 0 5px;
        }
        a:hover {
          text-decoration: underline;
        }
        a:first-of-type {
          margin-left: 0;
        }
        a:last-of-type {
          margin-right: 0;
        }
      `}</style>
    </>
  );

  const dropdown = (
    <select>
      <option>Select Language...</option>
      <option>English</option>
      <style jsx>{`
        select {
          border: 1px solid #aaa;
          padding: 4px 2px;
        }
      `}</style>
    </select>
  );

  const nav = (
    <div className="navigation">
      {navContent}
      <style jsx>{`
        .navigation {
          padding: 7px 10px;
          background: #fff;
          border-radius: 5px;
          margin-top: 9px;
        }
      `}</style>
    </div>
  );

  return (
    <header>
      <div className="wrapper">
        <Link href="/">
          <a title="Twitter: home">
            <Image
              src="/assets/twitter.png"
              height={41}
              width={175}
              draggable={false}
            />
          </a>
        </Link>
        {withLang ? dropdown : withNav ? nav : ""}
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          justify-content: space-between;
          align-items: start;
        }
      `}</style>
    </header>
  );
};
