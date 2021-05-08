import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export interface HeaderProps {
  lang?: boolean;
  nav?: boolean;
  me?: string;
}

export const Header: React.FC<HeaderProps> = ({ lang, nav, me }) => {
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
          <Link key={link.text} href={link.href} passHref>
            <Anchor className="in">{link.text}</Anchor>
          </Link>
        ))
      ) : (
        <>
          <Link href="/login" passHref>
            <Anchor>Login</Anchor>
          </Link>
          {" / "}
          <Link href="/signup" passHref>
            <Anchor>Join Twitter!</Anchor>
          </Link>
        </>
      )}
    </>
  );

  const navigation = <Navigation>{navContent}</Navigation>;

  const dropdown = (
    <Select>
      <option>Select Language...</option>
      <option>English</option>
    </Select>
  );

  return (
    <header>
      <Wrapper>
        <Link href="/">
          <a title="Twitter: home">
            <Image
              src={`/assets/twitter${lang ? "" : "-small"}.png`}
              height={lang ? 49 : 41}
              width={lang ? 210 : 175}
              draggable={false}
            />
          </a>
        </Link>
        {lang ? dropdown : nav ? navigation : null}
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Select = styled.select`
  border: 1px solid #aaa;
  padding: 0 2px;
  width: 146.8px;
  height: 27px;
  margin-right: 3px;
  margin-top: 1px;
`;

const Navigation = styled.nav`
  padding: 8px 10px;
  background: #fff;
  border-radius: 5px;
  margin-top: 9px;
`;

const Anchor = styled.a`
  text-decoration: none;
  &.in {
    margin: 0 4px;
  }
  &:hover {
    text-decoration: underline;
  }
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;
