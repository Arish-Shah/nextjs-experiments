import Image from "next/image";
import Link from "next/link";

export interface HeaderProps {
  navigation: boolean;
  color?: string;
  me?: string;
}

const SignedInNavContent = () => (
  <>
    <Link href="/signin">
      <a>Login</a>
    </Link>
    {" / "}
    <Link href="/signup">
      <a>Join Twitter!</a>
    </Link>
  </>
);

const SignedOutNavContent = ({ me }: { me: string }) => {
  const links = [
    { text: "Home", href: "/home" },
    { text: "Profile", href: "/" + me },
    { text: "Find People", href: "/find" },
    { text: "Settings", href: `/${me}/settings` },
    { text: "Help", href: `/help` },
    { text: "Sign out", href: "/signout" },
  ];

  return (
    <div className="links">
      {links.map((link) => (
        <Link key={link.text} href={link.href}>
          <a>{link.text}</a>
        </Link>
      ))}
    </div>
  );
};

export const Header: React.FC<HeaderProps> = ({
  navigation,
  color = "#0000ff",
  me,
}) => {
  return (
    <header>
      <div className="wrapper">
        <Link href="/">
          <a title="Twitter: home">
            <Image
              src="/assets/twitter.png"
              width="175px"
              height="41px"
              draggable={false}
            />
          </a>
        </Link>
        {navigation && (
          <div className="navigation">
            {me ? <SignedOutNavContent me={me} /> : <SignedInNavContent />}
          </div>
        )}
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navigation {
          font: 12.6px/1 "Lucida Grande", sans-serif;
          background: #fff;
          padding: 8px 10px;
          border-radius: 5px;
          margin-top: 5px;
        }

        .navigation a {
          color: ${color};
          text-decoration: none;
        }

        .navigation a:hover {
          text-decoration: underline;
        }

        .navigation .links a {
          padding: 0 5px;
        }

        .navigation .links a:first-of-type {
          padding-left: 0px;
        }

        .navigation .links a:last-of-type {
          padding-right: 0px;
        }
      `}</style>
    </header>
  );
};
