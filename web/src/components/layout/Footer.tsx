import Link from "next/link";
import styled from "styled-components";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const links: { text: string; href: string }[] = [
    { text: "About Us", href: "/about#about" },
    { text: "Contact", href: "/about#contact" },
    { text: "Blog", href: "https://blog.twitter.com" },
    { text: "Status", href: "https://status.twitter.com" },
    { text: "Downloads", href: "/downloads" },
    { text: "API", href: "https://apiwiki.twitter.com" },
    { text: "Search", href: "https://search.twitter.com" },
    { text: "Help", href: "https://help.twitter.com" },
    { text: "Jobs", href: "/jobs" },
    { text: "Terms", href: "/terms" },
    { text: "Privacy", href: "/privacy" },
  ];

  return (
    <StyledFooter>
      <UnorderedList>
        <li>&copy; 2008 Twitter</li>
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href}>
              <a>{link.text}</a>
            </Link>
          </li>
        ))}
      </UnorderedList>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: #fff;
  padding: 8px 0;
  border-radius: 5px;
  white-space: nowrap;
  line-height: 1;
`;

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  li {
    padding: 0 4px;
  }
`;

export default Footer;
