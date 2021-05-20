import { Fragment } from "react";
import styled from "styled-components";
import Link from "next/link";

export interface HeaderProps {
  lang?: boolean;
  me?: string;
  hideNav?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ lang, me, hideNav }) => {
  const links: { text: string; href: string }[] = [
    { text: "Home", href: "/home" },
    { text: "Profile", href: `/${me}` },
    { text: "Find People", href: "/find" },
    { text: "Settings", href: "/account/settings" },
    { text: "Help", href: "/help" },
    { text: "Sign out", href: "/signout" },
  ];

  const navigation = (
    <Navigation>
      <Links>
        {me ? (
          links.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a>{link.text}</a>
              </Link>
            </li>
          ))
        ) : (
          <Fragment>
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
              {" / "}
              <Link href="/signup">
                <a>Join Twitter!</a>
              </Link>
            </li>
          </Fragment>
        )}
      </Links>
    </Navigation>
  );

  const langDropdown = (
    <Select>
      <option value="">Select Language&nbsp;...&nbsp;</option>
      <option value="en">English</option>
    </Select>
  );

  return (
    <header>
      <Wrapper>
        <Link href="/">
          <a title="Twitter: home">
            <img
              src={`/assets/twitter${lang ? "" : "-small"}.png`}
              width={lang ? 210 : 175}
              height={lang ? 49 : 41}
              draggable={false}
            />
          </a>
        </Link>
        {lang ? langDropdown : !hideNav ? navigation : null}
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Navigation = styled.nav`
  background: #fff;
  padding: 6px 5px;
  line-height: 1.5em;
  border-radius: 5px;
  margin-top: 9px;
`;

const Links = styled.ul`
  list-style: none;
  display: flex;
  li {
    padding: 0 5px;
  }
`;

const Select = styled.select`
  padding: 4px 2px;
  border: 1px solid #aaa;
  margin-top: 2px;
  margin-right: -5px;
`;
