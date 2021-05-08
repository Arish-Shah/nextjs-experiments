import styled from "styled-components";
import Link from "next/link";

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const links: { text: string; href: string }[] = [
    { text: "About Us", href: "/about#about" },
    { text: "Contact", href: "/about#contact" },
    { text: "Blog", href: "https://blog.twitter.com" },
    { text: "Status", href: "https://status.twitter.com" },
    { text: "Apps", href: "/downloads" },
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
        <ListItem>&copy; 2008 Twitter</ListItem>
        {links.map((link, i) => (
          <ListItem key={i}>
            <Link href={link.href} passHref>
              <Anchor>{link.text}</Anchor>
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 8px 0;
  background: #fff;
  text-align: center;
  border-radius: 5px;
  font: 12px/1 "Lucida Grande", sans-serif;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  margin: 0 4px;
`;

const Anchor = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
